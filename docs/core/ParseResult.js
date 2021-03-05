export default class ParseResult {
  constructor(fontMap, pdfjsPages, pageViewports, metadata, schema, items) {
    this.fontMap = fontMap;
    this.pdfjsPages = pdfjsPages;
    this.pageViewports = pageViewports;
    this.metadata = metadata;
    this.schema = schema;
    this.items = items;
  }
  pageCount() {
    return this.pdfjsPages.length;
  }
}
