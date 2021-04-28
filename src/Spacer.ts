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
	iHTML: Function;
	iText: Function;
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
}

/**
 * @description SpacerJS, finds/creates an element
 * @param {string} selector A valid selector
 * @param {boolean} [create] Boolean to create an element or not
 * @param {string} [contents] Contents to find element by
 * @param {boolean} [strict] If true, the contents must match the text exactly
 * @public
 * @license MIT
 * @namespace
 */

function _(
	selector: string,
	create: boolean,
	contents?: string,
	strict?: boolean
) {
	let element: HTMLElement | null = document.querySelector(selector) || null;
	let nodelist: Array<HTMLElement | Node> | NodeList | null = [] || null;

	const methods: _Methods = {
		__,
		append,
		appendTo,
		appendChild,
		appendList,
		iHTML,
		iText,
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
		element,
	};

	// create element

	if (create) {
		element = document.createElement(selector);
	}

	// check for specific contents in an element
	if (contents) {
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
	 * @returns NodeList
	 */

	function __(selector: string) {
		nodelist = document.querySelectorAll(selector) || null;
		return nodelist;
	}

	/**
	 * @description Appends the child element to a parent element
	 * @param {string} parent Selector string
	 */

	function appendTo(parent: string) {
		element ? document.querySelector(parent)?.appendChild(element) : null;
		return methods;
	}

	/**
	 * @description Appends the a Node or string to a parent element
	 * @param {Node|String} parent Selector string
	 */

	function append(str: Node | string) {
		element?.append(str);
		return methods;
	}

	/**
	 * @description Appends a child element
	 * @param {HTMLElement} child
	 */

	function appendChild(child: HTMLElement) {
		element ? element.appendChild(child) : null;
		return methods;
	}

	/**
	 * @description Appends a list of HTML Elements
	 * @param {Array<HTMLElement>} elementlist
	 */

	function appendList(elementlist: Array<HTMLElement | Element | Node>) {
		elementlist.forEach((element) => {
			element ? element.appendChild(element) : null;
		});
		return methods;
	}

	/**
	 * @description Appends the a string to the selected element innerHTML
	 * @param {string} str String to be inserted in the innerHTML
	 */

	function iHTML(str: string) {
		element ? (element.innerHTML += str) : null;
		return methods;
	}

	/**
	 * @description Appends the a string to the selected element innerText
	 * @param {string} str String to be inserted in the innerText
	 */

	function iText(str: string) {
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
		return methods;
	}

	/**
	 * @description Checks if the element contains a Node
	 * @param {Node} node HTML Node to check for
	 * @returns Boolean
	 */

	function contains(node: Node) {
		return element ? element.contains(node) : null;
		return methods;
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
	 * @param {string} attribute
	 * @returns Boolean
	 */

	function hasAttr(attribute: string) {
		return element ? element.hasAttribute(attribute) : null;
	}

	/**
	 * @description Sets/Creates a attribute to a value
	 * @param {string} attribute
	 * @param {string} value
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
	 * @param {HTMLElement | Node} node
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
	 * @param {HTMLElement | Node} node
	 */

	function removeChild(node: HTMLElement | Node) {
		element?.removeChild(node);
		return methods;
	}

	/**
	 * @description Replaces a child element
	 * @param {HTMLElement | Node} newChild
	 * @param {HTMLElement | Node} oldChild
	 */

	function replaceChild(
		newChild: HTMLElement | Node,
		oldChild: HTMLElement | Node
	) {
		element?.replaceChild(newChild, oldChild);
		return methods;
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

/**localStorage */
let storage = localStorage;

//#endregion EOA Variables
