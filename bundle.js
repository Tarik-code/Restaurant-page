/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/imgs/main.jpg */ "./src/imgs/main.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n}\n\nbody {\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n#page {\n    height: 100%;\n}\n/* * */\n\n\n\n/* Header */\nheader {\n    background-color: rgb(0, 0, 0);\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nheader ul {\n    display: flex;\n    gap: 10vw;\n    list-style: none;\n}\nheader a {\n    color: #AD7C27;\n    text-decoration: none;\n    letter-spacing: 3px;\n}\nheader a:hover {\n    color: white;\n}\n/* Header */\n\n\n\n/* Main Page */\n.page.div-holder {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center center;\n    background-size: cover;\n}\n.main-page.logo-holder {\n    height: 30vh;\n    width: 40vw;\n    background-color: rgba(0, 0, 0, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.main-page.logo {\n    height: 29vh;\n}\n/* Main Page */\n\n\n\n/* Menu */\n.page.div-menu{\n    color: #F2F4F3;\n    display: flex;\n    height: 100vh;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background-color: #070707;\n}\n.p-menu{\n    color: #E6E8E6;\n}\n.h1-menu{\n    margin-top: 5vh;\n}\n.itemTitle{\n    color: white;\n    margin: 25px;\n    display: flex;\n    justify-content: center;\n}\n.itemDisc{\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    width: 300px;\n    text-align: center;\n}\n.hr-menu{\n    border: .5px solid #AD7C27;\n    width: 150px;\n    margin: 20px auto;\n}\n.hr-menu1{\n    border: .5px solid #AD7C27;\n    width: 650px;\n    margin: 24px auto;\n}\n/* Menu */\n\n\n\n/* Contact */\n.contact{\n    background-color: #070707;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n}\n.contacth2{\n    color: #AD7C27;\n    font-weight: 100;\n    margin-bottom: 10px;\n}\n.emails{\n    color: white;\n}\n.addressTitle{\n    margin-top: 50px;\n    margin-bottom: 10px;\n    color: #AD7C27;\n}\n.address{\n    color: white;\n}\n.hoursH4{\n    margin-top: 50px;\n    margin-bottom: 10px;\n    color: #AD7C27;\n}\n.hoursDetails{\n    color: white;\n}\n/* Contact */\n\n\n\n/* Reservation */\n.reserve{\n    display: flex;\n    background-color: #070707;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.comingSoon{\n    color: #AD7C27;\n}\n/* Reservation */\n\n\n\n/* ScrollBar */\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n}\n/* Track */\n::-webkit-scrollbar-track {\nbackground: #070707; \n}\n/* Handle */\n::-webkit-scrollbar-thumb {\nbackground: #AD7C27; \nborder-radius: 25px;\n}\n/* ScrollBar */", "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA,MAAM;AACN;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;AACA,MAAM;;;;AAIN,WAAW;AACX;IACI,8BAA8B;IAC9B,WAAW;IACX,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,WAAW;;;;AAIX,cAAc;AACd;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yDAAyC;IACzC,kCAAkC;IAClC,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,cAAc;;;;AAId,SAAS;AACT;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,0BAA0B;IAC1B,YAAY;IACZ,iBAAiB;AACrB;AACA,SAAS;;;;AAIT,YAAY;AACZ;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA,YAAY;;;;AAIZ,gBAAgB;AAChB;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA,gBAAgB;;;;AAIhB,cAAc;AACd,UAAU;AACV;IACI,UAAU;AACd;AACA,UAAU;AACV;AACA,mBAAmB;AACnB;AACA,WAAW;AACX;AACA,mBAAmB;AACnB,mBAAmB;AACnB;AACA,cAAc","sourcesContent":["/* * */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n}\n\nbody {\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n#page {\n    height: 100%;\n}\n/* * */\n\n\n\n/* Header */\nheader {\n    background-color: rgb(0, 0, 0);\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nheader ul {\n    display: flex;\n    gap: 10vw;\n    list-style: none;\n}\nheader a {\n    color: #AD7C27;\n    text-decoration: none;\n    letter-spacing: 3px;\n}\nheader a:hover {\n    color: white;\n}\n/* Header */\n\n\n\n/* Main Page */\n.page.div-holder {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(/src/imgs/main.jpg);\n    background-position: center center;\n    background-size: cover;\n}\n.main-page.logo-holder {\n    height: 30vh;\n    width: 40vw;\n    background-color: rgba(0, 0, 0, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.main-page.logo {\n    height: 29vh;\n}\n/* Main Page */\n\n\n\n/* Menu */\n.page.div-menu{\n    color: #F2F4F3;\n    display: flex;\n    height: 100vh;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background-color: #070707;\n}\n.p-menu{\n    color: #E6E8E6;\n}\n.h1-menu{\n    margin-top: 5vh;\n}\n.itemTitle{\n    color: white;\n    margin: 25px;\n    display: flex;\n    justify-content: center;\n}\n.itemDisc{\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    width: 300px;\n    text-align: center;\n}\n.hr-menu{\n    border: .5px solid #AD7C27;\n    width: 150px;\n    margin: 20px auto;\n}\n.hr-menu1{\n    border: .5px solid #AD7C27;\n    width: 650px;\n    margin: 24px auto;\n}\n/* Menu */\n\n\n\n/* Contact */\n.contact{\n    background-color: #070707;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n}\n.contacth2{\n    color: #AD7C27;\n    font-weight: 100;\n    margin-bottom: 10px;\n}\n.emails{\n    color: white;\n}\n.addressTitle{\n    margin-top: 50px;\n    margin-bottom: 10px;\n    color: #AD7C27;\n}\n.address{\n    color: white;\n}\n.hoursH4{\n    margin-top: 50px;\n    margin-bottom: 10px;\n    color: #AD7C27;\n}\n.hoursDetails{\n    color: white;\n}\n/* Contact */\n\n\n\n/* Reservation */\n.reserve{\n    display: flex;\n    background-color: #070707;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.comingSoon{\n    color: #AD7C27;\n}\n/* Reservation */\n\n\n\n/* ScrollBar */\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n}\n/* Track */\n::-webkit-scrollbar-track {\nbackground: #070707; \n}\n/* Handle */\n::-webkit-scrollbar-thumb {\nbackground: #AD7C27; \nborder-radius: 25px;\n}\n/* ScrollBar */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact_page": () => (/* binding */ contact_page)
/* harmony export */ });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./src/pages/create.js");



const contact_page = () => {
    const contactPage = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "contact", "div-holder")
    page.appendChild(contactPage)

    const contactH2 = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "contacth2", "contacth2")
    contactH2.innerText = "Contact La Bonlie"
    contactPage.appendChild(contactH2)

    const emailsDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "emailsDiv", "emailsDiv")
    contactPage.appendChild(emailsDiv)
    const emails = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "emails", "emails")
    emailsDiv.appendChild(emails)
    emails.innerText = `For general inquiries, please contact example@labonlie.com 
    For all press or media inquiries, please email example@labonlie.com
    Phone: (213) 123-4567`

    const addressDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "addressDiv", "addressDiv")
    contactPage.appendChild(addressDiv)
    const addressTitle = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", "addressTitle", "addressTitle")
    addressDiv.appendChild(addressTitle)
    addressTitle.innerText = "Address"

    const address = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "address", "address")
    addressDiv.appendChild(address)
    address.innerText = `123 Wilshire Blvd
    Los Angeles, CA 90017`

    const hoursDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "hoursDiv", "hoursDiv")
    contactPage.appendChild(hoursDiv)

    const hoursH4 = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", "hoursH4", "hoursH4")
    hoursDiv.appendChild(hoursH4)
    hoursH4.innerText = "HOURS OF OPERATION"

    const hoursDetails = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "hoursDetails", "hoursDetails")
    contactPage.appendChild(hoursDetails)
    hoursDetails.innerHTML = `<b>Dinner</b><br>
    Sunday - Thursday | 5:00pm-9:30pm <br>
    Friday - Saturday | 5:00pm-10:00pm <br>
    <b>Happy Hour</b><br>
    Monday - Friday | 5:00pm- 6:00pm<br>`
}

/***/ }),

/***/ "./src/pages/create.js":
/*!*****************************!*\
  !*** ./src/pages/create.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });


function createElement(type, pageClass, secondClass) {
    const el = document.createElement(type)
    el.classList.add(pageClass, secondClass)
    return el;
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home_page": () => (/* binding */ home_page)
/* harmony export */ });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./src/pages/create.js");
/* harmony import */ var _src_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/imgs/logo.svg */ "./src/imgs/logo.svg");





const home_page = () => {
    const mainPageDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page", "div-holder")
    page.appendChild(mainPageDiv)

    const logoDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-page", "logo-holder")
    mainPageDiv.appendChild(logoDiv)

    const logoImg = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "main-page", "logo")
    logoDiv.appendChild(logoImg)
    logoImg.setAttribute("src", _src_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
}

/***/ }),

/***/ "./src/pages/load.js":
/*!***************************!*\
  !*** ./src/pages/load.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./src/pages/create.js");
/* harmony import */ var _src_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/imgs/logo.svg */ "./src/imgs/logo.svg");




const load = () => {
    const headerAll = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", "all-page", "header")
    content.appendChild(headerAll)

    const ul = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", "ul", "header")
    headerAll.appendChild(ul)

    var text = ["Home", "Menu", "Contact", "Reservation"];
    for(var i = 0; i < text.length; i += 1) {
        const li = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", "li", "header")
        ul.appendChild(li)
        const a = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "nav_bar", text[i])
        a.href = "#"
        li.appendChild(a)
        a.innerText = text[i];
    }

    const page = document.createElement('div')
    page.id = "page"
    content.appendChild(page)


    const mainPageDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page", "div-holder")
    page.appendChild(mainPageDiv)

    const logoDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-page", "logo-holder")
    mainPageDiv.appendChild(logoDiv)

    const logoImg = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "main-page", "logo")
    logoDiv.appendChild(logoImg)
    logoImg.setAttribute("src", _src_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
}

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu_page": () => (/* binding */ menu_page)
/* harmony export */ });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./src/pages/create.js");



(0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)()


const menuDiv = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page", "div-menu")
const menu_page = () => {
    menuDiv.innerHTML = ""
    page.appendChild(menuDiv)

    const h1Menu = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", "menu-page", "h1-menu")
    h1Menu.innerText = "Menu"
    menuDiv.appendChild(h1Menu)

    const hrMenu1 = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", "menu-page", "hr-menu1")
    menuDiv.appendChild(hrMenu1)

    const text = ["item1", "item2", "item3", "item4", "item5", "item6"];
    const itemName = ["Insalata", "Polipo", "Risotto", "Caramelle", "Agnello", "Dentice"]
    const itemDisc=[`seasonal greens, watermelon radish, green strawberries candied almonds, pecorino toscano, citrus vinaigrette`,

                    `octopus a la piastra, chickpea panisse, fennel gremolata`,

                    `riso acquerello, mascarpone, leeks, scamorza, shallots morel mushrooms`,

                    `ricotta di bufala ravioli, butter, mint pea purée`,

                    `saddle of lamb, white & green asparagus, rhubarb lamb jus`,

                    `pan-seared red snapper, fregola, pine nut, basil pesto smoked roe`]

    for(let i = 0; i < text.length && itemName.length && itemDisc.length; i += 1) {
        const itemHolder = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "item-holder", "item-holder")
        menuDiv.appendChild(itemHolder)
    
        const h4Menu = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", "itemTitle", text[i])
        h4Menu.innerText = `${itemName[i]}`

        itemHolder.appendChild(h4Menu)

        const pMenu = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "itemDisc", text[i])

        pMenu.innerText = itemDisc[i]
        itemHolder.appendChild(pMenu)

        const hrMenu = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", "menu-page", "hr-menu")
        itemHolder.appendChild(hrMenu)
    }

}


/***/ }),

/***/ "./src/pages/reservation.js":
/*!**********************************!*\
  !*** ./src/pages/reservation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reservation_page": () => (/* binding */ reservation_page)
/* harmony export */ });
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./src/pages/create.js");
/* harmony import */ var _src_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/imgs/logo.svg */ "./src/imgs/logo.svg");




const reservation_page = () => {
    const reservePage = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "reserve", "div-holder")
    page.appendChild(reservePage)

    const logoImg = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "main-page", "logo")
    reservePage.appendChild(logoImg)
    logoImg.setAttribute("src", _src_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__);

    const comingSoon = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", "comingSoon", "comingSoon")
    comingSoon.innerText = "Coming soon"
    reservePage.appendChild(comingSoon)
}

/***/ }),

/***/ "./src/imgs/logo.svg":
/*!***************************!*\
  !*** ./src/imgs/logo.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/imgs/main.jpg":
/*!***************************!*\
  !*** ./src/imgs/main.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _pages_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/load */ "./src/pages/load.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");
/* harmony import */ var _pages_reservation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/reservation.js */ "./src/pages/reservation.js");


//Imports






//Variables
const content = document.getElementById("content")
const navBar = document.getElementsByClassName("li header")

//Fresh page after page selection
const newPage = () => {
    const page = document.createElement('div')
    page.id = "page"
    content.appendChild(page)
}

//Page load 
window.addEventListener('load', function(){
    ;(0,_pages_load__WEBPACK_IMPORTED_MODULE_1__.load)()
})

//Nav bar menu selections
window.onload = function(){
        //Home Page
    navBar[0].addEventListener("click", function(){
        page.remove()
        newPage()
        ;(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_2__.home_page)()
    }),
        //Menu Page
    navBar[1].addEventListener("click", function(){
        page.remove()
        newPage()
        ;(0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu_page)()
    }),
        //Contact Page
    navBar[2].addEventListener("click", function(){
        page.remove()
        newPage()
        ;(0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact_page)()
    }),
        //Reservation Page
    navBar[3].addEventListener("click", function(){
        page.remove()
        newPage()
        ;(0,_pages_reservation_js__WEBPACK_IMPORTED_MODULE_5__.reservation_page)()
    })
}


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map