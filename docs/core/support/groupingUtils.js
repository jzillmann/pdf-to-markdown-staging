function groupBy(items, extractKey) {
  return items.reduce((pageItems, item) => {
    const lastPageItems = pageItems[pageItems.length - 1];
    if (!lastPageItems || extractKey(item) !== extractKey(lastPageItems[0])) {
      pageItems.push([item]);
    } else {
      lastPageItems.push(item);
    }
    return pageItems;
  }, []);
}
export function groupByPage(items) {
  return groupBy(items, (item) => item.page);
}
export function groupByElement(items, elementName) {
  return groupBy(items, (item) => item.data[elementName]);
}
export function transformGroupedByPage(items, groupedTransformer) {
  return new Array().concat(...groupByPage(items).map((pageItems) => groupedTransformer(pageItems[0].page, pageItems)));
}
export function transformGroupedByPageAndLine(items, groupedTransformer) {
  let transformedItems = [];
  groupByPage(items).forEach((pageItems) => {
    groupByElement(pageItems, "line").forEach((lineItems) => {
      transformedItems.push(...groupedTransformer(pageItems[0].page, lineItems[0].data["line"], lineItems));
    });
  });
  return transformedItems;
}
