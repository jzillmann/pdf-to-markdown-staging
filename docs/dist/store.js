import {createPipeline} from "../core/index.js";
import * as pdfjs from "../_snowpack/pkg/pdfjs-dist/es5/build/pdf.js";
import {writable} from "../_snowpack/pkg/svelte/store.js";
export let debug = writable(void 0);
export let parseResult = writable(void 0);
pdfjs.GlobalWorkerOptions.workerSrc = "worker/pdf.worker.min.js";
const pdfPipeline = createPipeline(pdfjs, {});
export async function loadExample(progressListener) {
  return parsePdf("/ExamplePdf.pdf", progressListener);
}
export async function processUpload(file, progressListener) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsArrayBuffer(file);
  }).then((buffer) => {
    const data = new Uint8Array(buffer);
    return parsePdf(data, progressListener);
  });
}
async function parsePdf(src, progressListener) {
  pdfPipeline.debug(src, progressListener).then((debugInstance) => {
    debug.set(debugInstance);
    return debug;
  });
}
