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
    element: HTMLElement | null;
    nodelist: Array<HTMLElement> | NodeList | null;

    /**
     * Selects a HTML Element
     * @param {string} selector QuerySelector string
     */

    constructor(selector: string) {
        this.element = document.querySelector(selector) || null;  
        this.nodelist = [] || null;
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
     * @returns HTML Element or null
     */

    appendTo(parent: string) {
        return this.element ? document.querySelector(parent)?.appendChild(this.element): null;
    }

    /**
     * Appends the a string to a parent element
     * @param {string} parent Selector string
     * @returns HTML Element or null
     */

    append(str: string) {
        return this.element?.append(str);
    }

    /**
     * Appends the a string to the selected element innerHTML
     * @param {string} str String to be inserted in the innerHTML
     * @returns HTML Element or null
     */

    iHTML(str: string) {
        return this.element ? this.element.innerHTML += str : null;
    }

    /**
     * Appends the a string to the selected element innerText
     * @param {string} str String to be inserted in the innerText
     * @returns HTML Element or null
     */

    iText(str: string) {
        return this.element ? this.element.innerText += str : null;
    }

    /**
     * Clicks the element
     * @returns HTMLElement
     */

    click() {
        return this.element ? this.element.click() : null;
    }

    /**
     * Focuses the element
     * @returns HTMLElement or null
     */

    focus() {
        return this.element ? this.element.focus() : null;
    }

    /**
     * Sets the element's title
     * @returns HTMLElement or null
     */

    setTitle(str: string) {
        return this.element ? this.element.title = str : null;
    }

    /**
     * Attaches onclick event listener 
     * @param {Function} cb Callback function on event
     * @returns HTMLElement or null
     */

    onclick(cb: Function) {
        return this.element ? this.element.addEventListener("click", cb()) : null;
    }

    /**
     * Attaches onsubmit event listener 
     * @param {Function} cb Callback function on event
     * @returns HTMLElement or null
     */

    onsubmit(cb: Function) {
        return this.element ? this.element.addEventListener("submit", cb()): null;
    }

    /**
     * Attaches mouseover event listener 
     * @param {Function} cb Callback function on event
     * @returns HTMLElement or null
     */

    onhover(cb: Function) {
        return this.element ? this.element.addEventListener("mouseover", cb()): null;
    }


}