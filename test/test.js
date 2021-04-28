var myElem = _("#test").append("Hello, ").iHTML(" <b>World!</b>");
var myButton = _("button").setTitle("A button");

var containsText = _("span", false, "Testing contains ", false);

if(myElem.contains(myButton.element)) {
    console.log("true");
    let clone = myElem.clone(true);
    clone.id = "cloned";
    body.append(clone);
}
