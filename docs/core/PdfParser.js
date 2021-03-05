import Item from "./Item.js";
import Metadata from "./Metadata.js";
import ParseResult from "./ParseResult.js";
export default class PdfParser {
  constructor(pdfjs, defaultParams = {}) {
    this.schema = ["transform", "str", "fontName", "dir", "width", "height"];
    this.pdfjs = pdfjs;
    this.defaultParams = defaultParams;
  }
  async parse(src, reporter) {
    const documentInitParameters = {...this.defaultParams, ...this.documentInitParameters(src)};
    return this.pdfjs.getDocument(documentInitParameters).promise.then((pdfjsDocument) => {
      reporter.parsedDocumentHeader(pdfjsDocument.numPages);
      return Promise.all([
        pdfjsDocument.getMetadata().then((pdfjsMetadata) => {
          reporter.parsedMetadata();
          return new Metadata(pdfjsMetadata);
        }),
        this.extractPagesSequentially(pdfjsDocument, reporter)
      ]);
    }).then(([metadata, pages]) => {
      return Promise.all([metadata, pages, this.gatherFontObjects(pages).finally(() => reporter.parsedFonts())]);
    }).then(([metadata, pages, fontMap]) => {
      const pdfjsPages = pages.map((page) => page.pdfjsPage);
      const items = pages.reduce((allItems, page) => allItems.concat(page.items), []);
      const pageViewports = pdfjsPages.map((page) => {
        const viewPort = page.getViewport({scale: 1});
        return {
          transformFunction: (itemTransform) => this.pdfjs.Util.transform(viewPort.transform, itemTransform)
        };
      });
      return new ParseResult(fontMap, pdfjsPages, pageViewports, metadata, this.schema, items);
    });
  }
  extractPagesSequentially(pdfjsDocument, reporter) {
    return [...Array(pdfjsDocument.numPages)].reduce((accumulatorPromise, _, index) => {
      return accumulatorPromise.then((accumulatedResults) => {
        return pdfjsDocument.getPage(index + 1).then((pdfjsPage) => {
          return pdfjsPage.getTextContent({
            normalizeWhitespace: false,
            disableCombineTextItems: true
          }).then((textContent) => {
            const items = textContent.items.map((pdfjsItem) => new Item(index, pdfjsItem));
            reporter.parsedPage(index);
            return [...accumulatedResults, {index, pdfjsPage, items}];
          });
        });
      });
    }, Promise.resolve([]));
  }
  gatherFontObjects(pages) {
    const uniqueFontIds = new Set();
    return pages.reduce((promise, page) => {
      const unknownPageFonts = page.items.reduce((unknowns, item) => {
        const fontId = item.data["fontName"];
        if (!uniqueFontIds.has(fontId) && fontId.startsWith("g_d")) {
          uniqueFontIds.add(fontId);
          unknowns.push(fontId);
        }
        return unknowns;
      }, []);
      if (unknownPageFonts.length > 0) {
        promise = promise.then((fontMap) => {
          return page.pdfjsPage.getOperatorList().then(() => {
            unknownPageFonts.forEach((fontId) => {
              const fontObject = page.pdfjsPage.commonObjs.get(fontId);
              fontMap.set(fontId, fontObject);
            });
            return fontMap;
          });
        });
      }
      return promise;
    }, Promise.resolve(new Map()));
  }
  documentInitParameters(src) {
    if (typeof src === "string") {
      return {url: src};
    }
    if (this.isArrayBuffer(src)) {
      return {data: src};
    }
    if (typeof src === "object") {
      return src;
    }
    throw new Error("Invalid PDFjs parameter for getDocument. Need either Uint8Array, string or a parameter object");
  }
  isArrayBuffer(object) {
    return typeof object === "object" && object !== null && object.byteLength !== void 0;
  }
}
