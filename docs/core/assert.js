export function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
export function assertNot(condition, message) {
  if (condition) {
    throw new Error(message || "Assertion failed");
  }
}
export function assertDefined(value, message) {
  if (value === null || typeof value === "undefined") {
    throw new Error(message || "Assertion failed");
  }
  return value;
}
