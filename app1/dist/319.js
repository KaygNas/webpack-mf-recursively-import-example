"use strict";
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([[319],{

/***/ 319:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// ./src/App.js
const RemoteApp = () => __webpack_require__.e(/* import() */ 586).then(__webpack_require__.t.bind(__webpack_require__, 586, 23));
const App = () => {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = 'App1';
  root.appendChild(h1);
  RemoteApp().then(m => m.default());
};
/* harmony default export */ const src_App = (App);
;// ./src/bootstrap.js

src_App();

/***/ })

}]);