var myElem = _('#test').append('Hello, ').html(' <b>World!</b>');
var myButton = _('button').setTitle('A button');

var containsText = _('span', false, 'Testing contains ', false);

myElem.setMeta({ hiddenClass: 'hidden' });

myElem
	.sleep(5000)
	.then(() => {
		myElem.hide().debug('hidden');

		myElem
			.sleep(2500)
			.then(() => {
				myElem.show().debug('shown');
			})
			.catch((err) => {
				throw new Error(err);
			});
	})
	.catch((err) => {
		throw new Error(err);
	});

if (myElem.contains(myButton.element, false)) {
	console.log('true');
	let clone = myElem.clone(true);
	clone.id = 'cloned';
	clone.innerHTML += ' <b>Cloned</b>';
	body.append(clone);
}
