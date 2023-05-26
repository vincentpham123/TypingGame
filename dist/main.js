/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_wordgenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/wordgenerator.js */ \"./src/scripts/wordgenerator.js\");\n/* harmony import */ var _scripts_movingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/movingObject.js */ \"./src/scripts/movingObject.js\");\n/* harmony import */ var _scripts_setting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/setting.js */ \"./src/scripts/setting.js\");\n/* harmony import */ var _scripts_human_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/human.js */ \"./src/scripts/human.js\");\n// let game = document.getElementById('game');\n// game.width=500;\n// game.height=500;\n// const ctx = game.getContext(\"2d\");\n// ctx.fillStyle=\"black\";\n// ctx.fillRect(0,0,500,500);\n// import wordgenerator from \"./scripts\"\n\n\n\n\nwindow.MovingObject = _scripts_movingObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Setting = _scripts_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const word = (0,_scripts_wordgenerator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomWord)();\n  let setting = document.getElementById('setting');\n  let game = document.getElementById('game');\n  const ctx = game.getContext(\"2d\");\n  const setting2 = setting.getContext(\"2d\");\n  let background = new _scripts_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  background.draw(setting2);\n  setting.width = 1000;\n  setting.height = 500;\n  game.width = 1000;\n  game.height = 500;\n\n  //code to be put in game class\n  let humans = [];\n  let human1 = new _scripts_human_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]([500, 100], ctx, 1);\n  let human2 = new _scripts_human_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]([500, 300], ctx, 2);\n  human1.animate(ctx, 4);\n  human2.animate(ctx, 4);\n  // human1.animate(ctx,5);\n  // human2.animate(ctx,5);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUNKO0FBQ1Y7QUFDSjtBQUN2Q0ksTUFBTSxDQUFDSCxZQUFZLEdBQUdBLGdFQUFZO0FBQ2xDRyxNQUFNLENBQUNGLE9BQU8sR0FBR0EsMkRBQU87QUFDeEJHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxJQUFJLEdBQUdQLHdFQUFhLENBQUMsQ0FBQztFQUM1QixJQUFJUSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFJQyxJQUFJLEdBQUVMLFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUN6QyxNQUFNRSxHQUFHLEdBQUdELElBQUksQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztFQUNqQyxNQUFNQyxRQUFRLEdBQUdMLE9BQU8sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztFQUN6QyxJQUFJRSxVQUFVLEdBQUcsSUFBSVosMkRBQU8sQ0FBQyxDQUFDO0VBQzlCWSxVQUFVLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDO0VBQ3pCTCxPQUFPLENBQUNRLEtBQUssR0FBRyxJQUFJO0VBQ3BCUixPQUFPLENBQUNTLE1BQU0sR0FBRyxHQUFHO0VBQ3BCUCxJQUFJLENBQUNNLEtBQUssR0FBQyxJQUFJO0VBQ2ZOLElBQUksQ0FBQ08sTUFBTSxHQUFDLEdBQUc7O0VBRWY7RUFDQSxJQUFJQyxNQUFNLEdBQUMsRUFBRTtFQUNiLElBQUlDLE1BQU0sR0FBRyxJQUFJaEIseURBQUssQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQ1EsR0FBRyxFQUFDLENBQUMsQ0FBQztFQUN2QyxJQUFJUyxNQUFNLEdBQUcsSUFBSWpCLHlEQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUNRLEdBQUcsRUFBQyxDQUFDLENBQUM7RUFDdkNRLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDVixHQUFHLEVBQUMsQ0FBQyxDQUFDO0VBQ3JCUyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1YsR0FBRyxFQUFDLENBQUMsQ0FBQztFQUNyQjtFQUNBO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBsZXQgZ2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4vLyBnYW1lLndpZHRoPTUwMDtcbi8vIGdhbWUuaGVpZ2h0PTUwMDtcbi8vIGNvbnN0IGN0eCA9IGdhbWUuZ2V0Q29udGV4dChcIjJkXCIpO1xuLy8gY3R4LmZpbGxTdHlsZT1cImJsYWNrXCI7XG4vLyBjdHguZmlsbFJlY3QoMCwwLDUwMCw1MDApO1xuLy8gaW1wb3J0IHdvcmRnZW5lcmF0b3IgZnJvbSBcIi4vc2NyaXB0c1wiXG5pbXBvcnQge2dldFJhbmRvbVdvcmR9IGZyb20gJy4vc2NyaXB0cy93b3JkZ2VuZXJhdG9yLmpzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ09iamVjdC5qcyc7XG5pbXBvcnQgU2V0dGluZyBmcm9tICcuL3NjcmlwdHMvc2V0dGluZy5qcyc7XG5pbXBvcnQgSHVtYW4gZnJvbSAnLi9zY3JpcHRzL2h1bWFuLmpzJztcbndpbmRvdy5Nb3ZpbmdPYmplY3QgPSBNb3ZpbmdPYmplY3Q7XG53aW5kb3cuU2V0dGluZyA9IFNldHRpbmc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7IFxuICAgICBcbiAgICBjb25zdCB3b3JkID0gZ2V0UmFuZG9tV29yZCgpO1xuICAgIGxldCBzZXR0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmcnKTtcbiAgICBsZXQgZ2FtZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBjb25zdCBjdHggPSBnYW1lLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBzZXR0aW5nMiA9IHNldHRpbmcuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IFNldHRpbmcoKTtcbiAgICBiYWNrZ3JvdW5kLmRyYXcoc2V0dGluZzIpO1xuICAgIHNldHRpbmcud2lkdGggPSAxMDAwO1xuICAgIHNldHRpbmcuaGVpZ2h0ID0gNTAwO1xuICAgIGdhbWUud2lkdGg9MTAwMDtcbiAgICBnYW1lLmhlaWdodD01MDA7XG5cbiAgICAvL2NvZGUgdG8gYmUgcHV0IGluIGdhbWUgY2xhc3NcbiAgICBsZXQgaHVtYW5zPVtdXG4gICAgbGV0IGh1bWFuMSA9IG5ldyBIdW1hbihbNTAwLDEwMF0sY3R4LDEpO1xuICAgIGxldCBodW1hbjIgPSBuZXcgSHVtYW4oWzUwMCwzMDBdLGN0eCwyKTtcbiAgICBodW1hbjEuYW5pbWF0ZShjdHgsNCk7XG4gICAgaHVtYW4yLmFuaW1hdGUoY3R4LDQpO1xuICAgIC8vIGh1bWFuMS5hbmltYXRlKGN0eCw1KTtcbiAgICAvLyBodW1hbjIuYW5pbWF0ZShjdHgsNSk7XG4gIH0pXG4iXSwibmFtZXMiOlsiZ2V0UmFuZG9tV29yZCIsIk1vdmluZ09iamVjdCIsIlNldHRpbmciLCJIdW1hbiIsIndpbmRvdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndvcmQiLCJzZXR0aW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNldHRpbmcyIiwiYmFja2dyb3VuZCIsImRyYXciLCJ3aWR0aCIsImhlaWdodCIsImh1bWFucyIsImh1bWFuMSIsImh1bWFuMiIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/human.js":
/*!******************************!*\
  !*** ./src/scripts/human.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movingObject.js */ \"./src/scripts/movingObject.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\n\n\nclass Human extends _movingObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static IMAGE = './images/walkcyclevarious.png';\n  static humanImage = new Image();\n  constructor(pos, ctx, person) {\n    const vel = _util_js__WEBPACK_IMPORTED_MODULE_1__.randomVec(1);\n    super(pos, vel);\n    this.image = Human.humanImage;\n    this.person = person;\n    this.spriteWidth = 65;\n    this.spriteHeight = 61 * this.person;\n    this.maxFrame = 11;\n    this.minFrame = 9;\n    this.gameFrame = 0;\n    this.frame = 8;\n  }\n  draw(ctx) {\n    console.log(this.image);\n    let [x, y] = this.pos;\n    let person = this.person;\n    const humanImage = this.image;\n    humanImage.src = Human.IMAGE;\n    const width = this.spriteWidth;\n    const height = this.spriteHeight;\n    let frame = this.frame;\n    humanImage.onload = function () {\n      ctx.clearRect(0, 0, 1000, 500);\n      ctx.drawImage(humanImage, 65 * frame, 61 * person, 65, 61, x, y, 65, 61);\n    };\n\n    // ctx.drawImage(this.image,10*this.spriteWidth,1*this.spriteHeight,this.spriteWidth,this.spriteHeight,x,y,this.width,this.height);\n  }\n\n  update() {\n    if (this.frame < this.maxFrame) this.frame++;else this.frame = this.minFrame;\n  }\n  move() {\n    let [x, y] = this.pos;\n    if (x > 0) this.pos = [this.pos[0] - 1, this.pos[1]];\n  }\n  animate(ctx) {\n    let frameRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;\n    // ctx.clearRect(0,0,1000 ,500);\n    let frameCounter = 0;\n    const frameDelay = Math.floor(60 / frameRate);\n    const animateLoop = () => {\n      if (frameCounter % frameDelay === 0) {\n        // ctx.clearRect(0,0,1000 ,500);\n        this.draw(ctx);\n        this.update();\n        this.move();\n      }\n      frameCounter++;\n      requestAnimationFrame(animateLoop.bind(this));\n    };\n    requestAnimationFrame(animateLoop.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Human);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDQyxLQUFLLENBQUMsRUFBRSxHQUFDUCxTQUFTLENBQUM7SUFFM0MsTUFBTVEsV0FBVyxHQUFHQSxDQUFBLEtBQUk7TUFDcEIsSUFBSUosWUFBWSxHQUFHQyxVQUFVLEtBQUcsQ0FBQyxFQUFDO1FBQzlCO1FBQ0EsSUFBSSxDQUFDbkIsSUFBSSxDQUFDWCxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUNzQixNQUFNLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFDZjtNQUNBTSxZQUFZLEVBQUU7TUFDZEsscUJBQXFCLENBQUNELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDREQscUJBQXFCLENBQUNELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBR2pEO0FBQ0o7QUFFQSwrREFBZXpDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvc2NyaXB0cy9odW1hbi5qcz81YzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3ZpbmdPYmplY3QuanMnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5cbmNsYXNzIEh1bWFuIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBzdGF0aWMgSU1BR0UgPSAnLi9pbWFnZXMvd2Fsa2N5Y2xldmFyaW91cy5wbmcnO1xuICAgIHN0YXRpYyBodW1hbkltYWdlID0gbmV3IEltYWdlKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yIChwb3MsY3R4LHBlcnNvbil7XG4gICAgICAgIGNvbnN0IHZlbCA9IFV0aWwucmFuZG9tVmVjKDEpO1xuICAgICAgICBzdXBlcihwb3MsdmVsKTtcbiAgICBcbiAgICAgICAgdGhpcy5pbWFnZSA9IEh1bWFuLmh1bWFuSW1hZ2U7XG4gICAgICAgIHRoaXMucGVyc29uID0gcGVyc29uO1xuICAgICAgICB0aGlzLnNwcml0ZVdpZHRoID0gNjU7XG4gICAgICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gNjEqdGhpcy5wZXJzb247XG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSAxMTtcbiAgICAgICAgdGhpcy5taW5GcmFtZT05O1xuICAgICAgICB0aGlzLmdhbWVGcmFtZT0wO1xuICAgICAgICB0aGlzLmZyYW1lID0gODtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2UpO1xuICAgICAgICBsZXQgW3gseV0gPSB0aGlzLnBvcztcbiAgICAgICAgbGV0IHBlcnNvbiA9IHRoaXMucGVyc29uXG4gICAgICAgIGNvbnN0IGh1bWFuSW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBodW1hbkltYWdlLnNyYyA9IEh1bWFuLklNQUdFO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc3ByaXRlV2lkdGhcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zcHJpdGVIZWlnaHRcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgXG4gICAgICAgIGh1bWFuSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLDEwMDAsNTAwKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaHVtYW5JbWFnZSw2NSpmcmFtZSw2MSpwZXJzb24sNjUsNjEseCx5LDY1LDYxKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLDEwKnRoaXMuc3ByaXRlV2lkdGgsMSp0aGlzLnNwcml0ZUhlaWdodCx0aGlzLnNwcml0ZVdpZHRoLHRoaXMuc3ByaXRlSGVpZ2h0LHgseSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZiAodGhpcy5mcmFtZTx0aGlzLm1heEZyYW1lKSB0aGlzLmZyYW1lKys7XG4gICAgICAgIGVsc2UgdGhpcy5mcmFtZSA9IHRoaXMubWluRnJhbWU7XG4gICAgfVxuXG4gICAgbW92ZSgpe1xuICAgICAgICBsZXQgW3gseV0gPSB0aGlzLnBvcztcbiAgICAgICAgaWYgKHg+MCkgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0tMSx0aGlzLnBvc1sxXV07XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKGN0eCxmcmFtZVJhdGU9NjApe1xuICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsMCwxMDAwICw1MDApO1xuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgY29uc3QgZnJhbWVEZWxheSA9IE1hdGguZmxvb3IoNjAvZnJhbWVSYXRlKTtcblxuICAgICAgICBjb25zdCBhbmltYXRlTG9vcCA9ICgpPT57XG4gICAgICAgICAgICBpZiAoZnJhbWVDb3VudGVyICUgZnJhbWVEZWxheT09PTApe1xuICAgICAgICAgICAgICAgIC8vIGN0eC5jbGVhclJlY3QoMCwwLDEwMDAgLDUwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVMb29wLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUxvb3AuYmluZCh0aGlzKSk7XG5cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHVtYW5cblxuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlV0aWwiLCJIdW1hbiIsIklNQUdFIiwiaHVtYW5JbWFnZSIsIkltYWdlIiwiY29uc3RydWN0b3IiLCJwb3MiLCJjdHgiLCJwZXJzb24iLCJ2ZWwiLCJyYW5kb21WZWMiLCJpbWFnZSIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0IiwibWF4RnJhbWUiLCJtaW5GcmFtZSIsImdhbWVGcmFtZSIsImZyYW1lIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJ4IiwieSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwib25sb2FkIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwidXBkYXRlIiwibW92ZSIsImFuaW1hdGUiLCJmcmFtZVJhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmcmFtZUNvdW50ZXIiLCJmcmFtZURlbGF5IiwiTWF0aCIsImZsb29yIiwiYW5pbWF0ZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/human.js\n");

/***/ }),

/***/ "./src/scripts/movingObject.js":
/*!*************************************!*\
  !*** ./src/scripts/movingObject.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(pos, vel) {\n    this.pos = pos;\n    this.vel = vel;\n  }\n  move() {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1]];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZpbmdPYmplY3QuanMuanMiLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU1BLFlBQVk7RUFDZEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDaEIsSUFBSSxDQUFDRCxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztFQUlsQjtFQUVBQyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNGLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BEO0FBSUo7QUFFQSwrREFBZUYsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vdmluZ09iamVjdC5qcz9iZDJkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBNb3ZpbmdPYmplY3R7XG4gICAgY29uc3RydWN0b3IocG9zLHZlbCl7XG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLnZlbCA9IHZlbDtcbiAgICAgICAgXG5cblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdK3RoaXMudmVsWzBdLHRoaXMucG9zWzFdXTtcbiAgICB9XG4gICAgXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3QiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJwb3MiLCJ2ZWwiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/movingObject.js\n");

/***/ }),

/***/ "./src/scripts/setting.js":
/*!********************************!*\
  !*** ./src/scripts/setting.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Setting {\n  constructor() {\n    this.image = './images/grass_15.png';\n  }\n  draw(ctx) {\n    const backgroundImage = new Image();\n    backgroundImage.src = this.image;\n    backgroundImage.onload = function () {\n      ctx.drawImage(backgroundImage, 0, 0);\n    };\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Setting);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZXR0aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQSxFQUFFO0lBQ1QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsdUJBQXVCO0VBQ3hDO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBQztJQUNMLE1BQU1DLGVBQWUsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNuQ0QsZUFBZSxDQUFDRSxHQUFHLEdBQUMsSUFBSSxDQUFDTCxLQUFLO0lBRTlCRyxlQUFlLENBQUNHLE1BQU0sR0FBRyxZQUFVO01BQy9CSixHQUFHLENBQUNLLFNBQVMsQ0FBQ0osZUFBZSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztFQUVEO0FBRVI7QUFPQSwrREFBZUwsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3NldHRpbmcuanM/NThmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFNldHRpbmcge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSAnLi9pbWFnZXMvZ3Jhc3NfMTUucG5nJztcbiAgICB9XG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2Uuc3JjPXRoaXMuaW1hZ2U7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltYWdlLDAsMCk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG4gICBcbn1cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmciXSwibmFtZXMiOlsiU2V0dGluZyIsImNvbnN0cnVjdG9yIiwiaW1hZ2UiLCJkcmF3IiwiY3R4IiwiYmFja2dyb3VuZEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/setting.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: function() { return /* binding */ randomVec; },\n/* harmony export */   scale: function() { return /* binding */ scale; }\n/* harmony export */ });\nfunction randomVec(length) {\n  const deg = 2 * Math.PI * Math.random();\n  return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\n// Scale the length of a vector by the given amount.\nfunction scale(vec, m) {\n  return [vec[0] * m, vec[1] * m];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsU0FBU0EsQ0FBQ0MsTUFBTSxFQUFFO0VBQ2hDLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsRUFBRSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0VBQ3ZDLE9BQU9DLEtBQUssQ0FBQyxDQUFDSCxJQUFJLENBQUNJLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDLEVBQUVDLElBQUksQ0FBQ0ssR0FBRyxDQUFDTixHQUFHLENBQUMsQ0FBQyxFQUFFRCxNQUFNLENBQUM7QUFDdEQ7O0FBRUE7QUFDTyxTQUFTSyxLQUFLQSxDQUFDRyxHQUFHLEVBQUVDLENBQUMsRUFBRTtFQUM5QixPQUFPLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQztBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3V0aWwuanM/Njk0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmFuZG9tVmVjKGxlbmd0aCkge1xuICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gIHJldHVybiBzY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG59XG5cbi8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZSh2ZWMsIG0pIHtcbnJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG59Il0sIm5hbWVzIjpbInJhbmRvbVZlYyIsImxlbmd0aCIsImRlZyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

/***/ }),

/***/ "./src/scripts/wordgenerator.js":
/*!**************************************!*\
  !*** ./src/scripts/wordgenerator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomWord: function() { return /* binding */ getRandomWord; }\n/* harmony export */ });\nconst randomWord = 'https://api.api-ninjas.com/v1/randomword';\nasync function getRandomWord() {\n  try {\n    const response = await fetch(\"https://api.api-ninjas.com/v1/randomword\", {\n      method: 'GET',\n      headers: {\n        'X-Api-Key': '/UnQYwpt2huxOYVHDrgpMQ==JFZmsclMm7gqLBGn'\n      },\n      contentType: 'application/json',\n      success: function (result) {\n        console.log(result);\n      }\n    });\n    if (response.ok) {\n      const result = await response.json();\n      const word = result.word;\n      console.log(word);\n    } else {\n      throw response;\n    }\n  } catch (error) {\n    console.error(error);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93b3JkZ2VuZXJhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUcsMENBQTBDO0FBR3RELGVBQWVDLGFBQWFBLENBQUEsRUFBRTtFQUNqQyxJQUFJO0lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQywwQ0FBMEMsRUFBQztNQUM1RUMsTUFBTSxFQUFFLEtBQUs7TUFDYkMsT0FBTyxFQUFFO1FBQUUsV0FBVyxFQUFFO01BQTBDLENBQUM7TUFDbkVDLFdBQVcsRUFBRSxrQkFBa0I7TUFDL0JDLE9BQU8sRUFBRSxTQUFBQSxDQUFTQyxNQUFNLEVBQUU7UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7TUFDdkI7SUFBQyxDQUFDLENBQUM7SUFDQyxJQUFJTixRQUFRLENBQUNTLEVBQUUsRUFBRTtNQUNmLE1BQU1ILE1BQU0sR0FBRyxNQUFNTixRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO01BQ3BDLE1BQU1DLElBQUksR0FBR0wsTUFBTSxDQUFDSyxJQUFJO01BQ3hCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDO0lBQ25CLENBQUMsTUFBTTtNQUNMLE1BQU1YLFFBQVE7SUFDaEI7RUFDRixDQUFDLENBQUMsT0FBT1ksS0FBSyxFQUFFO0lBQ2RMLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3dvcmRnZW5lcmF0b3IuanM/YTJmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kb21Xb3JkID0gJ2h0dHBzOi8vYXBpLmFwaS1uaW5qYXMuY29tL3YxL3JhbmRvbXdvcmQnXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJhbmRvbVdvcmQoKXtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuYXBpLW5pbmphcy5jb20vdjEvcmFuZG9td29yZFwiLHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6ICcvVW5RWXdwdDJodXhPWVZIRHJncE1RPT1KRlptc2NsTW03Z3FMQkduJ30sXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9fSlcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnN0IHdvcmQgPSByZXN1bHQud29yZDtcbiAgICAgICAgICBjb25zb2xlLmxvZyh3b3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4iXSwibmFtZXMiOlsicmFuZG9tV29yZCIsImdldFJhbmRvbVdvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJvayIsImpzb24iLCJ3b3JkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/wordgenerator.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;