/*

SpacerJS


MIT License

Copyright (c) 2021 Bleart Emini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

interface _Methods {
	__: Function;
	append: Function;
	appendTo: Function;
	appendChild: Function;
	appendList: Function;
	html: Function;
	text: Function;
	click: Function;
	focus: Function;
	unfocus: Function;
	setTitle: Function;
	sToView: Function;
	toStr: Function;
	contains: Function;
	clone: Function;
	hasAttr: Function;
	attr: Function;
	kill: Function;
	hasChildren: Function;
	compareNode: Function;
	normalize: Function;
	removeChild: Function;
	replaceChild: Function;
	element: HTMLElement | Node | null;
	meta: object;
	setMeta: Function;
	show: Function;
	hide: Function;
	on: Function;
	addClass: Function;
	removeClass: Function;
	children: Function;
	dbclick: Function;
	sleep: Function;
	keydown: Function;
	keyup: Function;
	debug: Function;
	hover: Function;
	unhover: Function;
	active: Function;
	unactive: Function;
	css: Function;
	removeChildren: Function;
	empty: Function;
	parent: Function;
	nodelist: NodeList | Array<HTMLElement | Node>;
	first: Function;
	last: Function;
	at: Function;
	each: Function;
	trigger: Function;
	size: Function;
	prepend: Function;
	prependTo: Function;
	prependList: Function;
	randomChild: Function;
	fadeOut: Function;
	fadeIn: Function;
	animate: Function;
	state: object;
	transform: Function;
	rotate: Function;
	removeMetaProp: Function;
	deleteMeta: Function;
	fn: LooseObject;
	val: Function;
	offset: Function;
}

interface LooseObject {
	[key: string]: any;
}

interface _Meta {
	hiddenClass?: string;
	hoverClass?: string;
	activeClass?: string;
}

/**
 * @private
 */

let customFunctions: LooseObject = {};

/**
 * @description SpacerJS, finds/creates an element
 * @param {string|HTMLElement} selector A valid selector
 * @param {boolean} [create] Boolean to create an element or not
 * @param {string} [contents] Contents to find element by
 * @param {boolean} [strict] If true, the contents must match the text exactly
 * @public
 * @license MIT
 * @namespace
 */

function _(
	selector: string | HTMLElement,
	create?: boolean,
	contents?: string,
	strict?: boolean
) {
	/**
	 * @description The selected HTMLElement
	 */
	let element: HTMLElement | null = null;
	/**
	 * @description The selected nodelist
	 */
	let nodelist: Array<HTMLElement | Node> | NodeList | null = [] || null;
	/**
	 * @description Meta data object
	 */
	let meta: _Meta = {};
	/**
	 * @description Object that keeps track of element's meta state
	 * @property {boolean} hidden Tracks if element is hidden by hide() or show() meta functions
	 * @property {boolean} hovered Tracks if element is hovered by hover() or unhover() meta functions
	 * @property {boolean} active Tracks if element is active by active() or unactive() meta functions
	 */
	let state = {
		hidden: false,
		hovered: false,
		active: false,
	};

	/**
	 * @description Object of any custom methods you want to add
	 */
	let fn = customFunctions;

	if (typeof selector == 'string') {
		element = document.querySelector(selector);
	} else {
		element = selector;
	}

	const methods: _Methods = {
		__,
		append,
		appendTo,
		appendChild,
		appendList,
		html,
		text,
		click,
		focus,
		unfocus,
		setTitle,
		sToView,
		toStr,
		contains,
		clone,
		hasAttr,
		attr,
		kill,
		hasChildren,
		compareNode,
		normalize,
		removeChild,
		replaceChild,
		setMeta,
		show,
		hide,
		on,
		addClass,
		removeClass,
		children,
		dbclick,
		sleep,
		keydown,
		keyup,
		debug,
		hover,
		unhover,
		active,
		unactive,
		css,
		removeChildren,
		empty,
		parent,
		first,
		last,
		at,
		each,
		trigger,
		size,
		prepend,
		prependTo,
		prependList,
		randomChild,
		fadeOut,
		fadeIn,
		animate,
		transform,
		rotate,
		removeMetaProp,
		deleteMeta,
		val,
		offset,
		element,
		nodelist,
		meta,
		state,
		fn,
	};

	// create element

	if (create && typeof selector == 'string') {
		element = document.createElement(selector);
	}

	// check for specific contents in an element
	if (contents && typeof selector == 'string') {
		let elements: any = document.querySelectorAll(selector);
		if (strict == undefined) strict = true;
		if (strict == false) {
			nodelist = [...elements].filter((e) =>
				e.innerHTML.includes(contents)
			);
		} else {
			nodelist = [...elements].filter((e) => e.innerHTML == contents);
		}
	}

	/**
	 * @description Selects and returns a NodeList
	 * @param {string} selector QuerySelectorAll string
	 */

	function __(selector: string) {
		nodelist = document.querySelectorAll(selector) || null;
		methods.nodelist = nodelist;
		return methods;
	}

	/**
	 * @description Appends the child element to a parent element
	 * @param {string|HTMLElement} parent Selector string
	 */

	function appendTo(parent: string | HTMLElement) {
		if (typeof parent == 'string') {
			element
				? document.querySelector(parent)?.appendChild(element)
				: null;
		} else {
			element ? parent.appendChild(element) : null;
		}

		return methods;
	}

	/**
	 * @description Appends the a Node or string to a parent element
	 * @param {HTMLElement|Node|String} elem Selector string or HTMLElement
	 */

	function append(elem: HTMLElement | Node | string) {
		element?.append(elem);
		return methods;
	}

	/**
	 * @description Appends a child element
	 * @param {HTMLElement} child An HTMLElement
	 */

	function appendChild(child: HTMLElement) {
		element ? element.appendChild(child) : null;
		return methods;
	}

	/**
	 * @description Appends a list of HTML Elements
	 * @param {Array<HTMLElement>} elementlist Array of Elements or nodes
	 */

	function appendList(elementlist: Array<HTMLElement | Element | Node>) {
		elementlist.forEach((element) => {
			element ? element.appendChild(element) : null;
		});
		return methods;
	}

	/**
	 * @description Appends the child element to a parent element
	 * @param {string|HTMLElement} parent Selector string
	 */

	function prependTo(parent: string | HTMLElement) {
		if (typeof parent == 'string') {
			element
				? document.querySelector(parent)?.appendChild(element)
				: null;
		} else {
			element ? parent.prepend(element) : null;
		}

		return methods;
	}

	/**
	 * @description Appends the a Node or string to a parent element
	 * @param {HTMLElement|Node|String} elem Selector string or HTMLElement
	 */

	function prepend(elem: HTMLElement | Node | string) {
		element?.prepend(elem);
		return methods;
	}

	/**
	 * @description Appends a list of HTML Elements
	 * @param {Array<HTMLElement>} elementlist Array of Elements or nodes
	 */

	function prependList(elementlist: Array<HTMLElement | Element>) {
		elementlist.forEach((element) => {
			element ? element.prepend(element) : null;
		});
		return methods;
	}

	/**
	 * @description Appends the a string to the selected element innerHTML
	 * @param {string} str String to be inserted in the innerHTML
	 */

	function html(str: string) {
		element ? (element.innerHTML += str) : null;
		return methods;
	}

	/**
	 * @description Appends the a string to the selected element innerText
	 * @param {string} str String to be inserted in the innerText
	 */

	function text(str: string) {
		element ? (element.innerText += str) : null;
		return methods;
	}

	/**
	 * @description Clicks the element
	 */

	function click() {
		element ? element.click() : null;
		return methods;
	}

	/**
	 * @description Clicks the element twice
	 */

	function dbclick() {
		element?.click();
		element?.click();
		return methods;
	}

	/**
	 * @description Focuses the element
	 */

	function focus() {
		element ? element.focus() : null;
		return methods;
	}

	/**
	 * @description Removes focus from the element
	 */

	function unfocus() {
		element ? element.blur() : null;
		return methods;
	}

	/**
	 * @description Sets the element's title
	 */

	function setTitle(str: string) {
		element ? (element.title = str) : null;
		return methods;
	}

	/**
	 * @description Scrolls the element into view
	 * @param {boolean} [alignTo] True or false, true lines up element to the top of the screen
	 */

	function sToView(alignTo?: boolean) {
		element
			? alignTo
				? element.scrollIntoView(alignTo)
				: element.scrollIntoView()
			: null;
		return methods;
	}

	/**
	 * @description Returns an HTML Element into a string
	 * @returns String or null
	 */

	function toStr() {
		return element ? element.toString() : null;
	}

	/**
	 * @description Checks if the element contains a Node
	 * @param {Node} node HTML Node to check for
	 * @returns Boolean
	 */

	function contains(node: Node) {
		return element ? element.contains(node) : null;
	}

	/**
	 * @description Clones the element
	 * @param {boolean} [keepChildren] Keep child elements
	 * @returns Cloned Node
	 */

	function clone(keepChildren?: boolean) {
		let clone: any = keepChildren
			? element?.cloneNode(keepChildren)
			: element?.cloneNode();
		return clone;
	}

	/**
	 * @description Checks if the element has an certain attribute
	 * @param {string} attribute Attribute
	 * @returns Boolean
	 */

	function hasAttr(attribute: string) {
		return element ? element.hasAttribute(attribute) : null;
	}

	/**
	 * @description Sets/Creates a attribute to a value
	 * @param {string} attribute Attribute to set/create
	 * @param {string} value Value that the Attribute will be set to
	 */

	function attr(attribute: string, value: string) {
		element?.setAttribute(attribute, value);
		return methods;
	}

	/**
	 * @description Checks if an element has any child nodes
	 * @param {boolean} normalize Boolean to normalize before checking for child nodes
	 * @returns Boolean
	 */

	function hasChildren(normalize?: boolean) {
		normalize ? element?.normalize() : null;
		return element?.hasChildNodes();
	}

	/**
	 * @description Compares two nodes to see if they are similar
	 * @param {HTMLElement | Node} node HTMLElement or Node
	 * @returns Boolean
	 */

	function compareNode(node: HTMLElement | Node) {
		return element?.isSameNode(node);
	}

	/**
	 * @description Converts text nodes into text content
	 */

	function normalize() {
		element?.normalize();
		return methods;
	}

	/**
	 * @description Removes a child node
	 * @param {HTMLElement | Node} node HTMLElement or Node
	 */

	function removeChild(node: HTMLElement | Node) {
		element?.removeChild(node);
		return methods;
	}

	/**
	 * @description Replaces a child element
	 * @param {HTMLElement | Node} newChild New Element
	 * @param {HTMLElement | Node} oldChild Old Element
	 */

	function replaceChild(
		newChild: HTMLElement | Node,
		oldChild: HTMLElement | Node
	) {
		element?.replaceChild(newChild, oldChild);
		return methods;
	}

	/**
	 * @description Sets the "metadata" of a element for showing passed classes, and other methods
	 * @param {object} obj Meta Data Object
	 * @param {string} [obj.hiddenClass] Class to be used when using hide() or show()
	 * @param {string} [obj.hoverClass] Class to be used when using hover() or unhover()
	 * @param {string} [obj.activeClass] Class to be used when using active() or unactive()
	 */

	function setMeta(obj: _Meta) {
		meta = obj;
		return methods;
	}

	/**
	 * @description Removes the hidden class that was set with setMeta()
	 */

	function show() {
		meta.hiddenClass ? element?.classList.remove(meta.hiddenClass) : null;
		state.hidden = false;
		return methods;
	}

	/**
	 * @description Adds the hidden class that was set with setMeta()
	 */

	function hide() {
		meta.hiddenClass ? element?.classList.add(meta.hiddenClass) : null;
		state.hidden = true;
		return methods;
	}

	/**
	 * @description Sets on event listener and runs cb on event
	 * @param {string} event One event or multiple events seperated by one space
	 * @param {Function | Array<Function>} cb A callback function or an array of callback functions that will be called by their index of events
	 */

	function on(event: string, cb: (ev?: Event) => any | Array<Function>) {
		let eventArr = event.split(' ');

		eventArr.forEach((value, index) => {
			if (Array.isArray(cb)) {
				element?.addEventListener(value, cb[index]);
			} else {
				element?.addEventListener(value, cb);
			}
		});

		return methods;
	}

	/**
	 * @description Adds a class to the element
	 * @param {string} className Class Name
	 */

	function addClass(className: string) {
		element?.classList.add(className);
		return methods;
	}

	/**
	 * @description Removes a class from the element
	 * @param {string} className Class Name
	 */

	function removeClass(className: string) {
		element?.classList.remove(className);
		return methods;
	}

	/**
	 * @description Returns NodeList<ChildNode>
	 * @returns NodeList
	 */

	function children() {
		return element?.childNodes;
	}

	/**
	 * @description Sleep promise
	 * @param {number} ms Millisecond delay
	 * @returns Promise<number>
	 */

	function sleep(ms: number): Promise<number> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * @description Listens for the keydown event
	 * @param {Function} cb Callback
	 */

	function keydown(cb: Function) {
		element?.addEventListener('keydown', cb());
		return methods;
	}

	/**
	 * @description Listens for the keyup event
	 * @param {Function} cb Callback
	 */

	function keyup(cb: Function) {
		element?.addEventListener('keydown', cb());
		return methods;
	}

	/**
	 * @description Console logs any arguments
	 * @param {...any} args Any arguments
	 */

	function debug(...args: any) {
		console.log(...args);
		return methods;
	}

	/**
	 * @description Adds the hoverClass that was set with setMeta(metaObj)
	 */

	function hover() {
		meta.hoverClass ? element?.classList.add(meta.hoverClass) : null;
		state.hovered = true;
		return methods;
	}

	/**
	 * @description Adds the hoverClass that was set with setMeta(metaObj)
	 */

	function unhover() {
		meta.hoverClass ? element?.classList.remove(meta.hoverClass) : null;
		state.hovered = false;
		return methods;
	}

	/**
	 * @description Adds the activeClass that was set with setMeta(metaObj)
	 */

	function active() {
		meta.activeClass ? element?.classList.add(meta.activeClass) : null;
		state.active = true;
		return methods;
	}

	/**
	 * @description Adds the activeClass that was set with setMeta(metaObj)
	 */

	function unactive() {
		meta.activeClass ? element?.classList.remove(meta.activeClass) : null;
		state.active = false;
		return methods;
	}

	/**
	 * @description Retuns computedStyle of element
	 * @param {string} [pseudoElement] A pseudoElement
	 * @returns CSSStyleDeclaration | null
	 */

	function css(pseudoElement?: string): CSSStyleDeclaration | null {
		let returned = null;
		element
			? pseudoElement
				? (returned = getComputedStyle(element, pseudoElement))
				: (returned = getComputedStyle(element))
			: (returned = null);
		return returned;
	}

	/**
	 * @description Removes all empty child nodes
	 */

	function empty() {
		if (element?.hasChildNodes()) {
			for (let i = 0; i < element?.children.length; i++) {
				let htmlstring = element?.children[i].innerHTML;
				htmlstring = htmlstring.trim
					? htmlstring.trim()
					: htmlstring.replace(/^\s+/, '');
				if (htmlstring == '') {
					element?.children[i].remove();
				}
			}
		}
	}

	/**
	 * @description Removes all child nodes
	 */

	function removeChildren() {
		while (element?.firstChild) {
			element?.removeChild(element.firstChild);
		}
		return methods;
	}

	/**
	 * @description Returns the parent element
	 * @returns HTMLElement
	 */

	function parent() {
		return element?.parentElement;
	}

	/**
	 * @description Returns the first child element as an HTMLelement
	 * @param {boolean} [node=false] Determines the returned value as a HTMLElement or Node
	 * @returns HTMLElement
	 */

	function first(node?: boolean) {
		return node ? element?.firstChild : element?.firstElementChild;
	}

	/**
	 * @description Returns the last child element as an HTMLelement
	 * @param {boolean} [node=false] Determines the returned value as a HTMLElement or Node
	 * @returns HTMLElement
	 */

	function last(node?: boolean) {
		return node ? element?.lastChild : element?.lastElementChild;
	}

	/**
	 * @description Selects an element, not 0 based
	 * @example let myElement = _('div').at(5) // gets the fifth child and not the 4th like an array
	 * @param {number} index Index
	 * @returns Element | undefined
	 */

	function at(index: number) {
		if (index == 0)
			console.warn(
				'SpacerJS: _().at(), index is 0, index is not array 0 based'
			);
		return element?.children[index - 1];
	}

	/**
	 * @description Iterate through a nodelist
	 * @param {Function} cb Callback with first parameter being value and last being index
	 */

	function each(
		cb: (value: HTMLElement | Node | null, index: number) => any
	) {
		nodelist?.forEach(cb.bind(methods));
		return methods;
	}

	/**
	 * @description Triggers an event
	 * @param {string} event Event
	 */

	function trigger(event: string) {
		element?.dispatchEvent(new Event(event));
		return methods;
	}

	/**
	 * @description Returns the Bounding Client Rect
	 * @returns DomRect
	 */

	function size() {
		return element?.getBoundingClientRect();
	}

	/**
	 * @description Returns a random child
	 * @returns HTMLElement | Node | null
	 */

	function randomChild() {
		return element?.children
			? Math.floor(Math.random() * (element?.children.length - 0 + 1) + 0)
			: null;
	}

	/**
	 * @description Fades out the selected element
	 * @param {number} [intensity=0.05] Intensity of the fade
	 */

	function fadeOut(intensity?: number) {
		let tempNum: number = 1;
		let inten = intensity || 0.05;
		if (element) {
			element.style.opacity = '1';
		}

		let int = setInterval(() => {
			if (element) {
				if (tempNum > 0) {
					tempNum -= inten;
					element.style.opacity = `${tempNum}`;
				} else {
					element.style.opacity = '0';
					clearInterval(int);
				}
			}
		}, 100);

		return methods;
	}

	/**
	 * @description Fades in the selected element
	 * @param {number} [intensity=0.05] Intensity of the fade
	 */

	function fadeIn(intensity?: number) {
		let tempNum: number = 0;
		let inten = intensity || 0.05;
		if (element) {
			element.style.opacity = '0';
		}

		let int = setInterval(() => {
			if (element) {
				if (tempNum < 1) {
					tempNum += inten;
					element.style.opacity = `${tempNum}`;
				} else {
					element.style.opacity = '1';
					clearInterval(int);
				}
			}
		}, 100);

		return methods;
	}

	/**
	 * @description Animates the element
	 * @param {string} cssProperty cssProperty to edit
	 * @param {string} value New value of cssProperty
	 * @param {string} time Css Transition length, ex: "1s"
	 */

	function animate(cssProperty: string, value: string, time: string) {
		let className = `SpacerJS-Animation-${Math.floor(
			Math.random() * (100000 - 0 + 1) + 0
		)}`;

		let style = document.createElement('style');
		style.innerHTML = `.${className} { ${cssProperty}: ${value}; transition: ${cssProperty} ${time}; }`;
		head.appendChild(style);

		addClass(className);

		return methods;
	}

	/**
	 * @description Sets the transform of an element
	 * @param {string} cssValue Any valid CSS Tranform
	 * @example myElement.transform('translate(120px, 50%)')
	 */

	function transform(cssValue: string) {
		if (element) {
			element.style.transform = cssValue;
		}
		return methods;
	}

	/**
	 * @description Sets the rotation of an element
	 * @param {string} cssValue Any valid CSS Rotate Tranform
	 * @example myElement.rotate('0.5turn')
	 */

	function rotate(cssValue: string) {
		if (element) {
			element.style.transform = `rotate(${cssValue})`;
		}
		return methods;
	}

	/**
	 * @description Removes a property of Metadata
	 * @param {string} metaKey hiddenClass, hoverClass, or activeClass
	 */

	function removeMetaProp(metaKey: string) {
		if (metaKey == 'hiddenClass') {
			meta.hiddenClass = '';
		}
		if (metaKey == 'hoverClass') {
			meta.hoverClass = '';
		}
		if (metaKey == 'activeClass') {
			meta.activeClass = '';
		}
		return methods;
	}

	/**
	 * @description Removes metadata
	 */

	function deleteMeta() {
		meta.hiddenClass = '';
		meta.hoverClass = '';
		meta.activeClass = '';
		return methods;
	}

	/**
	 * @description Returns the value of an input element and sets the input value
	 * @param {string|any} [newValue] New value to set the input value to, optional
	 * @returns HTMLInputElement Value
	 */

	function val(newValue?: string | any) {
		if (element instanceof HTMLInputElement) {
			newValue ? (element.value = newValue) : null;
			return element.value;
		}
	}

	/**
	 * @description Returns the top and left coordianate
	 * @returns object.top & object.left
	 */

	function offset() {
		return { top: size()?.top, left: size()?.left };
	}

	/**
	 * @description Removes the element
	 */

	function kill() {
		element?.remove();
		return methods;
	}

	return methods;
}

//#region ease of access variables

/**Body Element @type {HTMLElement} */
let body = document.body;

/**Head Element @type {HTMLElement} */
let head = document.head;

//#endregion EOA Variables

// other functions

/**
 * @description Appends a custom function to _().fn
 * @param {string} key Custom Function name
 * @param {Function|any} func Custom Function
 */

function _appendCustom(key: string, func: Function | any) {
	customFunctions[key] = func;
	return customFunctions;
}
