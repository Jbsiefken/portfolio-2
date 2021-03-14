(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*|| Main colors */\n.yellow {\n  background-color: #ffcc00;\n}\n.magenta {\n  background-color: #ff0073;\n}\n.green {\n  background-color: #00ff00;\n}\n.blue {\n  background-color: #00e6e6;\n}\n/*|| An attempt at dealing with text colors */\n.yellow-text {\n  color: #ffcc00;\n}\n.yellow-text:visited, .yellow-text:link {\n  color: #ffcc00;\n}\n.magenta-text {\n  color: #ff0073;\n}\n.magenta-text:visited, .magenta-text:link {\n  color: #ff0073;\n}\n.green-text {\n  color: #00ff00;\n}\n.green-text:visited, .green-text:link {\n  color: #00ff00;\n}\n.blue-text {\n  color: #00e6e6;\n}\n.blue-text:visited, .blue-text:link {\n  color: #00e6e6;\n}\n.hover-white:hover {\n  color: white;\n}\n/*|| Mixins */\n/*|| Basic Elements */\nhtml {\n  scroll-behavior: smooth;\n  width: 100%;\n}\nbody {\n  padding-top: 50px;\n  padding-bottom: 20px;\n  background-color: #333333;\n  color: white;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 18px;\n  width: 100%;\n}\ninput {\n  width: 85%;\n}\ntextarea {\n  width: 85%;\n  overflow: auto;\n  resize: none;\n}\nh1 {\n  font-size: 50px;\n}\nh2 {\n  font-size: 30px;\n}\na {\n  transition: color 0.2s;\n}\na:link, a:visited {\n  text-decoration: none;\n}\na:hover {\n  color: white;\n  text-decoration: none;\n}\na:active {\n  color: white;\n  text-decoration: none;\n}\n/*|| Misc ID-ed elements */\n#top {\n  position: absolute;\n  top: 0;\n  width: 1px;\n  height: 1px;\n}\n/*|| CSS grid */\n.page {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  margin: auto;\n  max-width: 1000px;\n  border: black solid;\n  word-wrap: break-word;\n  position: relative;\n}\n.section {\n  padding: 30px 30px 30px 30px;\n}\n.top-left {\n  padding-top: 80px;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n.top-right {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n.bottom-left {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: -1;\n}\n.bottom-right {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 2;\n  grid-row-end: -1;\n}\n.row {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n.col {\n  grid-row-start: 1;\n  grid-row-end: -1;\n}\n.page-end {\n  grid-template-rows: 1fr;\n  height: 80vh;\n}\n.section-label {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-size: 30px;\n  width: 85%;\n  text-align: center;\n}\n.buffer-space {\n  padding-top: 100px;\n}\n/*|| Headings */\n.floater {\n  position: fixed;\n  top: 90vh;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.headspace {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.headspace-solid {\n  background-color: #333333;\n  height: 50px;\n}\n.headspace-fade {\n  background-image: linear-gradient(to bottom, #333333, #33333379, rgba(0, 0, 0, 0));\n}\n.heading {\n  font-size: 50px;\n  max-width: 1000px;\n  margin: auto;\n  position: relative;\n  z-index: 2;\n}\n.mobile-heading {\n  font-size: 40px;\n  display: none;\n}\n:is(.page-two) .mobile-heading {\n  position: absolute;\n}\n.subheading {\n  font-size: 40px;\n}\n/*|| Floating Menu */\n.float-menu {\n  position: fixed;\n  width: 110px;\n  top: 120px;\n  right: 50px;\n  z-index: 2;\n  line-height: 1.5;\n  background-color: rgba(0, 0, 0, 0.295);\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.295);\n  padding: 20px 5px 5px 10px;\n}\n.pill {\n  height: 20px;\n  width: 20px;\n  border-radius: 1000px;\n  position: relative;\n  transition: width 0.2s;\n  cursor: pointer;\n}\n.pill:hover,\n.pill-active {\n  width: 100%;\n  color: #333333;\n}\n.pill:hover .menu-link,\n.pill-active .menu-link {\n  color: #333333;\n}\n.menu-link {\n  position: relative;\n  left: 23px;\n  top: -3px;\n}\n/*|| project elements */\n.project-container {\n  display: inline-flex;\n  justify-content: space-evenly;\n}\n.thumbnail-container {\n  margin: 5px;\n  width: 230px;\n  height: auto;\n  text-align: center;\n  color: transparent;\n  transition: color 0.3s;\n  position: relative;\n}\n.thumbnail-container:hover {\n  color: white;\n}\n.project-thumbnail {\n  width: 100%;\n  background-color: black;\n  transition: opacity 0.3s;\n  z-index: 0;\n}\n.thumbnail-container:hover > .project-thumbnail {\n  opacity: 0.6;\n}\n.image-text {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.overlay {\n  background-color: #0808082f;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.project-card {\n  display: grid;\n  grid-template-columns: 50% 1fr;\n  grid-template-rows: auto 1fr;\n  position: fixed;\n  top: 140px;\n  bottom: 5px;\n  z-index: 11;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 80%;\n  width: 60%;\n  background-color: #333333;\n  padding: 10px;\n  overflow: auto;\n}\n.close {\n  position: absolute;\n  top: 5px;\n  right: 8px;\n  cursor: pointer;\n}\n.project-card-image {\n  margin: 0px 20px 0px 0px;\n  width: 95%;\n  height: auto;\n}\n.project-card-title {\n  align-self: end;\n}\n.project-description {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n/*|| Other objects */\n.email-form {\n  padding-top: 80px;\n}\n.footer {\n  position: fixed;\n  height: 200px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  opacity: 0.7;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.footer-yellow {\n  background-image: linear-gradient(-175deg, #333333, #333333, #ffcc00);\n}\n.footer-magenta {\n  background-image: linear-gradient(-175deg, #333333, #333333, #ff0073);\n}\n.footer-green {\n  background-image: linear-gradient(-175deg, #333333, #333333, #00ff00);\n}\n.footer-blue {\n  background-image: linear-gradient(-175deg, #333333, #333333, #00e6e6);\n}\n.circle {\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: relative;\n  top: 100px;\n  background-image: url('marspic.jpg');\n  z-index: 0;\n}\n.links {\n  display: flex;\n  width: 85%;\n  justify-content: space-evenly;\n}\n.top-menu-bar {\n  text-align: center;\n  font-size: 30px;\n  background-color: black;\n  color: white;\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 40px;\n  z-index: 9;\n}\n.top-menu {\n  visibility: hidden;\n  width: 100vw;\n  position: fixed;\n  top: 40px;\n  left: 0;\n  background-color: #0a0a0a;\n  color: white;\n  z-index: 9;\n  text-align: center;\n  line-height: 2;\n}\n/*|| FX classes */\n.invisible {\n  opacity: 0;\n}\n.visible {\n  opacity: 1;\n}\n.dissapearing {\n  transition: opacity 0.2s;\n}\n.color-changer {\n  transition: background-color 2s;\n}\n.not-displayed {\n  display: none;\n}\n/*|| Small screen layout */\n@media (max-width: 600px) {\n  .page {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto auto;\n    height: auto;\n  }\n\n  .top-left,\n.top-right,\n.bottom-left,\n.bottom-right,\n.row {\n    grid-column-start: 1;\n    grid-column-end: -1;\n    grid-row-start: auto;\n    grid-row-end: auto;\n  }\n\n  .project-card {\n    width: 90%;\n    grid-template-columns: auto;\n  }\n\n  .project-card-image {\n    width: 100%;\n    top: 50px;\n  }\n\n  .subheading {\n    font-size: 20px;\n  }\n\n  .heading,\n.headspace,\n.headspace-fade,\n.headspace-solid {\n    display: none;\n  }\n\n  .mobile-heading {\n    display: block;\n  }\n\n  .circle {\n    display: none;\n  }\n\n  .floater {\n    display: none;\n  }\n\n  .footer {\n    display: none;\n  }\n}\n@media (max-width: 800px) {\n  .page {\n    margin-right: auto;\n    width: 100%;\n    max-width: 95%;\n  }\n\n  .float-menu {\n    display: none;\n  }\n\n  .top-menu-bar {\n    display: block;\n  }\n\n  .top-menu {\n    visibility: visible;\n  }\n}\n@media (max-width: 1400px) {\n  .page {\n    margin-right: 200px;\n  }\n}\n@media (max-height: 600px) {\n  .page {\n    height: auto;\n  }\n\n  .footer {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\n/*|| Main colors */\n$yellow: #ffcc00;\n$magenta: #ff0073;\n$green: #00ff00;\n$blue: #00e6e6;\n\n.yellow {\n    background-color: $yellow;\n}\n\n.magenta {\n    background-color: $magenta;\n}\n\n.green {\n    background-color: $green;\n}\n\n.blue {\n    background-color: $blue;\n}\n\n/*|| An attempt at dealing with text colors */\n.yellow-text {\n    color: $yellow;\n}\n\n.yellow-text:visited, .yellow-text:link {\n    color: $yellow;\n}\n\n.magenta-text {\n    color: $magenta;\n}\n\n.magenta-text:visited, .magenta-text:link {\n    color: $magenta;\n}\n\n.green-text {\n    color: $green;\n}\n\n.green-text:visited, .green-text:link {\n    color: $green;\n}\n\n.blue-text {\n    color: $blue;\n}\n\n.blue-text:visited, .blue-text:link {\n    color: $blue;\n}\n\n.hover-white:hover {\n    color: white;\n}\n\n/*|| Mixins */\n@mixin centered() {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    transform: translateX(-50%);\n}\n\n@mixin transform($property) {\n    -webkit-transform: $property;\n    -ms-transform: $property;\n    transform: $property;\n}\n\n@mixin linearGradient($property, $property2, $property3) {\n    background-image: -webkit-linear-gradient($property, $property2, $property3);\n    background-image: -o-linear-gradient($property, $property2, $property3);\n    background-image: -moz-linear-gradient($property, $property2, $property3);\n    background-image: linear-gradient($property, $property2, $property3);\n}\n\n@mixin linearGradient2($property, $property2, $property3, $property4) {\n    background-image: -webkit-linear-gradient($property, $property2, $property3, $property4);\n    background-image: -o-linear-gradient($property, $property2, $property3, $property4);\n    background-image: -moz-linear-gradient($property, $property2, $property3, $property4);\n    background-image: linear-gradient($property, $property2, $property3, $property4);\n}\n\n/*|| Basic Elements */\nhtml {\n    scroll-behavior: smooth;\n    width: 100%;\n}\n\nbody{\n    padding-top: 50px;\n    padding-bottom: 20px;\n    background-color: #333333;\n    color: white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n    width: 100%;\n}\n\ninput {\n    width: 85%;\n}\n\ntextarea {\n    width: 85%;\n    overflow: auto;\n    resize: none;\n}\n\nh1 {\n    font-size: 50px;\n}\n\nh2 {\n    font-size: 30px;\n}\n\na {\n    transition: color .2s;\n}\n\na:link, a:visited {\n    text-decoration: none;\n}\n\na:hover {\n    color: white;\n    text-decoration: none;\n}\n\na:active {\n    color: white;\n    text-decoration: none;\n}\n\n/*|| Misc ID-ed elements */\n#top {\n    position: absolute;\n    top: 0;\n    width: 1px;\n    height: 1px;\n}\n\n/*|| CSS grid */\n.page {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin:auto;\n    max-width: 1000px;\n    border: black solid;\n    word-wrap: break-word;\n    position: relative;\n\n}\n\n.section{\n    padding: 30px 30px 30px 30px;\n}\n\n.top-left {\n    padding-top: 80px;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.top-right {\n    grid-column-start: 2;\n    grid-column-end:  -1;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.bottom-left {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end:  -1;\n}\n\n.bottom-right {\n    grid-column-start: 2;\n    grid-column-end: -1;\n    grid-row-start: 2;\n    grid-row-end: -1;\n}\n\n.row {\n    grid-column-start: 1;\n    grid-column-end: -1;\n}\n\n.col {\n    grid-row-start: 1;\n    grid-row-end: -1;\n}\n\n.page-end {\n    grid-template-rows: 1fr;\n    height: 80vh;\n}\n\n\n.section-label {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    font-size: 30px;\n    width: 85%;\n    text-align: center;\n}\n\n.buffer-space {\n    padding-top: 100px;\n}\n\n\n/*|| Headings */\n.floater {\n    position: fixed;\n    top: 90vh;\n    @include centered();\n}\n\n.headspace {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n}\n\n.headspace-solid {\n    background-color: #333333; \n    height: 50px;\n}\n\n.headspace-fade {\n    @include linearGradient2(to bottom, #333333, #33333379, rgba(0, 0, 0, 0));\n}\n\n.heading {\n    font-size: 50px;\n    max-width: 1000px;\n    margin: auto;\n    position: relative;\n    z-index: 2;\n}\n\n.mobile-heading {\n    font-size: 40px;\n    display: none;\n}\n\n:is(.page-two) .mobile-heading {\n    position: absolute;\n}\n\n.subheading {\n    font-size: 40px;\n}\n\n/*|| Floating Menu */\n.float-menu {\n    position: fixed;\n    width: 110px;\n    top: 120px;\n    right: 50px;\n    z-index: 2;\n    line-height: 1.5;\n    background-color: rgba(0, 0, 0, 0.295);\n    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.295);\n    padding: 20px 5px 5px 10px;\n}\n\n.pill {\n    height: 20px;\n    width: 20px;\n    border-radius: 1000px;\n    position: relative;\n    transition: width .2s;\n    cursor: pointer;\n}\n\n.pill:hover,\n.pill-active {\n    width: 100%;\n    color: #333333;\n}\n\n.pill:hover .menu-link,\n.pill-active .menu-link {\n    color: #333333;\n}\n\n.menu-link {\n    position: relative;\n    left: 23px;\n    top: -3px;\n}\n\n/*|| project elements */\n.project-container {\n    display: inline-flex;\n    justify-content: space-evenly;\n\n}\n\n.thumbnail-container {\n    margin: 5px;\n    width: 230px;\n    height: auto;    \n    text-align: center;\n    color: transparent;\n    transition: color .3s;\n    position: relative;\n}\n\n.thumbnail-container:hover {\n    color: white;\n}\n\n.project-thumbnail {\n    width: 100%;\n    background-color: black;\n    transition: opacity .3s;\n    z-index: 0;\n}\n\n.thumbnail-container:hover > .project-thumbnail {\n    opacity: .6;\n}\n\n.image-text {\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    @include transform(translateX(-50%))\n}\n\n.overlay {\n    background-color: #0808082f;\n    z-index: 10;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n.project-card {\n    display: grid;\n    grid-template-columns: 50% 1fr;\n    grid-template-rows: auto 1fr;\n    position: fixed;\n    top: 140px;\n    bottom: 5px;\n    z-index: 11;\n    @include centered();\n    max-width: 80%;\n    width: 60%;\n    background-color: #333333;\n    padding: 10px;\n    overflow: auto;\n}\n\n.close {\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n}\n\n.project-card-image {\n    margin: 0px 20px 0px 0px;\n    width: 95%;\n    height: auto;\n}\n\n.project-card-title {\n    align-self: end;\n}\n\n.project-description {\n    grid-column-start: 1;\n    grid-column-end: -1;\n}\n\n/*|| Other objects */\n.email-form {\n    padding-top: 80px;\n}\n\n.footer {\n    position: fixed;\n    height: 200px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    opacity: .7;\n    z-index: -1;\n    opacity: 0;\n    transition: opacity .3s;\n}\n\n.footer-yellow {\n    @include linearGradient2(-175deg, #333333, #333333, $yellow);\n}\n\n.footer-magenta {\n    @include linearGradient2(-175deg, #333333, #333333, $magenta);\n}\n\n.footer-green {\n    @include linearGradient2(-175deg, #333333, #333333, $green);\n}\n\n.footer-blue {\n    @include linearGradient2(-175deg, #333333, #333333, $blue);\n}\n\n.circle {\n    width: 400px;\n    height: 400px;\n    border-radius: 50%;\n    @include centered();\n    position: relative;\n    top: 100px;\n    background-image: url(\"assets/marspic.jpg\");\n    z-index: 0;\n}\n\n.links {\n    display: flex;\n    width: 85%;\n    justify-content: space-evenly;\n}\n\n.top-menu-bar {\n    text-align: center;\n    font-size: 30px;\n    background-color: black;\n    color:white;\n    display:none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 40px;\n    z-index: 9;\n}\n\n.top-menu {\n    visibility: hidden;\n    width: 100vw;\n    position: fixed;\n    top: 40px;\n    left: 0;\n    background-color: rgb(10, 10, 10);\n    color: white;\n    z-index: 9;\n    text-align: center;\n    line-height: 2;\n}\n\n/*|| FX classes */\n.invisible {\n    opacity: 0;\n}\n\n.visible {\n    opacity: 1;\n}\n\n.dissapearing {\n    transition: opacity .2s;\n}\n\n.color-changer {\n    transition: background-color 2s;\n}\n\n.not-displayed {\n    display: none;\n}\n\n\n/*|| Small screen layout */\n@media (max-width: 600px){\n    .page {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto auto auto;\n        height: auto;\n    }\n\n    .top-left, \n    .top-right,\n    .bottom-left,\n    .bottom-right,\n    .row {\n        grid-column-start: 1;\n        grid-column-end: -1;\n        grid-row-start: auto;\n        grid-row-end: auto;\n    }\n\n    .project-card {\n        width: 90%;\n        grid-template-columns: auto;\n    }\n\n    .project-card-image {\n        width: 100%;\n        top: 50px;\n    }\n\n    .subheading {\n        font-size: 20px;\n    }\n\n    .heading,\n    .headspace,\n    .headspace-fade,\n    .headspace-solid {\n        display: none;\n    }\n\n    .mobile-heading {\n        display: block;\n    }\n\n    .circle {\n        display: none;\n    }\n\n    .floater {\n        display: none;\n    }\n\n    .footer {\n        display: none;\n    }\n\n}\n\n@media (max-width: 800px){\n    .page {\n        margin-right: auto;\n        width: 100%;\n        max-width: 95%;\n    }    \n    \n    .float-menu {\n        display: none;\n    }\n\n    .top-menu-bar {\n        display: block;\n    }\n\n    .top-menu {\n        visibility: visible;\n    }\n}\n\n\n@media (max-width: 1400px){\n    .page {\n        margin-right: 200px;\n    }\n}\n\n@media (max-height: 600px){\n    .page{\n        height: auto;\n    }\n\n    .footer {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Josh\source\repos\portfolio-2\portfolio-two\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map