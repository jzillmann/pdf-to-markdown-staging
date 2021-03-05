// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif;--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity))}.transition-container.svelte-1nmagxi.svelte-1nmagxi{display:-ms-grid;display:grid;-ms-grid-rows:1;grid-template-rows:1;-ms-grid-columns:1;grid-template-columns:1}.transition-container.svelte-1nmagxi>.svelte-1nmagxi{grid-row:1;grid-column:1}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}