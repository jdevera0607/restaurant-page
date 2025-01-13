/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuItem: () => (/* binding */ menuItem)\n/* harmony export */ });\nfunction menuItem(){\n    const container = document.querySelector('.container');\n    container.innerHTML = '';\n\n    const displayItems = function(item, description, price){\n       \n        const menuContainer = document.createElement('UL');\n        menuContainer.classList.add('menu');\n        \n        const menuItem = document.createElement('LI');\n        const itemDesc = document.createElement('LI');\n        const itemPrice = document.createElement('LI');\n\n        menuItem.textContent = item;\n        itemDesc.textContent = description;\n        itemPrice.textContent = price;\n\n        menuContainer.append(menuItem);\n        menuContainer.append(itemDesc);\n        menuContainer.append(itemPrice);\n        container.append(menuContainer);\n    }\n    const friedChicken1 = displayItems(\"Fried Chicken\", \"Crispy and juicy, fried until golden brown. Comes in dark or white meat and 2 sides.\", \"$10.99\");\n    const friedChicken3 = displayItems(\"Chicken Bulgogi\", \"Korean BBQ, made with Gochujang. Comes with a side of rice. \", \"$11.99\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtZW51SXRlbSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBkaXNwbGF5SXRlbXMgPSBmdW5jdGlvbihpdGVtLCBkZXNjcmlwdGlvbiwgcHJpY2Upe1xuICAgICAgIFxuICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVUwnKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcblxuICAgICAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmQoaXRlbURlc2MpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZChpdGVtUHJpY2UpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1lbnVDb250YWluZXIpO1xuICAgIH1cbiAgICBjb25zdCBmcmllZENoaWNrZW4xID0gZGlzcGxheUl0ZW1zKFwiRnJpZWQgQ2hpY2tlblwiLCBcIkNyaXNweSBhbmQganVpY3ksIGZyaWVkIHVudGlsIGdvbGRlbiBicm93bi4gQ29tZXMgaW4gZGFyayBvciB3aGl0ZSBtZWF0IGFuZCAyIHNpZGVzLlwiLCBcIiQxMC45OVwiKTtcbiAgICBjb25zdCBmcmllZENoaWNrZW4zID0gZGlzcGxheUl0ZW1zKFwiQ2hpY2tlbiBCdWxnb2dpXCIsIFwiS29yZWFuIEJCUSwgbWFkZSB3aXRoIEdvY2h1amFuZy4gQ29tZXMgd2l0aCBhIHNpZGUgb2YgcmljZS4gXCIsIFwiJDExLjk5XCIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;