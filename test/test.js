var myElem = new _("#test").append("Hello, ").iHTML(" <b>World!</b>");
var myButton = new _("button").setTitle("A button");

var containsText = new _("span", "Testing contains ", false);

if(myElem.contains(myButton.element)) {
    console.log("true")
}