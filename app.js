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

/***/ "./src/Industrias.ts":
/*!***************************!*\
  !*** ./src/Industrias.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class Industrias extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onInit(form) {
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Industrias);


/***/ }),

/***/ "./src/InteractiveForm.ts":
/*!********************************!*\
  !*** ./src/InteractiveForm.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class InteractiveForm {
    constructor() {
        this.sections = [];
    }
    get activeSection() {
        return this._activeSection;
    }
    set activeSection(section) {
        if (this.activeSection) {
            this.activeSection.onExit();
        }
        section.beforeInit(this);
        this._activeSection = section;
    }
    moveSection(name) {
        const found = this.sections.find(section => section.name === name);
        if (!found) {
            throw new Error(`Section ${name} not found`);
        }
        this.activeSection = found;
    }
    addSection(...sections) {
        this.sections.push(...sections);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (InteractiveForm);


/***/ }),

/***/ "./src/SearchMode.ts":
/*!***************************!*\
  !*** ./src/SearchMode.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class SearchMode extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onInit(form) {
        const buttons = document.querySelectorAll('[data-section-action]');
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                form.moveSection(button.dataset.sectionAction);
            });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (SearchMode);


/***/ }),

/***/ "./src/Section.ts":
/*!************************!*\
  !*** ./src/Section.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Section {
    constructor(sectionName) {
        this.name = sectionName;
        this.section = this.getSection(this.name);
    }
    getSection(name) {
        return document.querySelector(`[data-section=${name}]`);
    }
    beforeInit(form) {
        this.section.classList.add('active');
        this.onInit(form);
    }
    onExit() {
        this.section.classList.remove('active');
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Section);


/***/ }),

/***/ "./src/Servicos.ts":
/*!*************************!*\
  !*** ./src/Servicos.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class Servicos extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onInit(form) {
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Servicos);


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
/* harmony import */ var _SearchMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchMode */ "./src/SearchMode.ts");
/* harmony import */ var _Industrias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Industrias */ "./src/Industrias.ts");
/* harmony import */ var _Servicos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Servicos */ "./src/Servicos.ts");




const form = new _InteractiveForm__WEBPACK_IMPORTED_MODULE_0__["default"]();
const searchMode = new _SearchMode__WEBPACK_IMPORTED_MODULE_1__["default"]('modo-de-pesquisa');
const industrias = new _Industrias__WEBPACK_IMPORTED_MODULE_2__["default"]('industrias');
const servicos = new _Servicos__WEBPACK_IMPORTED_MODULE_3__["default"]('servicos');
form.addSection(searchMode, industrias, servicos);
form.moveSection(searchMode.name);


/***/ })

/******/ });
//# sourceMappingURL=app.js.map