import { S as SvelteComponent, i as init, s as safe_not_equal, o as globals, e as element, a as append, p as create_slot, q as space, c as attr, r as set_style, d as insert, t as listen, u as update_slot, v as transition_in, w as transition_out, g as detach, x as run_all, m as createEventDispatcher, y as onMount, z as onDestroy, A as binding_callbacks } from './common/index-c9bd85d7.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}

var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return toFileWithPath(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}

/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string}
 * @returns {boolean}
 */

function accepts(file, acceptedFiles) {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(",");
    const fileName = file.name || "";
    const mimeType = (file.type || "").toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, "");

    return acceptedFilesArray.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith("/*")) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
}

// Error codes
const FILE_INVALID_TYPE = "file-invalid-type";
const FILE_TOO_LARGE = "file-too-large";
const FILE_TOO_SMALL = "file-too-small";
const TOO_MANY_FILES = "too-many-files";

// File Errors
const getInvalidTypeRejectionErr = (accept) => {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  const messageSuffix = Array.isArray(accept)
    ? `one of ${accept.join(", ")}`
    : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: `File type must be ${messageSuffix}`,
  };
};

const getTooLargeRejectionErr = (maxSize) => {
  return {
    code: FILE_TOO_LARGE,
    message: `File is larger than ${maxSize} bytes`,
  };
};

const getTooSmallRejectionErr = (minSize) => {
  return {
    code: FILE_TOO_SMALL,
    message: `File is smaller than ${minSize} bytes`,
  };
};

const TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files",
};

// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
function fileAccepted(file, accept) {
  const isAcceptable =
    file.type === "application/x-moz-file" || accepts(file, accept);
  return [
    isAcceptable,
    isAcceptable ? null : getInvalidTypeRejectionErr(accept),
  ];
}

function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

// React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}

function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
  return Array.prototype.some.call(
    event.dataTransfer.types,
    (type) => type === "Files" || type === "application/x-moz-file"
  );
}

// allow the entire document to be a drag target
function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return (
    userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1
  );
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge(userAgent = window.navigator.userAgent) {
  return isIe(userAgent) || isEdge(userAgent);
}

/* node_modules/svelte-file-dropzone/src/components/Dropzone.svelte generated by Svelte v3.34.0 */

const { document: document_1 } = globals;

function add_css() {
	var style = element("style");
	style.id = "svelte-817dg2-style";
	style.textContent = ".dropzone.svelte-817dg2{flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;border-width:2px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;transition:border 0.24s ease-in-out}.dropzone.svelte-817dg2:focus{border-color:#2196f3}";
	append(document_1.head, style);
}

// (350:8)       
function fallback_block(ctx) {
	let p;

	return {
		c() {
			p = element("p");
			p.textContent = "Drag 'n' drop some files here, or click to select files";
		},
		m(target, anchor) {
			insert(target, p, anchor);
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let input;
	let t;
	let div_class_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[28].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[27], null);
	const default_slot_or_fallback = default_slot || fallback_block();

	return {
		c() {
			div = element("div");
			input = element("input");
			t = space();
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			attr(input, "accept", /*accept*/ ctx[0]);
			input.multiple = /*multiple*/ ctx[1];
			attr(input, "type", "file");
			attr(input, "autocomplete", "off");
			attr(input, "tabindex", "-1");
			set_style(input, "display", "none");
			attr(div, "tabindex", "0");
			attr(div, "class", div_class_value = "" + ((/*disableDefaultStyles*/ ctx[4] ? "" : "dropzone") + "\r\n  " + /*containerClasses*/ ctx[2] + " svelte-817dg2"));
			attr(div, "style", /*containerStyles*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, input);
			/*input_binding*/ ctx[29](input);
			append(div, t);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(div, null);
			}

			/*div_binding*/ ctx[30](div);
			current = true;

			if (!mounted) {
				dispose = [
					listen(input, "change", /*onDropCb*/ ctx[14]),
					listen(input, "click", onInputElementClick),
					listen(div, "keydown", /*composeKeyboardHandler*/ ctx[16](/*onKeyDownCb*/ ctx[7])),
					listen(div, "focus", /*composeKeyboardHandler*/ ctx[16](/*onFocusCb*/ ctx[8])),
					listen(div, "blur", /*composeKeyboardHandler*/ ctx[16](/*onBlurCb*/ ctx[9])),
					listen(div, "click", /*composeHandler*/ ctx[15](/*onClickCb*/ ctx[10])),
					listen(div, "dragenter", /*composeDragHandler*/ ctx[17](/*onDragEnterCb*/ ctx[11])),
					listen(div, "dragover", /*composeDragHandler*/ ctx[17](/*onDragOverCb*/ ctx[12])),
					listen(div, "dragleave", /*composeDragHandler*/ ctx[17](/*onDragLeaveCb*/ ctx[13])),
					listen(div, "drop", /*composeDragHandler*/ ctx[17](/*onDropCb*/ ctx[14]))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*accept*/ 1) {
				attr(input, "accept", /*accept*/ ctx[0]);
			}

			if (!current || dirty[0] & /*multiple*/ 2) {
				input.multiple = /*multiple*/ ctx[1];
			}

			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$$scope*/ 134217728) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[27], dirty, null, null);
				}
			}

			if (!current || dirty[0] & /*disableDefaultStyles, containerClasses*/ 20 && div_class_value !== (div_class_value = "" + ((/*disableDefaultStyles*/ ctx[4] ? "" : "dropzone") + "\r\n  " + /*containerClasses*/ ctx[2] + " svelte-817dg2"))) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty[0] & /*containerStyles*/ 8) {
				attr(div, "style", /*containerStyles*/ ctx[3]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			/*input_binding*/ ctx[29](null);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
			/*div_binding*/ ctx[30](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function onInputElementClick(event) {
	event.stopPropagation();
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { accept } = $$props; // string or string[]
	let { disabled = false } = $$props;
	let { getFilesFromEvent = fromEvent } = $$props;
	let { maxSize = Infinity } = $$props;
	let { minSize = 0 } = $$props;
	let { multiple = true } = $$props;
	let { preventDropOnDocument = true } = $$props;
	let { noClick = false } = $$props;
	let { noKeyboard = false } = $$props;
	let { noDrag = false } = $$props;
	let { noDragEventsBubbling = false } = $$props;
	let { containerClasses = "" } = $$props;
	let { containerStyles = "" } = $$props;
	let { disableDefaultStyles = false } = $$props;
	const dispatch = createEventDispatcher();

	//state
	let state = {
		isFocused: false,
		isFileDialogActive: false,
		isDragActive: false,
		isDragAccept: false,
		isDragReject: false,
		draggedFiles: [],
		acceptedFiles: [],
		fileRejections: []
	};

	let rootRef;
	let inputRef;

	function resetState() {
		state.isFileDialogActive = false;
		state.isDragActive = false;
		state.draggedFiles = [];
		state.acceptedFiles = [];
		state.fileRejections = [];
	}

	// Fn for opening the file dialog programmatically
	function openFileDialog() {
		if (inputRef) {
			$$invalidate(6, inputRef.value = null, inputRef); // TODO check if null needs to be set
			state.isFileDialogActive = true;
			inputRef.click();
		}
	}

	// Cb to open the file dialog when SPACE/ENTER occurs on the dropzone
	function onKeyDownCb(event) {
		// Ignore keyboard events bubbling up the DOM tree
		if (!rootRef || !rootRef.isEqualNode(event.target)) {
			return;
		}

		if (event.keyCode === 32 || event.keyCode === 13) {
			event.preventDefault();
			openFileDialog();
		}
	}

	// Update focus state for the dropzone
	function onFocusCb() {
		state.isFocused = true;
	}

	function onBlurCb() {
		state.isFocused = false;
	}

	// Cb to open the file dialog when click occurs on the dropzone
	function onClickCb() {
		if (noClick) {
			return;
		}

		// In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
		// to ensure React can handle state changes
		// See: https://github.com/react-dropzone/react-dropzone/issues/450
		if (isIeOrEdge()) {
			setTimeout(openFileDialog, 0);
		} else {
			openFileDialog();
		}
	}

	function onDragEnterCb(event) {
		event.preventDefault();
		stopPropagation(event);
		dragTargetsRef = [...dragTargetsRef, event.target];

		if (isEvtWithFiles(event)) {
			Promise.resolve(getFilesFromEvent(event)).then(draggedFiles => {
				if (isPropagationStopped(event) && !noDragEventsBubbling) {
					return;
				}

				state.draggedFiles = draggedFiles;
				state.isDragActive = true;
				dispatch("dragenter", { dragEvent: event });
			});
		}
	}

	function onDragOverCb(event) {
		event.preventDefault();
		stopPropagation(event);

		if (event.dataTransfer) {
			try {
				event.dataTransfer.dropEffect = "copy";
			} catch {
				
			} /* eslint-disable-line no-empty */
		}

		if (isEvtWithFiles(event)) {
			dispatch("dragover", { dragEvent: event });
		}

		return false;
	}

	function onDragLeaveCb(event) {
		event.preventDefault();
		stopPropagation(event);

		// Only deactivate once the dropzone and all children have been left
		const targets = dragTargetsRef.filter(target => rootRef && rootRef.contains(target));

		// Make sure to remove a target present multiple times only once
		// (Firefox may fire dragenter/dragleave multiple times on the same element)
		const targetIdx = targets.indexOf(event.target);

		if (targetIdx !== -1) {
			targets.splice(targetIdx, 1);
		}

		dragTargetsRef = targets;

		if (targets.length > 0) {
			return;
		}

		state.isDragActive = false;
		state.draggedFiles = [];

		if (isEvtWithFiles(event)) {
			dispatch("dragleave", { dragEvent: event });
		}
	}

	function onDropCb(event) {
		event.preventDefault();
		stopPropagation(event);
		dragTargetsRef = [];

		if (isEvtWithFiles(event)) {
			Promise.resolve(getFilesFromEvent(event)).then(files => {
				if (isPropagationStopped(event) && !noDragEventsBubbling) {
					return;
				}

				const acceptedFiles = [];
				const fileRejections = [];

				files.forEach(file => {
					const [accepted, acceptError] = fileAccepted(file, accept);
					const [sizeMatch, sizeError] = fileMatchSize(file, minSize, maxSize);

					if (accepted && sizeMatch) {
						acceptedFiles.push(file);
					} else {
						const errors = [acceptError, sizeError].filter(e => e);
						fileRejections.push({ file, errors });
					}
				});

				if (!multiple && acceptedFiles.length > 1) {
					// Reject everything and empty accepted files
					acceptedFiles.forEach(file => {
						fileRejections.push({ file, errors: [TOO_MANY_FILES_REJECTION] });
					});

					acceptedFiles.splice(0);
				}

				state.acceptedFiles = acceptedFiles;
				state.fileRejections = fileRejections;
				dispatch("drop", { acceptedFiles, fileRejections, event });

				if (fileRejections.length > 0) {
					dispatch("droprejected", { fileRejections, event });
				}

				if (acceptedFiles.length > 0) {
					dispatch("dropaccepted", { acceptedFiles, event });
				}
			});
		}

		resetState();
	}

	function composeHandler(fn) {
		return disabled ? null : fn;
	}

	function composeKeyboardHandler(fn) {
		return noKeyboard ? null : composeHandler(fn);
	}

	function composeDragHandler(fn) {
		return noDrag ? null : composeHandler(fn);
	}

	function stopPropagation(event) {
		if (noDragEventsBubbling) {
			event.stopPropagation();
		}
	}

	let dragTargetsRef = [];

	function onDocumentDrop(event) {
		if (rootRef && rootRef.contains(event.target)) {
			// If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
			return;
		}

		event.preventDefault();
		dragTargetsRef = [];
	}

	// Update file dialog active state when the window is focused on
	function onWindowFocus() {
		// Execute the timeout only if the file dialog is opened in the browser
		if (state.isFileDialogActive) {
			setTimeout(
				() => {
					if (inputRef) {
						const { files } = inputRef;

						if (!files.length) {
							state.isFileDialogActive = false;
							dispatch("filedialogcancel");
						}
					}
				},
				300
			);
		}
	}

	onMount(() => {
		window.addEventListener("focus", onWindowFocus, false);

		if (preventDropOnDocument) {
			document.addEventListener("dragover", onDocumentDragOver, false);
			document.addEventListener("drop", onDocumentDrop, false);
		}
	});

	onDestroy(() => {
		window.removeEventListener("focus", onWindowFocus, false);

		if (preventDropOnDocument) {
			document.removeEventListener("dragover", onDocumentDragOver);
			document.removeEventListener("drop", onDocumentDrop);
		}
	});

	function input_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			inputRef = $$value;
			$$invalidate(6, inputRef);
		});
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			rootRef = $$value;
			$$invalidate(5, rootRef);
		});
	}

	$$self.$$set = $$props => {
		if ("accept" in $$props) $$invalidate(0, accept = $$props.accept);
		if ("disabled" in $$props) $$invalidate(18, disabled = $$props.disabled);
		if ("getFilesFromEvent" in $$props) $$invalidate(19, getFilesFromEvent = $$props.getFilesFromEvent);
		if ("maxSize" in $$props) $$invalidate(20, maxSize = $$props.maxSize);
		if ("minSize" in $$props) $$invalidate(21, minSize = $$props.minSize);
		if ("multiple" in $$props) $$invalidate(1, multiple = $$props.multiple);
		if ("preventDropOnDocument" in $$props) $$invalidate(22, preventDropOnDocument = $$props.preventDropOnDocument);
		if ("noClick" in $$props) $$invalidate(23, noClick = $$props.noClick);
		if ("noKeyboard" in $$props) $$invalidate(24, noKeyboard = $$props.noKeyboard);
		if ("noDrag" in $$props) $$invalidate(25, noDrag = $$props.noDrag);
		if ("noDragEventsBubbling" in $$props) $$invalidate(26, noDragEventsBubbling = $$props.noDragEventsBubbling);
		if ("containerClasses" in $$props) $$invalidate(2, containerClasses = $$props.containerClasses);
		if ("containerStyles" in $$props) $$invalidate(3, containerStyles = $$props.containerStyles);
		if ("disableDefaultStyles" in $$props) $$invalidate(4, disableDefaultStyles = $$props.disableDefaultStyles);
		if ("$$scope" in $$props) $$invalidate(27, $$scope = $$props.$$scope);
	};

	return [
		accept,
		multiple,
		containerClasses,
		containerStyles,
		disableDefaultStyles,
		rootRef,
		inputRef,
		onKeyDownCb,
		onFocusCb,
		onBlurCb,
		onClickCb,
		onDragEnterCb,
		onDragOverCb,
		onDragLeaveCb,
		onDropCb,
		composeHandler,
		composeKeyboardHandler,
		composeDragHandler,
		disabled,
		getFilesFromEvent,
		maxSize,
		minSize,
		preventDropOnDocument,
		noClick,
		noKeyboard,
		noDrag,
		noDragEventsBubbling,
		$$scope,
		slots,
		input_binding,
		div_binding
	];
}

class Dropzone extends SvelteComponent {
	constructor(options) {
		super();
		if (!document_1.getElementById("svelte-817dg2-style")) add_css();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				accept: 0,
				disabled: 18,
				getFilesFromEvent: 19,
				maxSize: 20,
				minSize: 21,
				multiple: 1,
				preventDropOnDocument: 22,
				noClick: 23,
				noKeyboard: 24,
				noDrag: 25,
				noDragEventsBubbling: 26,
				containerClasses: 2,
				containerStyles: 3,
				disableDefaultStyles: 4
			},
			[-1, -1]
		);
	}
}

export default Dropzone;
