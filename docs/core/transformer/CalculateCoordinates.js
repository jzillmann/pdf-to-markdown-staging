import ItemTransformer from "./ItemTransformer.js";
export default class CalculateCoordinates extends ItemTransformer {
  constructor() {
    super("Calculate Coordinates", "Extracts X and Y out of the Transform array", {
      requireColumns: ["transform"],
      debug: {
        showAll: true
      }
    }, (incomingSchema) => {
      return incomingSchema.reduce((schema, column) => {
        if (column === "transform") {
          return [...schema, "x", "y"];
        }
        return [...schema, column];
      }, new Array());
    });
  }
  transform(_, inputItems) {
    return {
      items: inputItems.map((item) => {
        const transform = item.data["transform"];
        const x = transform[4];
        const y = transform[5];
        return item.withDataAddition({x, y});
      }),
      messages: []
    };
  }
}
