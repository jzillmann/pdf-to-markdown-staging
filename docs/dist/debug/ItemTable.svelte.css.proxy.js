// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".page.svelte-5yqwk.svelte-5yqwk{font-weight:600;padding-right:1rem;white-space:nowrap;position:-webkit-sticky;position:sticky;top:2.7em;z-index:2}th.svelte-5yqwk.svelte-5yqwk{padding-left:0.25rem;padding-right:0.25rem;position:-webkit-sticky;position:sticky;top:2.6em;z-index:2}td.svelte-5yqwk.svelte-5yqwk:not(#page){padding-left:0.25rem;padding-right:0.25rem;border-bottom-width:1px}tr.svelte-5yqwk:hover td.svelte-5yqwk:not(#page){--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity))}tr.expandable.svelte-5yqwk:hover td.svelte-5yqwk:not(#page){cursor:pointer}tr.expanded.svelte-5yqwk td.svelte-5yqwk:not(#page){--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity))}tr.childs.svelte-5yqwk td.svelte-5yqwk:not(#page){--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity))}tr.changePlus.svelte-5yqwk td.svelte-5yqwk:not(#page){--tw-text-opacity:1;color:rgba(6, 95, 70, var(--tw-text-opacity))}tr.changeMinus.svelte-5yqwk td.svelte-5yqwk:not(#page){--tw-text-opacity:1;color:rgba(153, 27, 27, var(--tw-text-opacity))}tr.changeNeutral.svelte-5yqwk td.svelte-5yqwk:not(#page){--tw-text-opacity:1;color:rgba(146, 64, 14, var(--tw-text-opacity))}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}