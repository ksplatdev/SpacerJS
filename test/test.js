var myElem = _('#test').append('Hello, ').html(' <b>World!</b>');
var myButton = _('button').setTitle('A button');
var myInput = _('#myInput');

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

// Make a custom property
// call with myElem.fn.test() or anyother instanceof _

_appendCustom('test', function () {
	console.log('test');
});

// set and read the value of myInput
myInput.debug(myInput.val());
myInput.debug(myInput.val('Hello, World!'));

// Animate
containsText.animate('color', 'red', '1s');

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
	clone.class = 'cloned';
	clone.innerHTML += ' <b>Cloned</b>';
	body.append(clone);
}

// transform and rotate
myElem.rotate('0.5turn').debug('rotated 0.5turn');
myElem
	.sleep(1500)
	.then(() => {
		myElem.rotate('0turn').debug('reset rotation');
	})
	.catch((err) => {
		throw new Error(err);
	});

// iterate through a node list

var myNodeList = _(body).__('p'); // .nodelist returns an array

myNodeList.each((node, i) => {
	console.log(_(node).parent());
});
