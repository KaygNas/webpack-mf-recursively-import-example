"use strict";
(self["webpackChunkapp2"] = self["webpackChunkapp2"] || []).push([[195],{

/***/ 195:
/***/ (() => {


;// ./src/entryA.js

function getA() {
  return 'A';
}
const logA = () => {
  console.log('debug: A');
  console.log('debug: ', getC());
};
logA();
;// ./src/entryB.js

function getB() {
  return [getA(), 'B'].join('_');
}
const logB = () => {
  console.log('debug: B');
};
logB();
;// ./src/entryC.js


function getC() {
  return [getA(), getB(), 'C'].join('_');
}
const logC = () => {
  console.log('debug: C');
};

// logC();
;// ./src/App.js


const App = () => {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = 'App2';
  const h2 = document.createElement('h2');
  h2.textContent = getC();
  const h3 = document.createElement('h3');
  h3.textContent = getA();
  root.appendChild(h1);
  root.appendChild(h2);
  root.appendChild(h3);
};
/* harmony default export */ const src_App = (App);
;// ./src/bootstrap.js

src_App();

/***/ })

}]);