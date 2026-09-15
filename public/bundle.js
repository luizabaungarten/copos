/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const Copo = __webpack_require__(/*! ./models/Copo */ \"./models/Copo.js\")\r\n\r\nlet resposta = document.getElementById('resposta')\r\nlet progPrincipal = document.getElementById('progPrincipal')\r\n\r\nprogPrincipal.addEventListener('click', () =>{\r\n    let raioMaior = Number(document.getElementById('raioMaior').value)\r\n    let raioMenor = Number(document.getElementById('raioMenor').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n    if (raioMaior <= 0 || raioMenor <= 0 || altura <= 0) {\r\n        resposta.innerHTML = 'Todos os valores devem ser maiores que zero.'\r\n        return\r\n    }\r\n    if (raioMaior <= raioMenor) {\r\n        resposta.innerHTML = 'O raio maior deve ser maior que o raio menor.'\r\n        return\r\n    }\r\n    let copo = new Copo(raioMaior, raioMenor, altura)\r\n    resposta.innerHTML = `\r\n        <p>Geratriz: ${copo.calcGeratriz().toFixed(2)} cm</p>\r\n        <p>Área Base Menor: ${copo.calcABMenor().toFixed(2)} cm²</p>\r\n        <p>Área Base Maior: ${copo.calcABMaior().toFixed(2)} cm²</p>\r\n        <p>Área Lateral: ${copo.calcAreaLateral().toFixed(2)} cm²</p>\r\n        <p>Área Total: ${copo.calcAreaTotal().toFixed(2)} cm²</p>\r\n        <p>Volume: ${copo.calcVolume().toFixed(2)} ml</p>\r\n        <p>Classificação: ${copo.classificar()}</p>\r\n    `\r\n})\n\n//# sourceURL=webpack://15_09_26/./index.js?\n}");

/***/ },

/***/ "./models/Copo.js"
/*!************************!*\
  !*** ./models/Copo.js ***!
  \************************/
(module) {

eval("{class Copo {\r\n    constructor(raioMaior, raioMenor, altura){\r\n        this.raioMaior = raioMaior\r\n        this.raioMenor = raioMenor\r\n        this.altura = altura\r\n    }\r\n    calcGeratriz(){\r\n        return Math.sqrt(Math.pow(this.raioMaior - this.raioMenor, 2) + Math.pow(this.altura, 2)); }\r\n    \r\n    calcABMenor(){\r\n         return Math.PI * Math.pow(this.raioMenor, 2); }\r\n\r\n    calcABMaior(){\r\n        return Math.PI * Math.pow(this.raioMaior, 2); }\r\n    \r\n    calcAreaLateral(){\r\n        return Math.PI * (this.raioMaior + this.raioMenor) * this.calcGeratriz(); }\r\n    \r\n    calcAreaTotal(){ \r\n        return this.calcABMenor() + this.calcABMaior() + this.calcAreaLateral(); }\r\n    \r\n    calcVolume(){\r\n        return (Math.PI * this.altura * (Math.pow(this.raioMaior, 2) + this.raioMaior * this.raioMenor + Math.pow(this.raioMenor, 2))) / 3; }\r\n    \r\n    classificar(){ \r\n        let volume = this.calcVolume()\r\n            if (volume <= 400){ \r\n                return \"Copo Padrão (Água / Chá)\"\r\n            }else if (volume > 400 && volume <= 600){ \r\n                return \"Copo Grande (Suco / Refrigerante)\"; }\r\n            else if (volume > 600 && volume <= 1000){\r\n                return \"Copo Extra Grande (Suco / Refrigerante)\";\r\n            }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Copo\n\n//# sourceURL=webpack://15_09_26/./models/Copo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;