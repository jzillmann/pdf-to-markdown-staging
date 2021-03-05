import {toDescriptor} from "../TransformDescriptor.js";
export default class ItemTransformer {
  constructor(name, description, descriptorPartial, schemaTransformer = (schema) => schema) {
    this.name = name;
    this.description = description;
    this.descriptor = toDescriptor(descriptorPartial);
    this.schemaTransformer = schemaTransformer;
  }
}
