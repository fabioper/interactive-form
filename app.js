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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_FormController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/FormController */ "./src/form/FormController.ts");
/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/Form */ "./src/form/Form.ts");
/* harmony import */ var _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/RegularSection */ "./src/sections/RegularSection.ts");
/* harmony import */ var _sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/SectionsEnum */ "./src/sections/SectionsEnum.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.ts");





(async () => {
    const controller = new _form_FormController__WEBPACK_IMPORTED_MODULE_0__["default"](new _form_Form__WEBPACK_IMPORTED_MODULE_1__["default"](), await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["fetchData"])());
    const sectionsController = controller.sectionsController;
    sectionsController.appendSections(new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].MODO_DE_PESQUISA), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].INDUSTRIAS), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].SERVICOS), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].RESIDUOS), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].CALCULO_MONTANTE), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].INFO_PESSOAIS), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].REVISE_PEDIDO), new _sections_RegularSection__WEBPACK_IMPORTED_MODULE_2__["default"](_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].PEDIDO_ENVIADO));
    sectionsController.moveTo(_sections_SectionsEnum__WEBPACK_IMPORTED_MODULE_3__["section"].MODO_DE_PESQUISA);
})();


/***/ }),

/***/ "./src/form/Form.ts":
/*!**************************!*\
  !*** ./src/form/Form.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
    constructor() {
        console.log('Creating [Form]: constructor()');
        this.formState = new FormData();
    }
}


/***/ }),

/***/ "./src/form/FormController.ts":
/*!************************************!*\
  !*** ./src/form/FormController.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormController; });
/* harmony import */ var _sections_SectionsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/SectionsController */ "./src/sections/SectionsController.ts");

class FormController {
    constructor(initialForm, data) {
        console.log('Creating [FormController]: constructor()');
        this.sectionsController = new _sections_SectionsController__WEBPACK_IMPORTED_MODULE_0__["default"](this, data);
        this.setActive(initialForm);
    }
    setActive(form) {
        this.formState = form.formState;
    }
}


/***/ }),

/***/ "./src/sections/RegularSection.ts":
/*!****************************************!*\
  !*** ./src/sections/RegularSection.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegularSection; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/sections/Section.ts");

class RegularSection extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/sections/Section.ts":
/*!*********************************!*\
  !*** ./src/sections/Section.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
class Section {
    constructor(name) {
        console.log(`Creating [Section]: constructor() -> ${name}`);
        this.name = name;
        this.rootElement = document.querySelector(`[data-section=${this.name}]`);
    }
    query(selector) {
        return this.rootElement.querySelector(selector);
    }
    queryAll(selector) {
        return this.rootElement.querySelectorAll(selector);
    }
    mount() {
        console.log(`\tRunning: mount() -> ${this.name}`);
        this.rootElement.classList.add('active');
        this.onMount();
    }
    unmount() {
        console.log(`\tRunning: unmount() -> ${this.name}`);
        this.rootElement.classList.remove('active');
        this.onUnmount();
    }
    onMount() {
        console.log(`\tRunning: onMount() -> ${this.name}`);
    }
    onUnmount() {
        console.log(`\tRunning: onUnmount() -> ${this.name}`);
    }
    setController(controller) {
        this.controller = controller;
    }
}


/***/ }),

/***/ "./src/sections/SectionsController.ts":
/*!********************************************!*\
  !*** ./src/sections/SectionsController.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionsController; });
class SectionsController {
    constructor(form, data) {
        this.sections = new Map();
        console.log('Creating [SectionsController]: constructor()');
        this.state = form.formState;
        this.setData(data);
    }
    set current(section) {
        console.log(`\tRunning: current() setter -> ${section.name}`);
        this._current = section;
        this._current.mount();
    }
    set previous(section) {
        var _a;
        this._previous = section;
        (_a = this._previous) === null || _a === void 0 ? void 0 : _a.unmount();
    }
    moveTo(sectionName) {
        console.log(`\tRunning: moveTo() -> ${sectionName}`);
        this.previous = this._current;
        this.current = this.sections.get(sectionName);
    }
    appendSections(...sections) {
        console.log(`\tRunning: appendSections() -> size(${sections.length})`);
        sections.forEach(section => {
            section.setController(this);
            this.sections.set(section.name, section);
        });
    }
    setData(data) {
        this.data = data;
    }
}


/***/ }),

/***/ "./src/sections/SectionsEnum.ts":
/*!**************************************!*\
  !*** ./src/sections/SectionsEnum.ts ***!
  \**************************************/
/*! exports provided: section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "section", function() { return section; });
var section;
(function (section) {
    section["MODO_DE_PESQUISA"] = "modo-de-pesquisa";
    section["INDUSTRIAS"] = "industrias";
    section["SERVICOS"] = "servicos";
    section["RESIDUOS"] = "residuos";
    section["CALCULO_MONTANTE"] = "calculo-montante";
    section["INFO_PESSOAIS"] = "informacoes-pessoais";
    section["REVISE_PEDIDO"] = "revise-seu-pedido";
    section["PEDIDO_ENVIADO"] = "pedido-enviado";
})(section || (section = {}));


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: addSlugProps, slug, extractIndustriesFrom, fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSlugProps", function() { return addSlugProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIndustriesFrom", function() { return extractIndustriesFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
const addSlugProps = (residuo) => {
    residuo.slug = slug(residuo.nome);
    residuo.industrias = residuo.industrias.reduce((acc, curr) => {
        acc[slug(curr)] = curr;
        return acc;
    }, {});
    return residuo;
};
function slug(text) {
    let str = text.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    const from = 'ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return str;
}
const extractIndustriesFrom = (residuos) => {
    const extractMap = (acc, curr) => {
        Object.keys(curr).forEach(key => (acc.set(key, curr[key])));
        return acc;
    };
    return residuos.map(residuo => residuo.industrias)
        .reduce(extractMap, new Map());
};
const endpoint = 'http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45';
const fetchData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    const result = data.acf.card_residuo;
    return result.map(addSlugProps);
};


/***/ })

/******/ });
//# sourceMappingURL=app.js.map