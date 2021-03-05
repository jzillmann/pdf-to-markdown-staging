import ParseProgressReporter from "./ParseProgressReporter.js";
import Debugger from "./Debugger.js";
import {assert} from "./assert.js";
export default class PdfPipeline {
  constructor(parser, transformers) {
    this.parser = parser;
    this.transformers = transformers;
  }
  async parse(src, progressListener) {
    const parseResult = await this.parser.parse(src, new ParseProgressReporter(progressListener));
    this.verifyRequiredColumns(parseResult.schema, this.transformers);
    return parseResult;
  }
  async execute(src, progressListener) {
    const parseResult = await this.parse(src, progressListener);
    this.verifyRequiredColumns(parseResult.schema, this.transformers);
    const context = {fontMap: parseResult.fontMap, pageViewports: parseResult.pageViewports};
    let items = parseResult.items;
    this.transformers.forEach((transformer) => {
      items = transformer.transform(context, items).items;
    });
    parseResult.items = items;
    return parseResult;
  }
  async debug(src, progressListener) {
    const parseResult = await this.parse(src, progressListener);
    const context = {fontMap: parseResult.fontMap, pageViewports: parseResult.pageViewports};
    return new Debugger(parseResult.schema, parseResult.items, context, this.transformers);
  }
  verifyRequiredColumns(inputSchema, transformers) {
    const schemas = [inputSchema];
    for (let idx = 0; idx < transformers.length; idx++) {
      const transformer = transformers[idx];
      const predecessorSchema = schemas[idx];
      transformer.descriptor.requireColumns?.forEach((column) => {
        assert(predecessorSchema.includes(column), `Input schema [${predecessorSchema.join(", ")}] for transformer '${transformer.name}' does not contain the required column '${column}'`);
      });
      const outputSchema = transformer.schemaTransformer(predecessorSchema);
      schemas.push(outputSchema);
    }
  }
}
