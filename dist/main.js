/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// let game = document.getElementById('game');\n// game.width=500;\n// game.height=500;\n// const ctx = game.getContext(\"2d\");\n// ctx.fillStyle=\"black\";\n// ctx.fillRect(0,0,500,500);\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.querySelectorAll(\"h1\").forEach(element => {\n    element.style.backgroundColor = \"red\";\n  });\n  let title = document.querySelectorAll('.title')[0];\n  console.log(title);\n  title.addEventListener('click', event => console.log('hi'));\n  let game = document.getElementById('game');\n  game.width = 500;\n  game.height = 500;\n  const ctx = game.getContext(\"2d\");\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, 500, 500);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiZ2FtZSIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbGV0IGdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuLy8gZ2FtZS53aWR0aD01MDA7XG4vLyBnYW1lLmhlaWdodD01MDA7XG4vLyBjb25zdCBjdHggPSBnYW1lLmdldENvbnRleHQoXCIyZFwiKTtcbi8vIGN0eC5maWxsU3R5bGU9XCJibGFja1wiO1xuLy8gY3R4LmZpbGxSZWN0KDAsMCw1MDAsNTAwKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7IFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMVwiKS5mb3JFYWNoKCBlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9KTtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpWzBdO1xuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnQ9PmNvbnNvbGUubG9nKCdoaScpKTtcbiAgICBsZXQgZ2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgXG4gICAgZ2FtZS53aWR0aD01MDA7XG4gICAgZ2FtZS5oZWlnaHQ9NTAwO1xuICAgIGNvbnN0IGN0eCA9IGdhbWUuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGU9XCJibGFja1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsNTAwLDUwMCk7XG4gIH0pXG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hERCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUVDLE9BQU8sSUFBSTtJQUNsREEsT0FBTyxDQUFDQyxLQUFLLENBQUNDLGVBQWUsR0FBRyxLQUFLO0VBQ3ZDLENBQUMsQ0FBQztFQUVGLElBQUlDLEtBQUssR0FBR1AsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbERNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDbEJBLEtBQUssQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFDUyxLQUFLLElBQUVGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3hELElBQUlFLElBQUksR0FBR1gsUUFBUSxDQUFDWSxjQUFjLENBQUMsTUFBTSxDQUFDO0VBRTFDRCxJQUFJLENBQUNFLEtBQUssR0FBQyxHQUFHO0VBQ2RGLElBQUksQ0FBQ0csTUFBTSxHQUFDLEdBQUc7RUFDZixNQUFNQyxHQUFHLEdBQUdKLElBQUksQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztFQUNqQ0QsR0FBRyxDQUFDRSxTQUFTLEdBQUMsT0FBTztFQUNyQkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0FBQzNCLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;