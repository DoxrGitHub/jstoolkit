/*

This is the doxr toolkit. It has been made specifically for @doxr, but anyone can use it

Documentation is also for doxr, in case he forgets.

Licensed with the MIT license.

*/

function element(id) {
  return document.getElementById(id);
}

function elementC(classdoxr) {
  return document.getElementsByClassName(classdoxr);
}

function writeTo(id, content) {
  element(id).innerHTML = content;
}

function writeToC(classdoxr, content) {
  let elements = elementC(classdoxr);
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = content;
  }
}

function style(id, styletype, stylevalue) {
  element(id).style.styletype = stylevalue;
}

function styleC(classdoxr, styletype, stylevalue) {
  let elements = elementC(classdoxr);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.styletype = stylevalue;
  }
}