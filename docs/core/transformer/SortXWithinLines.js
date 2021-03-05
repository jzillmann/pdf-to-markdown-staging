import ItemTransformer from "./ItemTransformer.js";
import LineItemMerger from "../debug/LineItemMerger.js";
import {transformGroupedByPageAndLine} from "../support/groupingUtils.js";
export default class SortXWithinLines extends ItemTransformer {
  constructor() {
    super("Sort by X", "Sorts the items of a line by the x coordinate", {
      requireColumns: ["line", "x"],
      debug: {
        itemMerger: new LineItemMerger()
      }
    });
  }
  transform(_, inputItems) {
    return {
      items: transformGroupedByPageAndLine(inputItems, (_2, __, items) => {
        return items.sort((a, b) => a.data["x"] - b.data["x"]);
      }),
      messages: []
    };
  }
}
