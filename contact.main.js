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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactItem: () => (/* binding */ contactItem)\n/* harmony export */ });\nfunction contactItem(){\n    const container = document.querySelector('.container');\n    container.innerHTML = '';\n    \n    const createContact = function(name, phone, job){\n\n        const contactContainer = document.createElement('DIV');\n        container.appendChild(contactContainer)\n        const contactInfo = document.createElement('UL');\n        const contactName = document.createElement('LI');\n        const contactPhone = document.createElement('LI');\n        const contactJob = document.createElement('LI');\n\n        contactName.textContent = name;\n        contactPhone.textContent = phone;\n        contactJob.textContent = job;\n\n        contactContainer.append(contactInfo);\n        contactInfo.append(contactName);\n        contactInfo.append(contactPhone);\n        contactInfo.append(contactJob);\n    }\n    createContact('Jade De Vera', '954-000-000', 'Owner')\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdEl0ZW0oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3QgPSBmdW5jdGlvbihuYW1lLCBwaG9uZSwgam9iKXtcblxuICAgICAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKVxuICAgICAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcbiAgICAgICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcbiAgICAgICAgY29uc3QgY29udGFjdEpvYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XG5cbiAgICAgICAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBjb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSBwaG9uZTtcbiAgICAgICAgY29udGFjdEpvYi50ZXh0Q29udGVudCA9IGpvYjtcblxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0SW5mbyk7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjb250YWN0TmFtZSk7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjb250YWN0UGhvbmUpO1xuICAgICAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdEpvYik7XG4gICAgfVxuICAgIGNyZWF0ZUNvbnRhY3QoJ0phZGUgRGUgVmVyYScsICc5NTQtMDAwLTAwMCcsICdPd25lcicpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact.js\n");

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
/******/ 	__webpack_modules__["./src/contact.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;