import {writable} from "../_snowpack/pkg/svelte/store.js";
export const debugEnabled = storedWritable("debugEnabled", false);
export const debugStage = storedWritable("debugStage", 0);
function storedWritable(key, defaultValue) {
  const store = writable(fromLocalStore(key, defaultValue));
  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return store;
}
function fromLocalStore(key, defaultValue) {
  const storedValue = localStorage.getItem(key);
  if (storedValue === null || storedValue === "null") {
    return defaultValue;
  }
  return JSON.parse(storedValue);
}
