export function formatValue(value) {
  if (Number.isInteger(value)) {
    return value;
  }
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  if (typeof value === "object" && typeof Array.isArray(value)) {
    let array = value;
    if (array.length > 0 && typeof array[0] === "number") {
      array = array.map((element) => element.toFixed(2));
    }
    return "[" + array.join(", ") + "]";
  }
  return value;
}
