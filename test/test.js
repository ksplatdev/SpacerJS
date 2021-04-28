var myElem = _("#test").append("Hello, ").iHTML(" <b>World!</b>");
var myButton = _("button").setTitle("A button");

var containsText = _("span", false, "Testing contains ", false);

if (myElem.contains(myButton.element, false)) {
	console.log("true");
	let clone = myElem.clone(true);
	clone.id = "cloned";
	clone.innerHTML += " <b>Cloned</b>";
	body.append(clone);
}
