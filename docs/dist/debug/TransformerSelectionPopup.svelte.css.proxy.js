// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".selected.svelte-1y8lpb1{cursor:default;--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:0.25rem}.selectable.svelte-1y8lpb1{cursor:pointer}.selectable.svelte-1y8lpb1:hover{--tw-bg-opacity:1;background-color:rgba(168, 162, 151, var(--tw-bg-opacity));border-radius:0.25rem}.tooltip.svelte-1y8lpb1:before{content:attr(data-text);position:absolute;-webkit-transform:translateY(-2px);transform:translateY(-2px);left:100%;border:10px solid;--tw-border-opacity:1;border-color:rgba(168, 162, 151, var(--tw-border-opacity));border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;margin-left:0.5rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;width:18rem;--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity));border-radius:0.25rem;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);text-align:center;font-style:italic;display:none}.tooltip.svelte-1y8lpb1:hover:before{display:block}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}