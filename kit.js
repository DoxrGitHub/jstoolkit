/*

This is the doxr toolkit. It has been made specifically for @doxr, but anyone can use it

Documentation is also for doxr, in case he forgets.

Licensed with the MIT license.

*/

function element(id) {
  return document.getElementById(id);
}

function elementC(classdoxr) {
  return document.getElementByClassName(classdoxr);
}

function writeTo(id, content) {
  element(id).innerHTML = content;
}

function writeToC(classdoxr, content) {
  elementC(classdoxr).innerHTML = content;
}

function style(id, styletype, stylevalue) {
  element(id).style.styletype = stylevalue;
}