const defaults = {
  requireColumns: [],
  consumesGlobels: [],
  producesGlobels: []
};
export function toDescriptor(partial) {
  return {
    ...defaults,
    ...partial
  };
}
