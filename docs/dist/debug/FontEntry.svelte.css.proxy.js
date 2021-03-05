// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".twoColumned.svelte-1gv679s{display:-ms-grid;display:grid;-webkit-column-gap:0.5rem;-moz-column-gap:0.5rem;column-gap:0.5rem;-ms-grid-columns:1fr 2.5fr;grid-template-columns:1fr 2.5fr}.header.svelte-1gv679s:hover{--tw-bg-opacity:1;background-color:rgba(168, 162, 151, var(--tw-bg-opacity));-webkit-transform:scale(1.02);transform:scale(1.02)}.opened.svelte-1gv679s{--tw-bg-opacity:1;background-color:rgba(168, 162, 151, var(--tw-bg-opacity))}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}