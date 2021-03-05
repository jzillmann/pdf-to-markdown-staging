import ItemTransformer from "./ItemTransformer.js";
import {transformGroupedByPage} from "../support/groupingUtils.js";
export default class AdjustHeight extends ItemTransformer {
  constructor() {
    super("Adjust Heights", "Corrects height with help of the page viewport", {
      requireColumns: ["transform", "height"]
    });
  }
  transform(context, inputItems) {
    let correctedHeights = 0;
    return {
      items: transformGroupedByPage(inputItems, (page, items) => {
        const pageViewport = context.pageViewports[page];
        return items.map((item) => {
          const itemTransform = item.data["transform"];
          const itemHeight = item.data["height"];
          const tx = pageViewport.transformFunction(itemTransform);
          const fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
          const dividedHeight = itemHeight / fontHeight;
          const newHeight = Number.isNaN(dividedHeight) || dividedHeight <= 1 ? itemHeight : dividedHeight;
          if (newHeight === itemHeight) {
            return item;
          } else {
            correctedHeights++;
            return item.withDataAddition({height: newHeight});
          }
        });
      }),
      messages: [`${correctedHeights} corrected heights`]
    };
  }
}
