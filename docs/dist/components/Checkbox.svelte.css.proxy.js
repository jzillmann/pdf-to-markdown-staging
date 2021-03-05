// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "input.svelte-19cssp8:not(:checked)+label.svelte-19cssp8:hover{-webkit-transform:scale(1.1);transform:scale(1.1);--tw-text-opacity:1;color:rgba(168, 162, 151, var(--tw-text-opacity))}input.svelte-19cssp8:checked+label.svelte-19cssp8:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}input.svelte-19cssp8:checked+label.svelte-19cssp8{--tw-border-opacity:1;border-color:rgba(168, 162, 151, var(--tw-border-opacity))}input.svelte-19cssp8+label.svelte-19cssp8:hover:not(:active){border-style:dotted}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}