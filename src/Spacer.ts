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



class _ {
    public element: HTMLElement | null;
    public nodelist: Array<HTMLElement|Node> | NodeList | null;

    /**
     * Selects a HTML Element
     * @param {string} selector QuerySelector string
     */

    constructor(selector: string, contents?: string, strict?: boolean) {
        this.element = document.querySelector(selector) || null;  
        this.nodelist = [] || null;

        // check for specific contents in an element
        if(contents) {
            let elements = document.querySelectorAll(selector);
            if(strict == undefined) strict = false;
            if(strict == false) {
                this.nodelist = [...elements].filter(e => e.innerHTML.includes(contents));
            }else{
                this.nodelist = [...elements].filter(e => e.innerHTML == contents);
            };
            
        };
        
    };

    /**
     * Selects and returns a NodeList 
     * @param {string} selector QuerySelectorAll string
     * @returns NodeList
     */

    __(selector: string) {
        this.nodelist = document.querySelectorAll(selector) || null;
        return this.nodelist;
    }

    /**
     * Appends the child element to a parent element
     * @param {string} parent Selector string
     */

    appendTo(parent: string) {
        this.element ? document.querySelector(parent)?.appendChild(this.element): null;
        return this;
    }

    /**
     * Appends the a string to a parent element
     * @param {string} parent Selector string
     */

    append(str: string) {
        this.element?.append(str);
        return this;
    }

    /**
     * Appends the a string to the selected element innerHTML
     * @param {string} str String to be inserted in the innerHTML
     */

    iHTML(str: string) {
        this.element ? this.element.innerHTML += str : null;
        return this;
    }

    /**
     * Appends the a string to the selected element innerText
     * @param {string} str String to be inserted in the innerText
     */

    iText(str: string) {
        this.element ? this.element.innerText += str : null;
        return this;
    }

    /**
     * Clicks the element
     */

    click() {
        this.element ? this.element.click() : null;
        return this;
    }

    /**
     * Focuses the element
     */

    focus() {
        this.element ? this.element.focus() : null;
        return this;
    }

    /**
     * Removes focus from the element
     */

    unfocus() {
        this.element ? this.element.blur() : null;
        return this;
    };

    /**
     * Sets the element's title
     */

    setTitle(str: string) {
        this.element ? this.element.title = str : null;
        return this;
    }

    /**
     * Scrolls the element into view
     * @param {boolean} [alignTo] True or false, true lines up element to the top of the screen
     */

    sToView(alignTo?: boolean) {
        this.element ? (alignTo ? this.element.scrollIntoView(alignTo) : this.element.scrollIntoView()) : null;
        return this;
    }

    /**
     * Returns an HTML Element into a string
     * @returns String or null
     */

    toStr() {
        return this.element ? this.element.toString() : null;
    }

    /**
     * Checks if the element contains a Node
     * @param {Node} node HTML Node to check for
     * @returns Boolean
     */

    contains(node: Node) {
        return this.element ? this.element.contains(node) : null;
    }

    /**
     * Clones the element
     * @param {boolean} [deep] Keep child elements
     */

    clone(deep?: boolean) {
        this.element ? (deep ? this.element.cloneNode(deep) : this.element.cloneNode()) : null;
        return this;
    }

    /**
     * Checks if the element has an certain attribute
     * @param {string} attribute 
     * @returns Boolean
     */

    hasAttr(attribute: string) {
        return this.element ? this.element.hasAttribute(attribute) : null;
    }
}