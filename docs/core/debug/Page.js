import {groupByElement, groupByPage} from "../support/groupingUtils.js";
import ItemGroup from "./ItemGroup.js";
export function asPages(tracker, items, itemMerger) {
  return groupByPage(items).map((pageItems) => {
    let itemGroups;
    if (itemMerger) {
      itemGroups = groupByElement(pageItems, itemMerger.groupKey).map((groupItems) => {
        if (groupItems.length > 1) {
          const top = itemMerger.merge(tracker, groupItems);
          return new ItemGroup(top, groupItems);
        } else {
          return new ItemGroup(groupItems[0]);
        }
      });
    } else {
      itemGroups = pageItems.map((item) => new ItemGroup(item));
    }
    return {index: pageItems[0].page, itemGroups};
  });
}
