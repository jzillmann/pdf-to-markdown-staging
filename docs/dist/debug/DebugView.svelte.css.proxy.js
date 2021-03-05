// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".controls.svelte-1apljh0{--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity));position:-webkit-sticky;position:sticky;top:0;z-index:3}.messages.svelte-1apljh0{-webkit-transition:max-height 0.15s ease-in-out;transition:max-height 0.15s ease-in-out}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}