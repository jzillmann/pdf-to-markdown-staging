import StageResult, {initialStage} from "./debug/StageResult.js";
import ColumnAnnotation from "./debug/ColumnAnnotation.js";
import {detectChanges} from "./debug/detectChanges.js";
import {asPages} from "./debug/Page.js";
import ChangeTracker from "./debug/ChangeTracker.js";
export default class Debugger {
  constructor(inputSchema, inputItems, context, transformers) {
    this.transformers = transformers;
    this.context = context;
    this.fontMap = context.fontMap;
    this.stageNames = ["Parse Result", ...transformers.map((t) => t.name)];
    this.stageDescriptions = ["Initial items as parsed by PDFjs", ...transformers.map((t) => t.description)];
    this.stageResultCache = [initialStage(inputSchema, inputItems)];
  }
  stageResults(stageIndex) {
    for (let idx = 0; idx < stageIndex + 1; idx++) {
      if (!this.stageResultCache[idx]) {
        const transformer = this.transformers[idx - 1];
        const previousStageResult = this.stageResultCache[idx - 1];
        const previousItems = previousStageResult.itemsUnpacked();
        const inputSchema = toSimpleSchema(previousStageResult);
        const outputSchema = transformer.schemaTransformer(inputSchema);
        const itemResult = transformer.transform(this.context, [...previousItems]);
        const changeTracker = new ChangeTracker();
        detectChanges(changeTracker, previousItems, itemResult.items);
        const pages = asPages(changeTracker, itemResult.items, transformer.descriptor.debug?.itemMerger);
        const messages = itemResult.messages;
        if (changeTracker.changeCount() > 0) {
          messages.unshift(`Detected ${changeTracker.changeCount()} changes`);
        }
        this.stageResultCache.push(new StageResult(transformer.descriptor, toAnnotatedSchema(inputSchema, outputSchema), pages, changeTracker, messages));
      }
    }
    return this.stageResultCache[stageIndex];
  }
}
function toSimpleSchema(stageResult) {
  return stageResult.schema.filter((column) => !column.annotation || column.annotation !== ColumnAnnotation.REMOVED).map((column) => column.name);
}
function toAnnotatedSchema(inputSchema, outputSchema) {
  const annotatedSchema = [];
  let out_idx = 0;
  for (let in_idx = 0; in_idx < inputSchema.length; in_idx++) {
    const nextInputColumn = inputSchema[in_idx];
    const indexInOut = outputSchema.indexOf(nextInputColumn);
    if (indexInOut === -1) {
      annotatedSchema.push({name: nextInputColumn, annotation: ColumnAnnotation.REMOVED});
    } else if (indexInOut > out_idx) {
      while (out_idx < indexInOut) {
        annotatedSchema.push({name: outputSchema[out_idx], annotation: ColumnAnnotation.ADDED});
        out_idx++;
      }
      annotatedSchema.push({name: nextInputColumn});
      out_idx++;
    } else {
      annotatedSchema.push({name: nextInputColumn});
      out_idx++;
    }
  }
  for (let index = out_idx; index < outputSchema.length; index++) {
    annotatedSchema.push({name: outputSchema[index], annotation: ColumnAnnotation.ADDED});
  }
  return annotatedSchema;
}
