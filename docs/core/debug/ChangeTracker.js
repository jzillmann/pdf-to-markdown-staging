import {
  ChangeCategory,
  Addition,
  Removal,
  PositionChange,
  ContentChange,
  Direction
} from "./ChangeIndex.js";
import {assertNot, assertDefined} from "../assert.js";
const ADDITION = new Addition();
const REMOVAL = new Removal();
const CONTENT_CHANGE = new ContentChange();
export default class ChangeTracker {
  constructor() {
    this.changes = new Map();
  }
  addChange(item, change) {
    const uuid = _uuid(item);
    assertNot(this.changes.has(uuid), `Change for item ${uuid} already defined`);
    this.changes.set(uuid, change);
  }
  changeCount() {
    return this.changes.size;
  }
  trackAddition(item) {
    this.addChange(item, ADDITION);
  }
  trackRemoval(item) {
    this.addChange(item, REMOVAL);
  }
  trackPositionalChange(item, oldPosition, newPosition) {
    const direction = newPosition > oldPosition ? Direction.DOWN : Direction.UP;
    const amount = Math.abs(newPosition - oldPosition);
    this.addChange(item, new PositionChange(direction, amount));
  }
  trackContentChange(item) {
    this.addChange(item, CONTENT_CHANGE);
  }
  change(item) {
    return this.changes.get(_uuid(item));
  }
  hasChanged(item) {
    return this.changes.has(_uuid(item));
  }
  isPlusChange(item) {
    return this.change(item)?.category === ChangeCategory.PLUS;
  }
  isNeutralChange(item) {
    return this.change(item)?.category === ChangeCategory.NEUTRAL;
  }
  isMinusChange(item) {
    return this.change(item)?.category === ChangeCategory.MINUS;
  }
}
function _uuid(item) {
  return assertDefined(item.uuid, "UUID is not set");
}
