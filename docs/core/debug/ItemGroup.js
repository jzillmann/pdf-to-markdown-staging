export default class ItemGroup {
  constructor(top, items = []) {
    this.top = top;
    this.elements = items;
  }
  hasMany() {
    return this.elements.length > 0;
  }
  unpacked() {
    if (this.elements.length > 0) {
      return this.elements;
    }
    return [this.top];
  }
}
