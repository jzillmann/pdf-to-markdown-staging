import './DebugView.svelte.css.proxy.js';
/* src/debug/DebugView.svelte generated by Svelte v3.34.0 */
import {
	SvelteComponent,
	add_flush_callback,
	add_render_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_bidirectional_transition,
	create_component,
	create_in_transition,
	create_out_transition,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import { slide } from "../../_snowpack/pkg/svelte/transition.js";
import { linear } from "../../_snowpack/pkg/svelte/easing.js";
import Icon from "../../_snowpack/pkg/fa-svelte.js";
import { faMapPin as pin } from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons/faMapPin.js";
import { BookOpen, ArrowLeft, ArrowRight } from "../../_snowpack/pkg/svelte-hero-icons.js";
import slideH from "../svelte/slideH.js";
import FontIndex from "./FontIndex.svelte.js";
import Popup from "../components/Popup.svelte.js";
import PageSelectionPopup from "./PageSelectionPopup.svelte.js";
import Checkbox from "../components/Checkbox.svelte.js";
import ItemTable from "./ItemTable.svelte.js";
import TransformerSelectionPopup from "./TransformerSelectionPopup.svelte.js";
import { debugStage } from "../config.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[27] = list[i];
	return child_ctx;
}

// (40:12) {#if pageIsPinned}
function create_if_block_5(ctx) {
	let span;
	let icon;
	let span_transition;
	let current;
	let mounted;
	let dispose;

	icon = new Icon({
			props: {
				class: "text-xs hover:text-select hover:opacity-25 cursor-pointer opacity-75",
				icon: pin
			}
		});

	return {
		c() {
			span = element("span");
			create_component(icon.$$.fragment);
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(icon, span, null);
			current = true;

			if (!mounted) {
				dispose = listen(span, "click", /*click_handler*/ ctx[16]);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);

			add_render_callback(() => {
				if (!span_transition) span_transition = create_bidirectional_transition(span, slideH, { duration: 180, easing: linear }, true);
				span_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			if (!span_transition) span_transition = create_bidirectional_transition(span, slideH, { duration: 180, easing: linear }, false);
			span_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(icon);
			if (detaching && span_transition) span_transition.end();
			mounted = false;
			dispose();
		}
	};
}

// (47:20) <span slot="trigger">
function create_trigger_slot_1(ctx) {
	let span;
	let bookopen;
	let current;

	bookopen = new BookOpen({
			props: {
				size: "1x",
				class: "hover:text-select cursor-pointer"
			}
		});

	return {
		c() {
			span = element("span");
			create_component(bookopen.$$.fragment);
			attr(span, "slot", "trigger");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(bookopen, span, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(bookopen.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(bookopen.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(bookopen);
		}
	};
}

// (50:20) <span slot="content">
function create_content_slot_1(ctx) {
	let span;
	let pageselectionpopup;
	let current;

	pageselectionpopup = new PageSelectionPopup({
			props: {
				pagesNumbers: /*pagesNumbers*/ ctx[6],
				maxPage: /*maxPage*/ ctx[13],
				pinnedPage: /*pinnedPage*/ ctx[1]
			}
		});

	pageselectionpopup.$on("pinPage", /*pinPage_handler*/ ctx[17]);
	pageselectionpopup.$on("unpinPage", /*unpinPage_handler*/ ctx[18]);

	return {
		c() {
			span = element("span");
			create_component(pageselectionpopup.$$.fragment);
			attr(span, "slot", "content");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(pageselectionpopup, span, null);
			current = true;
		},
		p(ctx, dirty) {
			const pageselectionpopup_changes = {};
			if (dirty & /*pagesNumbers*/ 64) pageselectionpopup_changes.pagesNumbers = /*pagesNumbers*/ ctx[6];
			if (dirty & /*maxPage*/ 8192) pageselectionpopup_changes.maxPage = /*maxPage*/ ctx[13];
			if (dirty & /*pinnedPage*/ 2) pageselectionpopup_changes.pinnedPage = /*pinnedPage*/ ctx[1];
			pageselectionpopup.$set(pageselectionpopup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(pageselectionpopup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(pageselectionpopup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(pageselectionpopup);
		}
	};
}

// (46:16) <Popup>
function create_default_slot_1(ctx) {
	let t;
	let current;

	return {
		c() {
			t = space();
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (71:20) <span slot="trigger">
function create_trigger_slot(ctx) {
	let span;
	let div;
	let t_value = /*stageNames*/ ctx[15][/*$debugStage*/ ctx[4]] + "";
	let t;

	return {
		c() {
			span = element("span");
			div = element("div");
			t = text(t_value);
			attr(div, "class", "w-52 cursor-pointer hover:underline whitespace-nowrap");
			attr(span, "slot", "trigger");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, div);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*$debugStage*/ 16 && t_value !== (t_value = /*stageNames*/ ctx[15][/*$debugStage*/ ctx[4]] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (76:20) <span slot="content">
function create_content_slot(ctx) {
	let span;
	let transformerselectionpopup;
	let current;

	transformerselectionpopup = new TransformerSelectionPopup({
			props: {
				stageNames: /*stageNames*/ ctx[15],
				stageDescriptions: /*debug*/ ctx[0].stageDescriptions,
				currentStage: /*$debugStage*/ ctx[4]
			}
		});

	transformerselectionpopup.$on("selectTransformer", /*selectTransformer_handler*/ ctx[21]);

	return {
		c() {
			span = element("span");
			create_component(transformerselectionpopup.$$.fragment);
			attr(span, "slot", "content");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(transformerselectionpopup, span, null);
			current = true;
		},
		p(ctx, dirty) {
			const transformerselectionpopup_changes = {};
			if (dirty & /*debug*/ 1) transformerselectionpopup_changes.stageDescriptions = /*debug*/ ctx[0].stageDescriptions;
			if (dirty & /*$debugStage*/ 16) transformerselectionpopup_changes.currentStage = /*$debugStage*/ ctx[4];
			transformerselectionpopup.$set(transformerselectionpopup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(transformerselectionpopup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(transformerselectionpopup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(transformerselectionpopup);
		}
	};
}

// (70:16) <Popup>
function create_default_slot(ctx) {
	let t;
	let current;

	return {
		c() {
			t = space();
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (86:16) {#if supportsGrouping}
function create_if_block_4(ctx) {
	let span;
	let checkbox;
	let updating_enabled;
	let span_transition;
	let current;

	function checkbox_enabled_binding(value) {
		/*checkbox_enabled_binding*/ ctx[22](value);
	}

	let checkbox_props = { name: "Grouped" };

	if (/*groupingEnabled*/ ctx[3] !== void 0) {
		checkbox_props.enabled = /*groupingEnabled*/ ctx[3];
	}

	checkbox = new Checkbox({ props: checkbox_props });
	binding_callbacks.push(() => bind(checkbox, "enabled", checkbox_enabled_binding));

	return {
		c() {
			span = element("span");
			create_component(checkbox.$$.fragment);
			attr(span, "class", "inline-flex");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(checkbox, span, null);
			current = true;
		},
		p(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_enabled && dirty & /*groupingEnabled*/ 8) {
				updating_enabled = true;
				checkbox_changes.enabled = /*groupingEnabled*/ ctx[3];
				add_flush_callback(() => updating_enabled = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);

			add_render_callback(() => {
				if (!span_transition) span_transition = create_bidirectional_transition(span, slideH, { duration: 700 }, true);
				span_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(checkbox.$$.fragment, local);
			if (!span_transition) span_transition = create_bidirectional_transition(span, slideH, { duration: 700 }, false);
			span_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(checkbox);
			if (detaching && span_transition) span_transition.end();
		}
	};
}

// (91:16) {#if supportsRelevanceFiltering}
function create_if_block_3(ctx) {
	let span;
	let checkbox;
	let updating_enabled;
	let span_transition;
	let current;

	function checkbox_enabled_binding_1(value) {
		/*checkbox_enabled_binding_1*/ ctx[23](value);
	}

	let checkbox_props = { name: "Relevant Items" };

	if (/*onlyRelevantItems*/ ctx[2] !== void 0) {
		checkbox_props.enabled = /*onlyRelevantItems*/ ctx[2];
	}

	checkbox = new Checkbox({ props: checkbox_props });
	binding_callbacks.push(() => bind(checkbox, "enabled", checkbox_enabled_binding_1));

	return {
		c() {
			span = element("span");
			create_component(checkbox.$$.fragment);
			attr(span, "class", "inline-flex");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(checkbox, span, null);
			current = true;
		},
		p(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_enabled && dirty & /*onlyRelevantItems*/ 4) {
				updating_enabled = true;
				checkbox_changes.enabled = /*onlyRelevantItems*/ ctx[2];
				add_flush_callback(() => updating_enabled = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);

			add_render_callback(() => {
				if (!span_transition) span_transition = create_bidirectional_transition(span, slideH, { duration: 700 }, true);
				span_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(checkbox.$$.fragment, local);
			if (!span_transition) span_transition = create_bidirectional_transition(span, slideH, { duration: 700 }, false);
			span_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(checkbox);
			if (detaching && span_transition) span_transition.end();
		}
	};
}

// (104:8) {#each stageResult.messages as message}
function create_each_block(ctx) {
	let li;
	let t_value = /*message*/ ctx[27] + "";
	let t;
	let li_intro;
	let li_outro;
	let current;

	return {
		c() {
			li = element("li");
			t = text(t_value);
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, t);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*stageResult*/ 32) && t_value !== (t_value = /*message*/ ctx[27] + "")) set_data(t, t_value);
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (li_outro) li_outro.end(1);
				if (!li_intro) li_intro = create_in_transition(li, slide, { delay: 200 });
				li_intro.start();
			});

			current = true;
		},
		o(local) {
			if (li_intro) li_intro.invalidate();
			li_outro = create_out_transition(li, slide, {});
			current = false;
		},
		d(detaching) {
			if (detaching) detach(li);
			if (detaching && li_outro) li_outro.end();
		}
	};
}

// (122:4) {:else}
function create_else_block(ctx) {
	let div1;
	let div0;
	let t1;
	let t2;
	let if_block0 = /*supportsRelevanceFiltering*/ ctx[11] && /*onlyRelevantItems*/ ctx[2] && create_if_block_2(ctx);
	let if_block1 = /*supportsGrouping*/ ctx[10] && !/*groupingEnabled*/ ctx[3] && create_if_block_1(ctx);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			div0.textContent = "No visible changes from the transformation.";
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			attr(div1, "class", "flex space-x-1 items-center justify-center text-xl");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div1, t1);
			if (if_block0) if_block0.m(div1, null);
			append(div1, t2);
			if (if_block1) if_block1.m(div1, null);
		},
		p(ctx, dirty) {
			if (/*supportsRelevanceFiltering*/ ctx[11] && /*onlyRelevantItems*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*supportsGrouping*/ ctx[10] && !/*groupingEnabled*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

// (115:4) {#if visiblePages.find((page) => page.itemGroups.length > 0)}
function create_if_block(ctx) {
	let itemtable;
	let current;

	itemtable = new ItemTable({
			props: {
				schema: /*stageResult*/ ctx[5].schema,
				pages: /*visiblePages*/ ctx[14],
				maxPage: /*maxPage*/ ctx[13],
				pageIsPinned: /*pageIsPinned*/ ctx[12],
				changes: /*stageResult*/ ctx[5].changes
			}
		});

	return {
		c() {
			create_component(itemtable.$$.fragment);
		},
		m(target, anchor) {
			mount_component(itemtable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const itemtable_changes = {};
			if (dirty & /*stageResult*/ 32) itemtable_changes.schema = /*stageResult*/ ctx[5].schema;
			if (dirty & /*visiblePages*/ 16384) itemtable_changes.pages = /*visiblePages*/ ctx[14];
			if (dirty & /*maxPage*/ 8192) itemtable_changes.maxPage = /*maxPage*/ ctx[13];
			if (dirty & /*pageIsPinned*/ 4096) itemtable_changes.pageIsPinned = /*pageIsPinned*/ ctx[12];
			if (dirty & /*stageResult*/ 32) itemtable_changes.changes = /*stageResult*/ ctx[5].changes;
			itemtable.$set(itemtable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(itemtable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(itemtable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(itemtable, detaching);
		}
	};
}

// (125:12) {#if supportsRelevanceFiltering && onlyRelevantItems}
function create_if_block_2(ctx) {
	let div0;
	let t1;
	let div1;
	let t3;
	let div2;
	let mounted;
	let dispose;

	return {
		c() {
			div0 = element("div");
			div0.textContent = "Disabled the";
			t1 = space();
			div1 = element("div");
			div1.textContent = "relevance filter";
			t3 = space();
			div2 = element("div");
			div2.textContent = "?";
			attr(div1, "class", "font-bold cursor-pointer hover:underline");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			insert(target, t1, anchor);
			insert(target, div1, anchor);
			insert(target, t3, anchor);
			insert(target, div2, anchor);

			if (!mounted) {
				dispose = listen(div1, "click", /*click_handler_3*/ ctx[25]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t1);
			if (detaching) detach(div1);
			if (detaching) detach(t3);
			if (detaching) detach(div2);
			mounted = false;
			dispose();
		}
	};
}

// (132:12) {#if supportsGrouping && !groupingEnabled}
function create_if_block_1(ctx) {
	let div0;
	let t1;
	let div1;
	let t3;
	let div2;
	let mounted;
	let dispose;

	return {
		c() {
			div0 = element("div");
			div0.textContent = "Enable";
			t1 = space();
			div1 = element("div");
			div1.textContent = "grouping";
			t3 = space();
			div2 = element("div");
			div2.textContent = "?";
			attr(div1, "class", "font-bold cursor-pointer hover:underline");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			insert(target, t1, anchor);
			insert(target, div1, anchor);
			insert(target, t3, anchor);
			insert(target, div2, anchor);

			if (!mounted) {
				dispose = listen(div1, "click", /*click_handler_4*/ ctx[26]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t1);
			if (detaching) detach(div1);
			if (detaching) detach(t3);
			if (detaching) detach(div2);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div6;
	let div4;
	let div3;
	let t0;
	let span0;
	let popup0;
	let t1;
	let div0;
	let t3;
	let div1;
	let t5;
	let span1;
	let arrowleft;
	let t6;
	let span2;
	let arrowright;
	let t7;
	let span3;
	let popup1;
	let t8;
	let div2;
	let t9;
	let t10;
	let ul;
	let t11;
	let div5;
	let fontindex;
	let updating_showFonts;
	let t12;
	let show_if;
	let current_block_type_index;
	let if_block3;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*pageIsPinned*/ ctx[12] && create_if_block_5(ctx);

	popup0 = new Popup({
			props: {
				$$slots: {
					default: [create_default_slot_1],
					content: [create_content_slot_1],
					trigger: [create_trigger_slot_1]
				},
				$$scope: { ctx }
			}
		});

	arrowleft = new ArrowLeft({
			props: {
				size: "1x",
				class: /*canPrev*/ ctx[9]
				? "hover:text-select cursor-pointer"
				: "opacity-50"
			}
		});

	arrowright = new ArrowRight({
			props: {
				size: "1x",
				class: /*canNext*/ ctx[8]
				? "hover:text-select cursor-pointer"
				: "opacity-50"
			}
		});

	popup1 = new Popup({
			props: {
				$$slots: {
					default: [create_default_slot],
					content: [create_content_slot],
					trigger: [create_trigger_slot]
				},
				$$scope: { ctx }
			}
		});

	let if_block1 = /*supportsGrouping*/ ctx[10] && create_if_block_4(ctx);
	let if_block2 = /*supportsRelevanceFiltering*/ ctx[11] && create_if_block_3(ctx);
	let each_value = /*stageResult*/ ctx[5].messages;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	function fontindex_showFonts_binding(value) {
		/*fontindex_showFonts_binding*/ ctx[24](value);
	}

	let fontindex_props = { fontMap: /*debug*/ ctx[0].fontMap };

	if (/*showFonts*/ ctx[7] !== void 0) {
		fontindex_props.showFonts = /*showFonts*/ ctx[7];
	}

	fontindex = new FontIndex({ props: fontindex_props });
	binding_callbacks.push(() => bind(fontindex, "showFonts", fontindex_showFonts_binding));
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (dirty & /*visiblePages*/ 16384) show_if = !!/*visiblePages*/ ctx[14].find(func);
		if (show_if) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div6 = element("div");
			div4 = element("div");
			div3 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			span0 = element("span");
			create_component(popup0.$$.fragment);
			t1 = space();
			div0 = element("div");
			div0.textContent = "|";
			t3 = space();
			div1 = element("div");
			div1.textContent = "Transformation:";
			t5 = space();
			span1 = element("span");
			create_component(arrowleft.$$.fragment);
			t6 = space();
			span2 = element("span");
			create_component(arrowright.$$.fragment);
			t7 = space();
			span3 = element("span");
			create_component(popup1.$$.fragment);
			t8 = space();
			div2 = element("div");
			if (if_block1) if_block1.c();
			t9 = space();
			if (if_block2) if_block2.c();
			t10 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t11 = space();
			div5 = element("div");
			create_component(fontindex.$$.fragment);
			t12 = space();
			if_block3.c();
			attr(div2, "class", "w-full flex flex-row-reverse space-x-2 space-x-reverse text-sm");
			attr(div3, "class", "flex items-center space-x-2");
			attr(div4, "class", "controls py-2 svelte-1apljh0");
			attr(ul, "class", "messages list-disc list-inside mb-2 p-2 bg-blue-50 rounded shadow text-sm svelte-1apljh0");
			set_style(ul, "max-height", /*stageResult*/ ctx[5].messages.length * 40 + "px");
			attr(div5, "class", "fixed left-0 top-40 z-50");
			attr(div6, "class", "mx-4");
		},
		m(target, anchor) {
			insert(target, div6, anchor);
			append(div6, div4);
			append(div4, div3);
			if (if_block0) if_block0.m(div3, null);
			append(div3, t0);
			append(div3, span0);
			mount_component(popup0, span0, null);
			append(div3, t1);
			append(div3, div0);
			append(div3, t3);
			append(div3, div1);
			append(div3, t5);
			append(div3, span1);
			mount_component(arrowleft, span1, null);
			append(div3, t6);
			append(div3, span2);
			mount_component(arrowright, span2, null);
			append(div3, t7);
			append(div3, span3);
			mount_component(popup1, span3, null);
			append(div3, t8);
			append(div3, div2);
			if (if_block1) if_block1.m(div2, null);
			append(div2, t9);
			if (if_block2) if_block2.m(div2, null);
			append(div6, t10);
			append(div6, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append(div6, t11);
			append(div6, div5);
			mount_component(fontindex, div5, null);
			append(div6, t12);
			if_blocks[current_block_type_index].m(div6, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(span1, "click", /*click_handler_1*/ ctx[19]),
					listen(span2, "click", /*click_handler_2*/ ctx[20])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*pageIsPinned*/ ctx[12]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*pageIsPinned*/ 4096) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div3, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			const popup0_changes = {};

			if (dirty & /*$$scope, pagesNumbers, maxPage, pinnedPage*/ 1073750082) {
				popup0_changes.$$scope = { dirty, ctx };
			}

			popup0.$set(popup0_changes);
			const arrowleft_changes = {};

			if (dirty & /*canPrev*/ 512) arrowleft_changes.class = /*canPrev*/ ctx[9]
			? "hover:text-select cursor-pointer"
			: "opacity-50";

			arrowleft.$set(arrowleft_changes);
			const arrowright_changes = {};

			if (dirty & /*canNext*/ 256) arrowright_changes.class = /*canNext*/ ctx[8]
			? "hover:text-select cursor-pointer"
			: "opacity-50";

			arrowright.$set(arrowright_changes);
			const popup1_changes = {};

			if (dirty & /*$$scope, debug, $debugStage*/ 1073741841) {
				popup1_changes.$$scope = { dirty, ctx };
			}

			popup1.$set(popup1_changes);

			if (/*supportsGrouping*/ ctx[10]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*supportsGrouping*/ 1024) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div2, t9);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*supportsRelevanceFiltering*/ ctx[11]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*supportsRelevanceFiltering*/ 2048) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_3(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div2, null);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (dirty & /*stageResult*/ 32) {
				each_value = /*stageResult*/ ctx[5].messages;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty & /*stageResult*/ 32) {
				set_style(ul, "max-height", /*stageResult*/ ctx[5].messages.length * 40 + "px");
			}

			const fontindex_changes = {};
			if (dirty & /*debug*/ 1) fontindex_changes.fontMap = /*debug*/ ctx[0].fontMap;

			if (!updating_showFonts && dirty & /*showFonts*/ 128) {
				updating_showFonts = true;
				fontindex_changes.showFonts = /*showFonts*/ ctx[7];
				add_flush_callback(() => updating_showFonts = false);
			}

			fontindex.$set(fontindex_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block3 = if_blocks[current_block_type_index];

				if (!if_block3) {
					if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block3.c();
				} else {
					if_block3.p(ctx, dirty);
				}

				transition_in(if_block3, 1);
				if_block3.m(div6, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(popup0.$$.fragment, local);
			transition_in(arrowleft.$$.fragment, local);
			transition_in(arrowright.$$.fragment, local);
			transition_in(popup1.$$.fragment, local);
			transition_in(if_block1);
			transition_in(if_block2);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(fontindex.$$.fragment, local);
			transition_in(if_block3);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(popup0.$$.fragment, local);
			transition_out(arrowleft.$$.fragment, local);
			transition_out(arrowright.$$.fragment, local);
			transition_out(popup1.$$.fragment, local);
			transition_out(if_block1);
			transition_out(if_block2);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(fontindex.$$.fragment, local);
			transition_out(if_block3);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div6);
			if (if_block0) if_block0.d();
			destroy_component(popup0);
			destroy_component(arrowleft);
			destroy_component(arrowright);
			destroy_component(popup1);
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			destroy_each(each_blocks, detaching);
			destroy_component(fontindex);
			if_blocks[current_block_type_index].d();
			mounted = false;
			run_all(dispose);
		}
	};
}

const func = page => page.itemGroups.length > 0;

function instance($$self, $$props, $$invalidate) {
	let canNext;
	let canPrev;
	let stageResult;
	let supportsGrouping;
	let supportsRelevanceFiltering;
	let pageIsPinned;
	let pagesNumbers;
	let maxPage;
	let visiblePages;
	let $debugStage;
	component_subscribe($$self, debugStage, $$value => $$invalidate(4, $debugStage = $$value));
	
	let { debug } = $$props;
	const stageNames = debug.stageNames;
	let pinnedPage;
	let onlyRelevantItems = true;
	let groupingEnabled = true;
	let showFonts = false;
	const click_handler = () => $$invalidate(1, pinnedPage = undefined);
	const pinPage_handler = e => $$invalidate(1, pinnedPage = e.detail);
	const unpinPage_handler = () => $$invalidate(1, pinnedPage = undefined);
	const click_handler_1 = () => canPrev && debugStage.update(cur => cur - 1);
	const click_handler_2 = () => canNext && debugStage.update(cur => cur + 1);
	const selectTransformer_handler = ({ detail }) => debugStage.set(detail);

	function checkbox_enabled_binding(value) {
		groupingEnabled = value;
		$$invalidate(3, groupingEnabled);
	}

	function checkbox_enabled_binding_1(value) {
		onlyRelevantItems = value;
		$$invalidate(2, onlyRelevantItems);
	}

	function fontindex_showFonts_binding(value) {
		showFonts = value;
		$$invalidate(7, showFonts);
	}

	const click_handler_3 = () => $$invalidate(2, onlyRelevantItems = false);
	const click_handler_4 = () => $$invalidate(3, groupingEnabled = true);

	$$self.$$set = $$props => {
		if ("debug" in $$props) $$invalidate(0, debug = $$props.debug);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$debugStage*/ 16) {
			$: $$invalidate(8, canNext = $debugStage + 1 < stageNames.length);
		}

		if ($$self.$$.dirty & /*$debugStage*/ 16) {
			$: $$invalidate(9, canPrev = $debugStage > 0);
		}

		if ($$self.$$.dirty & /*debug, $debugStage*/ 17) {
			$: $$invalidate(5, stageResult = debug.stageResults($debugStage));
		}

		if ($$self.$$.dirty & /*stageResult*/ 32) {
			$: $$invalidate(10, supportsGrouping = !!stageResult.descriptor?.debug?.itemMerger);
		}

		if ($$self.$$.dirty & /*stageResult*/ 32) {
			$: $$invalidate(11, supportsRelevanceFiltering = !stageResult.descriptor?.debug?.showAll);
		}

		if ($$self.$$.dirty & /*pinnedPage*/ 2) {
			$: $$invalidate(12, pageIsPinned = !isNaN(pinnedPage));
		}

		if ($$self.$$.dirty & /*stageResult*/ 32) {
			$: $$invalidate(6, pagesNumbers = new Set(stageResult.pages.map(page => page.index)));
		}

		if ($$self.$$.dirty & /*pagesNumbers*/ 64) {
			$: $$invalidate(13, maxPage = Math.max(...pagesNumbers));
		}

		if ($$self.$$.dirty & /*stageResult, onlyRelevantItems, groupingEnabled, pinnedPage*/ 46) {
			$: $$invalidate(14, visiblePages = stageResult.selectPages(onlyRelevantItems, groupingEnabled, pinnedPage));
		}
	};

	return [
		debug,
		pinnedPage,
		onlyRelevantItems,
		groupingEnabled,
		$debugStage,
		stageResult,
		pagesNumbers,
		showFonts,
		canNext,
		canPrev,
		supportsGrouping,
		supportsRelevanceFiltering,
		pageIsPinned,
		maxPage,
		visiblePages,
		stageNames,
		click_handler,
		pinPage_handler,
		unpinPage_handler,
		click_handler_1,
		click_handler_2,
		selectTransformer_handler,
		checkbox_enabled_binding,
		checkbox_enabled_binding_1,
		fontindex_showFonts_binding,
		click_handler_3,
		click_handler_4
	];
}

class DebugView extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { debug: 0 });
	}
}

export default DebugView;