import ParseProgressReporter from "./ParseProgressReporter.js";
import PdfParser from "./PdfParser.js";
import PdfPipeline from "./PdfPipeline.js";
import AdjustHeight from "./transformer/AdjustHeight.js";
import CalculateCoordinates from "./transformer/CalculateCoordinates.js";
import CalculateStatistics from "./transformer/CacluclateStatistics.js";
import CompactLines from "./transformer/CompactLines.js";
import SortXWithinLines from "./transformer/SortXWithinLines.js";
const transformers = [
  new AdjustHeight(),
  new CalculateCoordinates(),
  new CalculateStatistics(),
  new CompactLines(),
  new SortXWithinLines()
];
const defaultConfig = {
  pdfjsParams: {
    cMapUrl: "cmaps/",
    cMapPacked: true
  },
  transformers
};
export function pdfParser(pdfJs) {
  return new PdfParser(pdfJs, defaultConfig.pdfjsParams);
}
export function parseReporter(progressListener) {
  return new ParseProgressReporter(progressListener);
}
export function createPipeline(pdfJs, config = defaultConfig) {
  const parser = new PdfParser(pdfJs, config.pdfjsParams);
  return new PdfPipeline(parser, config.transformers || transformers);
}
