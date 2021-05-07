var myElem = _('#test').append('Hello, ').html(' <b>World!</b>');
var myButton = _('button').setTitle('A button');
var myNodeList = _('body').__('button');

var containsText = _('span', false, 'Testing contains ', false);

// set hidden class meta

myElem.setMeta({ hiddenClass: 'hidden' });
myButton.setMeta({ hoverClass: 'hoverbtn' });

// on listener testing with each testing
// multiple events sperated by space
// array of callbacks or one callback function

myButton.on('click mouseover mouseout', [
	() => {
		console.log('clicked');
	},
	() => {
		console.log('hovered');
		myButton.hover();
	},
	() => {
		console.log('un hovered');
		myButton.unhover();
	},
]);

// sleep promise

myElem
	.sleep(5000)
	.then(() => {
		// use hiddenClass in meta to hide

		myElem.hide().debug('hidden');

		myElem
			.sleep(2500)
			.then(() => {
				// use hiddenClass in meta to show
				myElem.show().debug('shown');
			})
			.catch((err) => {
				throw new Error(err);
			});
	})
	.catch((err) => {
		throw new Error(err);
	});

// get css styles

myElem.debug(myElem.css());

// check if element contains the button element

if (myElem.contains(myButton.element, false)) {
	console.log('true');

	// clone element with children (the deep parameter (optional))
	let clone = myElem.clone(true);
	clone.id = 'cloned';
	clone.innerHTML += ' <b>Cloned</b>';
	body.append(clone);
}

// remove empty elements

_('body').empty();
