import ItemTransformer from "./ItemTransformer.js";
import LineItemMerger from "../debug/LineItemMerger.js";
import {transformGroupedByPage} from "../support/groupingUtils.js";
export default class CompactLines extends ItemTransformer {
  constructor() {
    super("Compact Lines", "Combines items on the same y-axis", {
      requireColumns: ["str", "y", "height"],
      debug: {
        itemMerger: new LineItemMerger(true)
      }
    }, (incomingSchema) => {
      return incomingSchema.reduce((schema, column) => {
        if (column === "x") {
          return [...schema, "line", "x"];
        }
        return [...schema, column];
      }, new Array());
    });
  }
  transform(_, inputItems) {
    let lines = 0;
    return {
      items: transformGroupedByPage(inputItems, (page, items) => {
        let lineNumber = -1;
        let lastY;
        return items.map((item) => {
          const y = item.data["y"];
          const height = item.data["height"];
          if (!lastY || Math.abs(Math.round(lastY - y)) > Math.round(height)) {
            lineNumber++;
            lines++;
          }
          lastY = y;
          return item.withDataAddition({line: lineNumber});
        });
      }),
      messages: [`Formed ${lines} lines out of ${inputItems.length} items`]
    };
  }
}
