import {toDescriptor} from "../TransformDescriptor.js";
import {asPages} from "./Page.js";
import ChangeTracker from "./ChangeTracker.js";
import ItemGroup from "./ItemGroup.js";
export default class StageResult {
  constructor(descriptor, schema, pages, changes, messages) {
    this.descriptor = descriptor;
    this.schema = schema;
    this.pages = pages;
    this.changes = changes;
    this.messages = messages;
  }
  itemsUnpacked() {
    return this.pages.reduce((items, page) => {
      page.itemGroups.forEach((itemGroup) => itemGroup.unpacked().forEach((item) => items.push(item)));
      return items;
    }, []);
  }
  selectPages(relevantChangesOnly, groupItems, pinnedPage) {
    let result;
    if (!groupItems && this.descriptor?.debug?.itemMerger) {
      result = this.pagesWithUnpackedItems();
    } else {
      result = this.pages;
    }
    if (Number.isInteger(pinnedPage)) {
      result = result.filter((page) => page.index === pinnedPage);
    }
    if (relevantChangesOnly && !this.descriptor.debug?.showAll === true) {
      result = result.map((page) => ({
        ...page,
        itemGroups: page.itemGroups.filter((itemGroup) => this.changes.hasChanged(itemGroup.top))
      }));
    }
    return result;
  }
  pagesWithUnpackedItems() {
    return this.pages.map((page) => ({
      ...page,
      itemGroups: new Array().concat(...page.itemGroups.map((itemGroup) => itemGroup.unpacked().map((item) => new ItemGroup(item))))
    }));
  }
}
export function initialStage(inputSchema, inputItems) {
  const schema = inputSchema.map((column) => ({name: column}));
  const tracker = new ChangeTracker();
  const pages = asPages(tracker, inputItems);
  const messages = [
    `Parsed ${inputItems.length === 0 ? 0 : inputItems[inputItems.length - 1].page + 1} pages with ${inputItems.length} items`
  ];
  return new StageResult(toDescriptor({debug: {showAll: true}}), schema, pages, tracker, messages);
}
