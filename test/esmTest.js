import _, { body, head } from '../build/Spacer.esm.js'; // or ../build/Spacer.esm.min.js for minified version

let elem = _(body).addClass('.esmodule');

elem.on('click', (event) => {
	console.log('ES Module!');
});
