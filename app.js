/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/InteractiveForm.ts":
/*!********************************!*\
  !*** ./src/InteractiveForm.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractiveForm; });
/* harmony import */ var _router_SectionsRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/SectionsRouter */ "./src/router/SectionsRouter.ts");

class InteractiveForm {
    constructor(options) {
        this._options = options;
        this._router = _router_SectionsRouter__WEBPACK_IMPORTED_MODULE_0__["default"].instance;
    }
    init() {
    }
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InteractiveForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InteractiveForm */ "./src/InteractiveForm.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");


const form = document.querySelector('.formulario-interativo');
const interactiveForm = new _InteractiveForm__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sections: [],
    target: form,
    initialKey: _utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].MODO_DE_PESQUISA
});
interactiveForm.init();


/***/ }),

/***/ "./src/router/SectionsRouter.ts":
/*!**************************************!*\
  !*** ./src/router/SectionsRouter.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionsRouter; });
class SectionsRouter {
    constructor() { this._sections = new Map(); }
    static get instance() {
        if (SectionsRouter._instance)
            return SectionsRouter._instance;
        SectionsRouter._instance = new SectionsRouter();
        return SectionsRouter._instance;
    }
    moveForward() { }
    moveBackwards() { }
    jumpTo(sectionName) {
        this._sections.get(sectionName).mount();
    }
    add(...sections) {
        sections.forEach(section => {
            this._sections.set(section.key, section);
        });
    }
}


/***/ }),

/***/ "./src/utils/enums.ts":
/*!****************************!*\
  !*** ./src/utils/enums.ts ***!
  \****************************/
/*! exports provided: Sections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sections", function() { return Sections; });
var Sections;
(function (Sections) {
    Sections["MODO_DE_PESQUISA"] = "modo-de-pesquisa";
    Sections["INDUSTRIAS"] = "industrias";
    Sections["SERVICOS"] = "servicos";
    Sections["RESIDUOS"] = "residuos";
    Sections["CALCULO_MONTANTE"] = "calculo-montante";
    Sections["INFO_PESSOAIS"] = "informacoes-pessoais";
    Sections["REVISE_PEDIDO"] = "revise-seu-pedido";
    Sections["PEDIDO_ENVIADO"] = "pedido-enviado";
})(Sections || (Sections = {}));


/***/ })

/******/ });
//# sourceMappingURL=app.js.map