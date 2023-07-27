/*

This is the doxr toolkit. Find information at 

https://toolkit.js.org

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

function addClass(id, className) {
  element(id).classList.add(className);
}

function removeClass(id, className) {
  element(id).classList.remove(className);
}

function toggleClass(id, className) {
  element(id).classList.toggle(className);
}

function hide(id) {
  
}

function show(id) {
  
}

