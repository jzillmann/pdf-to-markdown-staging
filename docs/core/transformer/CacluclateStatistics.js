import ItemTransformer from "./ItemTransformer.js";
import FontType from "../FontType.js";
export default class CalculateStatistics extends ItemTransformer {
  constructor() {
    super("Calculate Statistics", "Calculate global statistics that are used in downstream transformers", {
      requireColumns: ["str", "fontName", "y", "height"],
      producesGlobels: [
        "mostUsedHeight",
        "mostUsedFont",
        "mostUsedDistance",
        "maxHeight",
        "maxHeightFont",
        "fontToFormats"
      ],
      debug: {
        showAll: true
      }
    });
  }
  transform(context, items) {
    const heightToOccurrence = {};
    const fontToOccurrence = {};
    let maxHeight = 0;
    let maxHeightFont;
    items.forEach((inputItems) => {
      const itemHeight = inputItems.data["height"];
      const itemFont = inputItems.data["fontName"];
      heightToOccurrence[itemHeight] = heightToOccurrence[itemHeight] ? heightToOccurrence[itemHeight] + 1 : 1;
      fontToOccurrence[itemFont] = fontToOccurrence[itemFont] ? fontToOccurrence[itemFont] + 1 : 1;
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
        maxHeightFont = itemFont;
      }
    });
    const mostUsedHeight = parseInt(getMostUsedKey(heightToOccurrence));
    const mostUsedFont = getMostUsedKey(fontToOccurrence);
    const distanceToOccurrence = {};
    let page = -1;
    let lastItemOfMostUsedHeight;
    items.forEach((item) => {
      if (item.page !== page)
        lastItemOfMostUsedHeight = void 0;
      const itemHeight = item.data["height"];
      const itemText = item.data["str"];
      const itemY = item.data["y"];
      if (itemHeight == mostUsedHeight && itemText.trim().length > 0) {
        if (lastItemOfMostUsedHeight && itemY != lastItemOfMostUsedHeight.data["y"]) {
          const distance = lastItemOfMostUsedHeight.data["y"] - itemY;
          if (distance > 0) {
            distanceToOccurrence[distance] = distanceToOccurrence[distance] ? distanceToOccurrence[distance] + 1 : 1;
          }
        }
        lastItemOfMostUsedHeight = item;
      } else {
        lastItemOfMostUsedHeight = void 0;
      }
      page = item.page;
    });
    const mostUsedDistance = parseInt(getMostUsedKey(distanceToOccurrence));
    const fontIdToName = [];
    const fontToType = new Map();
    context.fontMap.forEach(function(value, key) {
      const fontName = value["name"];
      fontIdToName.push(`${key}  = ${fontName}`);
      const formatType = getFormatType(key, fontName, mostUsedFont, maxHeightFont);
      if (formatType) {
        fontToType.set(key, formatType);
      }
    });
    fontIdToName.sort();
    return {
      items,
      globals: {
        mostUsedHeight,
        mostUsedFont,
        mostUsedDistance,
        maxHeight,
        maxHeightFont,
        fontToFormats: fontToType
      },
      messages: [
        "Items per height: " + JSON.stringify(heightToOccurrence),
        "Items per font: " + JSON.stringify(fontToOccurrence),
        "Items per distance: " + JSON.stringify(distanceToOccurrence),
        "Fonts:" + JSON.stringify(fontIdToName)
      ]
    };
  }
}
function getMostUsedKey(keyToOccurrence) {
  var maxOccurence = 0;
  var maxKey;
  Object.keys(keyToOccurrence).map((element) => {
    if (!maxKey || keyToOccurrence[element] > maxOccurence) {
      maxOccurence = keyToOccurrence[element];
      maxKey = element;
    }
  });
  return maxKey;
}
function getFormatType(fontId, fontName, mostUsedFont, maxHeightFont) {
  const fontNameLowerCase = fontName.toLowerCase();
  if (fontId == mostUsedFont) {
    return void 0;
  } else if (fontNameLowerCase.includes("bold") && (fontNameLowerCase.includes("oblique") || fontNameLowerCase.includes("italic"))) {
    return FontType.BOLD_OBLIQUE;
  } else if (fontNameLowerCase.includes("bold")) {
    return FontType.BOLD;
  } else if (fontNameLowerCase.includes("oblique") || fontNameLowerCase.includes("italic")) {
    return FontType.OBLIQUE;
  } else if (fontId === maxHeightFont) {
    return FontType.BOLD;
  }
}
