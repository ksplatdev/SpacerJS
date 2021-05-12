# Examples

This is not documentation.

Read the [documentation](https://ksplatdev.github.io/SpacerJS/-_.html) for more help.

**_MOST FUNCTIONS ARE CHAINABLE_**

## Ease of Access Global Variables

```js
console.log(body == document.body); // true

console.log(head == document.head); // true
```

## Selecting Elements

```js
// select element with a selector
let myElement = _('.mySelector');

// select element by contains any part of the innerHTML
let myOtherElement = _('.myOtherSelector', false, 'Text to find', false);

// select elements in the body and return all divs in a node list
let myElements = _('body').__('div').nodelist; // array

// iterate through a list
let myList = _(body).__('div'); // without .nodelist as we do not want it be an array

myList.each((node, i) => {
	console.log(_(node).kill());
});

// selecting an elements by HTMLElement
let myOtherElements = _(body);

// select the first child
let firstChild = myElement.first();

// select the last child
let lastChild = myElement.last();

// select a certain child
// **NOT ARRAY 0 INDEX BASED**
// Example:
// Incorrect: let elem = myElement.at(4) // this returns the fourth element
// Correct:
let fifthElement = myElement.at(5);
```

## Appending Elements

```js
let myElement = _('.myElement');

// appends a string or htmlelement
myElement.append('Hello, world!');

// appends itself to a parent
myElement.appendTo(body);

// appends a child element
myElement.appendChild(myChildElement);

// appends a list of elements
myElement.appendList(myElementList);

// prepends a string or htmlelement
myElement.prepend('This is at the top!');

// prepends itself to a parent
myElement.prependTo(body);
```

## Creating elements

```js
let myElement = _('.myElement', true).appendTo(myParentElement);

// clones itself and all child elements
myElement.appendChild(myElement.clone(true));
```

## Manipulating Elements

```js
let myElement = _('.myElement');

// setting the innerHTML
myElement.html('Hello, <b>World!</b>');

// setting the innerText
myElement.text('Hello, World!');

// setting the title
myElement.setTitle('SpacerJS');

// convert text nodes to plain text
myElement.normalize();

// remove a child element
myElement.removeChild(myChildElement);

// replace a child element
myElement.replaceChild(myChildElement, myNew);

// add a class
myElement.addClass('myClass');

// remove a class
myElement.removeClass('myClass');

// removes all empty child elements
myElement.empty();

// removes all children
myElement.removeChildren();

// set the input value
myElement.val('New Value');
```

## Animating & Transforming

```js
let myElement = _('.myElement');

// fade out an element
myElement.fadeOut(); // one param being intensity which defaults to 0.05

// fade in an element
myElement.fadeIn(); // one param being intensity which defaults to 0.05

// transition a css property
myElement.animate('color', 'red', '1s');

// transform an element
myElement.transform('translate(120px, 50%)'); // any valid css transform

// rotate an element
myElement.rotate('0.5turn'); // any valid css transform rotate
```

## Getting & Promises

```js
let myElement = _('.myElement');

// get children
let childrenList = myElement.children();

// get parent
let parent = myElement.parent();

// get clientBoundingRect
let rect = myElement.size();

// get offset
let offset = myElement.offeset();

// get css
let css = myElement.css();

// get input value
let value = myElement.val();

// sleep promise for 5 seconds
myElement
	.sleep(5000)
	.then(() => {
		myElement.addClass('.promise');
	})
	.catch((e) => {
		throw e;
	});
```

## Events

```js
let myElement = _('.myElement');

// click the element
myElement.click();

// double click the element
myElement.dbclick();

// event listener
myElement.on('click mouseover', [
	(event) => {
		console.log('clicked');
	},
	(event) => {
		console.log('hovered');
	},
]);

// trigger an event
myElement.trigger('mouseover');

// keydown listener
myElement.keydown(() => {
	console.log('keydown');
});

// keyup listener
myElement.keyup(() => {
	console.log('keyup');
});

// focus the element
myElement.focus();

// unfocus the element
myElement.unfocus();
```

## Attributes

```js
let myElement = _('.myElement');

// check for attributes
if (myElement.hasAttr('href')) console.log('true');

// set an attribute
myElement.attr('href', 'https://github.com/ksplatdev/SpacerJS');
```

## Checks

```js
let myElement = _('.myElement');

// check for child elements
if (myElement.hasChildren()) console.log('true');

// check if two nodes are the same
if (myElement.compare(myOtherElement)) console.log('true');
```

## Meta

```js
let myElement = _('.myElement');

// set element meta
myElement.setMeta({
	hiddenClass: 'hidden',
	hoverClass: 'hover',
	activeClass: 'active',
});

// get element meta
console.log(myElement.meta);

// remove meta hiddenClass
myElement.show();

// add meta hiddenClass
myElement.hide();

// remove meta hoverClass
myElement.hover();

// add meta hoverClass
myElement.unhover();

// remove meta activeClass
myElement.active();

// add meta activeClass
myElement.unactive();

// remove a meta property
myElement.removeMetaProp('hiddenClass'); // removes the hiddenClass from setMeta

// remove metadata completly
myElement.deleteMeta();
```

## Misc

```js
let myElement = _('.myElement');

// scroll element into view at the top of element
myElement.sToView(true);

// console.log chaning
myElement.debug('SpacerJS').sToView(true);

// returns string representation of the node
myElement.debug(myElement.toStr());

// check if element contains part or whole string
if (myElement.contains('Contains part of this text', false))
	console.log('true');

// check meta data state
myElement.debug(myElement.state);

// removes the node
myElement.kill();
```
