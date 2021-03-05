import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import App from "./App.svelte.js";
import "./Tailwind.css.proxy.js";
var app = new App({
  target: document.body,
  intro: true
});
export default app;
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
  undefined /* [snowpack] import.meta.hot */ .dispose(() => {
    app.$destroy();
  });
}
