# Examples

This is not documentation.

Read the [documentation](https://ksplatdev.github.io/SpacerJS/-_.html) for more help.



## Selecting Elements

```js

// select element with a selector
let myElement = _(".mySelector");

// select element by contains any part of the innerHTML 
let myOtherElement = _(".myOtherSelector", false, "Text to find", false);

// select elements in the body and return all divs in a node list
let myElements = _("body").__("div");

```

## Appending Elements

```js

let myElement = _(".myElement");

// appends a string or node
myElement.append("Hello, world!");

// appends element to a parent
myElement.appendTo(document.body);

// appends a child element
myElement.appendChild(myChildElement);

// appends a list of elements
myElement.appendList(myElementList);

```

## Creating elements

```js

let myElement = _(".myElement", true).appendTo(myParentElement);

// clones itself and all child elements
myElement.appendChild(myElement.clone(true));

```

## Manipulating Elements

```js

let myElement = _(".myElement");

// setting the innerHTML
myElement.iHTML("Hello, <b>World!</b>");

// setting the innerText
myElement.iText("Hello, World!");

// setting the title
myElement.setTitle("SpacerJS");


```

## Events

```js

let myElement = _(".myElement");

// click the element
myElement.click();

// focus the element
myElement.focus();

// unfocus the element
myElement.unfocus();


```

## Attributes

```js

let myElement = _(".myElement");

// check for attributes
if(myElement.hasAttr("href")) console.log("true");

// set an attribute
myElement.attr("href", "https://github.com/ksplatdev/SpacerJS");

```

## Misc

```js
let myElement = _(".myElement");

// scroll element into view at the top of element
myElement.sToView(true);

// returns string representation of the node
console.log(myElement.toStr());

// check if element contains part or whole string
if(myElement.contains("Contains part of this text", false)) console.log("true");

// removes the node
myElement.kill();



```