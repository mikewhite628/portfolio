webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,400;0,700;1,100;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #eeeeee;\n  font-family: \"Barlow Condensed\";\n}\n\n.container {\n  display: grid;\n}\n\n.nav {\n  width: 100%;\n  list-style: none;\n  display: flex;\n}\n.nav li {\n  margin: 10px;\n  padding-right: 10px;\n  border-right: 1px solid #08d9d6;\n  font-size: 20px;\n}\n.nav li a {\n  text-decoration: none;\n}\n\n.landing {\n  grid-row: 1/2;\n  margin-left: -10px;\n  padding-right: 10px;\n  margin-top: -10px;\n  height: 100vh;\n  width: 100%;\n  min-width: 500px;\n  text-align: center;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  justify-content: center;\n  font-size: 30px;\n}\n\n.greeting {\n  grid-column: 2/2;\n  grid-row: 1/3;\n  align-self: center;\n}\n\n.desk {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n\n.desk-pic {\n  height: 200px;\n  width: 400px;\n}\n\n.me {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  align-self: center;\n}\n\n.me-pic {\n  border-radius: 50%;\n  height: 150px;\n  width: 150px;\n  box-shadow: 1px 1px 3px;\n}\n\n.about {\n  grid-row: 2/3;\n  display: grid;\n  height: 100vh;\n  width: 70%;\n  grid-template-rows: repeat(auto-fill);\n  justify-self: center;\n  box-shadow-left: 1px 1px 3px;\n  padding-bottom: 200px;\n}\n.about ul {\n  list-style-type: none;\n}\n.about ul li {\n  font-size: 20px;\n}\n\n.about-title {\n  grid-row: 1/2;\n}\n\n.about-text {\n  grid-row: 2/3;\n  width: 100%;\n}\n\n.social-icon {\n  height: 60px;\n  width: 60px;\n}\n\nsocial-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.skills {\n  grid-row: 3/4;\n  width: 100%;\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n}\n\n.skill-bar {\n  height: 20px;\n  background-color: #cccccc;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  padding: 10px;\n}\n\n.meter {\n  border: none;\n  height: 20px;\n  background-color: #ff2e63;\n  color: #eeeeee;\n  border-radius: 0px 10px 10px 0px;\n  margin-left: -8px;\n}\n\n.js-meter {\n  animation: jsFill 3.5s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.html-meter {\n  animation: htmlFill 4s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.css-meter {\n  animation: cssFill 4.5s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.sass-meter {\n  animation: sassFill 5s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.react-meter {\n  animation: reactFill 5.5s ease-in-out;\n  animation-fill-mode: both;\n}\n\n@keyframes jsFill {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 65%;\n  }\n}\n@keyframes htmlFill {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 70%;\n  }\n}\n@keyframes cssFill {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 75%;\n  }\n}\n@keyframes sassFill {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 70%;\n  }\n}\n@keyframes reactFill {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 55%;\n  }\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  border: 2px solid #252a34;\n  box-shadow: 1px 1px 3px;\n  margin-top: -28px;\n  margin-right: -20px;\n  float: right;\n}\n\n.js-icon {\n  animation: jsPulse;\n  animation-duration: 1s;\n  animation-delay: 3s;\n}\n\n.html-icon {\n  animation: htmlPulse;\n  animation-duration: 1s;\n  animation-delay: 3.5s;\n}\n\n.css-icon {\n  animation: cssPulse;\n  animation-duration: 1s;\n  animation-delay: 4s;\n}\n\n.sass-icon {\n  animation: sassPulse;\n  animation-duration: 1s;\n  animation-delay: 4.5s;\n}\n\n.react-icon {\n  animation: reactPulse;\n  animation-duration: 1s;\n  animation-delay: 5s;\n}\n\n@keyframes jsPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes htmlPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes cssPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes sassPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes reactPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.big-icon {\n  height: 40px;\n  width: 40px;\n  border: 3px solid #252a34;\n  box-shadow: 3px 3px 5px;\n  z-index: 10;\n}\n\n.lofi-icon {\n  height: 50px;\n  width: 50px;\n  margin-left: 15px;\n}\n\n.figma-icon {\n  height: 50px;\n  width: 50px;\n}\n\n.tools {\n  grid-column: 1/3;\n  grid-row: 4/5;\n  display: grid;\n  width: 400px;\n  height: 150px;\n  background-color: #252a34;\n  grid-template-columns: 12% 12% 12% 7% 12% 12% 7% 12%;\n  grid-template-rows: 30% 30% 30%;\n  border: 5px solid #cccccc;\n  padding: 10px;\n  padding-top: 30px;\n  padding-left: 50px;\n  padding-right: 50px;\n  box-shadow: 3px 3px 10px;\n  align-items: center;\n  margin-top: 50px;\n}\n\n.tool-title {\n  color: #eeeeee;\n  grid-column: 5/8;\n  grid-row: 1/2;\n}\n\n.git-icon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.npm-icon {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.node-icon {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n\n.linux-icon {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.webpack-icon {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.vsc-icon {\n  grid-column: 5/6;\n  grid-row: 3/4;\n}\n\n.ps-icon {\n  grid-column: 6/7;\n  grid-row: 3/4;\n}\n\n.figma-icon {\n  grid-column: 8/9;\n  grid-row: 2/3;\n}\n\n.lofi-icon {\n  grid-column: 9/10;\n  grid-row: 2/3;\n}\n\n.dpad-x {\n  width: 150px;\n  height: 57px;\n  margin-left: -2px;\n  background-color: #cccccc;\n  grid-row: 2/3;\n  grid-column: 1/4;\n  border-radius: 10px;\n}\n\n.dpad-y {\n  width: 57px;\n  height: 150px;\n  margin-left: -4px;\n  background-color: #cccccc;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  border-radius: 10px;\n}\n\n.selectors {\n  width: 110px;\n  height: 57px;\n  margin-left: -8px;\n  background-color: #cccccc;\n  grid-column: 5/7;\n  grid-row: 3/4;\n  border-radius: 15px;\n}\n\n.buttons {\n  height: 65px;\n  width: 140px;\n  margin-left: -14px;\n  background-color: #cccccc;\n  grid-column: 8/10;\n  grid-row: 2/3;\n  border: 5px solid #08d9d6;\n  border-radius: 25px;\n}\n\n.projects {\n  grid-row: 3/4;\n  display: grid;\n  height: 100%;\n  width: 70%;\n  justify-self: center;\n  grid-template-rows: 100px 0.2fr 0.2fr 0.2fr;\n  justify-items: left;\n}\n\n.project-image {\n  height: 250px;\n  width: 450px;\n  border: 5px solid #252a34;\n}\n\n/*# sourceMappingURL=App.css.map */\n", "",{"version":3,"sources":["webpack://src/style.sass","webpack://src/App.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.3666472f44316dcab391.hot-update.js.map