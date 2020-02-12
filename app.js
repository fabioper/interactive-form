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

/***/ "./src/CalculoMontante.ts":
/*!********************************!*\
  !*** ./src/CalculoMontante.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class CalculoMontante extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ __webpack_exports__["default"] = (CalculoMontante);


/***/ }),

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
        super.onInit(form);
        this.onclick(this.buttons, button => {
            form.state.setState({ industria: button.dataset.stateIndustria });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Industrias);


/***/ }),

/***/ "./src/InformacoesPessoais.ts":
/*!************************************!*\
  !*** ./src/InformacoesPessoais.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class InformacoesPessoais extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ __webpack_exports__["default"] = (InformacoesPessoais);


/***/ }),

/***/ "./src/InteractiveForm.ts":
/*!********************************!*\
  !*** ./src/InteractiveForm.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/StateManager.ts");

class InteractiveForm {
    constructor() {
        this.sections = [];
        this.state = new _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.state.addListener(this);
    }
    get activeSection() {
        return this._activeSection;
    }
    set activeSection(section) {
        this.moveActiveSectionToPrevious();
        this._activeSection = section;
    }
    set previousSection(section) {
        this._previousSection = section;
    }
    moveSection(name) {
        const found = this.findSectionBy(name);
        this.activeSection = found;
        found.onInit(this);
    }
    addSection(...sections) {
        this.sections.push(...sections);
    }
    update(state) {
        this.activeSection.onUpdate(state);
    }
    findSectionBy(name) {
        const section = this.sections.find(section => section.name === name);
        if (!section) {
            throw new Error(`Section ${name} not found`);
        }
        return section;
    }
    moveActiveSectionToPrevious() {
        if (this.activeSection) {
            this.previousSection = this.activeSection;
            this._previousSection.onExit();
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (InteractiveForm);


/***/ }),

/***/ "./src/Residuos.ts":
/*!*************************!*\
  !*** ./src/Residuos.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class Residuos extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onInit(form) {
        super.onInit(form);
        this.onclick(this.buttons, button => {
            form.state.setState({ residuo: button.dataset.stateResiduo });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Residuos);


/***/ }),

/***/ "./src/Revisao.ts":
/*!************************!*\
  !*** ./src/Revisao.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class Revisao extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
/* harmony default export */ __webpack_exports__["default"] = (Revisao);


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
        super.onInit(form);
        this.onclick(this.buttons, button => {
            form.state.setState({ modo: button.dataset.stateModo });
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
        this.section = Section.find(this.name);
    }
    static find(name) {
        return document.querySelector(`[data-section=${name}]`);
    }
    onInit(form) {
        this.section.classList.add('active');
        this.buttons = this.getActionButtons();
        this.addActionEvents(form);
    }
    addActionEvents(form) {
        this.onclick(this.buttons, button => {
            form.moveSection(button.dataset.sectionAction);
        });
    }
    onclick(elements, callback) {
        elements.forEach(el => {
            el.addEventListener('click', event => {
                event.preventDefault();
                callback(el);
            });
        });
    }
    getActionButtons() {
        return this.section.querySelectorAll('[data-section-action]');
    }
    onUpdate(state) {
        console.log(state);
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
        super.onInit(form);
        this.onclick(this.buttons, button => {
            form.state.setState({ servico: button.dataset.stateServico });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Servicos);


/***/ }),

/***/ "./src/StateManager.ts":
/*!*****************************!*\
  !*** ./src/StateManager.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");

class StateManager {
    constructor() {
        this.listeners = [];
        this.state = {
            modo: '',
            industria: '',
            servico: '',
            residuo: null,
            dados: []
        };
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getResiduos"])('http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45')
            .then(dados => this.setState({ dados }));
    }
    setState(values) {
        if (values.residuo) {
            values.residuo = this.state.dados.find(residuo => residuo.slug === values.residuo);
        }
        this.state = { ...this.state, ...values };
        this.notifyListeners();
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    notifyListeners() {
        this.listeners.forEach(listener => listener.update(this.state));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (StateManager);


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
/* harmony import */ var _Residuos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Residuos */ "./src/Residuos.ts");
/* harmony import */ var _CalculoMontante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CalculoMontante */ "./src/CalculoMontante.ts");
/* harmony import */ var _InformacoesPessoais__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InformacoesPessoais */ "./src/InformacoesPessoais.ts");
/* harmony import */ var _Revisao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Revisao */ "./src/Revisao.ts");








const form = new _InteractiveForm__WEBPACK_IMPORTED_MODULE_0__["default"]();
const searchMode = new _SearchMode__WEBPACK_IMPORTED_MODULE_1__["default"]('modo-de-pesquisa');
const industrias = new _Industrias__WEBPACK_IMPORTED_MODULE_2__["default"]('industrias');
const servicos = new _Servicos__WEBPACK_IMPORTED_MODULE_3__["default"]('servicos');
const residuos = new _Residuos__WEBPACK_IMPORTED_MODULE_4__["default"]('residuos');
const calculoMontante = new _CalculoMontante__WEBPACK_IMPORTED_MODULE_5__["default"]('calculo-montante');
const informacoesPessoais = new _InformacoesPessoais__WEBPACK_IMPORTED_MODULE_6__["default"]('informacoes-pessoais');
const revisao = new _Revisao__WEBPACK_IMPORTED_MODULE_7__["default"]('revisao');
form.addSection(searchMode, industrias, servicos, residuos, calculoMontante, informacoesPessoais, revisao);
form.moveSection(searchMode.name);


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: slug, slugObject, getResiduos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugObject", function() { return slugObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResiduos", function() { return getResiduos; });
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
function slugObject(value) {
    return ({ [slug(value)]: value });
}
async function getResiduos(uri) {
    const response = await fetch(uri);
    const data = await response.json();
    return data.acf.card_residuo.map(residuo => {
        residuo.slug = slug(residuo.nome);
        residuo.industrias = residuo.industrias.map(slugObject);
        return residuo;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map