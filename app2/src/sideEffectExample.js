__webpack_require__ = function (moduleId) {}

__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop)
}

__webpack_require__.d = function (exports, definition) {
	for (var key in definition) {
		if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
		}
	}
}

const exports = {}
__webpack_require__.d(exports, {
	d: function () {
		return l
	},
	f: function () {
		return c
	},
})

console.log(typeof exports.d, typeof exports.f) // ['undefined', 'undefined']

var l = function l() {
	return 'l'
}
var c = function c() {
	return 'c'
}

console.log(typeof exports.d, typeof exports.f) // ['function', 'function']
