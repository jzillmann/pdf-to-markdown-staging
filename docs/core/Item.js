import {v4 as uuidv4} from "../_snowpack/pkg/uuid.js";
export default class Item {
  constructor(page, data, uuid = uuidv4()) {
    this.page = page;
    this.data = data;
    this.uuid = uuid;
  }
  value(column) {
    return this.data[column];
  }
  withDataAddition(data) {
    return this.withData({...this.data, ...data});
  }
  withData(data) {
    return new Item(this.page, data, this.uuid);
  }
  withoutUuid() {
    return new Item(this.page, this.data, "");
  }
}
