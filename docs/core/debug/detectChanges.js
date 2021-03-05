import {assertDefined} from "../assert.js";
export function detectChanges(tracker, inputItems, transformedItems) {
  const inputItemsByUuid = inputMap(inputItems);
  transformedItems.forEach((item, idx) => {
    const uuid = _uuid(item);
    const oldItem = inputItemsByUuid.get(uuid);
    if (oldItem) {
      if (idx !== oldItem.position) {
        tracker.trackPositionalChange(item, oldItem.position, idx);
      }
    } else {
      tracker.trackAddition(item);
    }
  });
}
function inputMap(inputItems) {
  return inputItems.reduce((map, item, idx) => {
    map.set(_uuid(item), {item, position: idx});
    return map;
  }, new Map());
}
function _uuid(item) {
  return assertDefined(item.uuid, "UUID is not set");
}
