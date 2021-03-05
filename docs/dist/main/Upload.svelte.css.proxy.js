// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".dragover.svelte-bajlah{--tw-border-opacity:1;border-color:rgba(168, 162, 151, var(--tw-border-opacity))}.dragoverItem.svelte-bajlah{--tw-text-opacity:1;color:rgba(168, 162, 151, var(--tw-text-opacity))}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}