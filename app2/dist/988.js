"use strict";
(self["webpackChunkapp2"] = self["webpackChunkapp2"] || []).push([[988],{

/***/ 988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entryC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _entryA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);


const App = () => {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = 'App2';
  const h2 = document.createElement('h2');
  h2.textContent = (0,_entryC__WEBPACK_IMPORTED_MODULE_0__/* .getC */ .e)();
  const h3 = document.createElement('h3');
  h3.textContent = (0,_entryA__WEBPACK_IMPORTED_MODULE_1__/* .getA */ .s)();
  root.appendChild(h1);
  root.appendChild(h2);
  root.appendChild(h3);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ getA)
/* harmony export */ });
/* harmony import */ var _entryC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

function getA() {
  return 'A';
}
const logA = () => {
  console.log('debug: A');
  console.log('debug: ', (0,_entryC__WEBPACK_IMPORTED_MODULE_0__/* .getC */ .e)());
};
logA();

/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ getB)
/* harmony export */ });
/* harmony import */ var _entryA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(800);

function getB() {
  return [(0,_entryA__WEBPACK_IMPORTED_MODULE_0__/* .getA */ .s)(), 'B'].join('_');
}
const logB = () => {
  console.log('debug: B');
};
logB();

/***/ }),

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ getC)
/* harmony export */ });
/* harmony import */ var _entryA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(800);
/* harmony import */ var _entryB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(801);


function getC() {
  return [(0,_entryA__WEBPACK_IMPORTED_MODULE_0__/* .getA */ .s)(), (0,_entryB__WEBPACK_IMPORTED_MODULE_1__/* .getB */ .l)(), 'C'].join('_');
}
const logC = () => {
  console.log('debug: C');
};

// logC();

/***/ })

}]);