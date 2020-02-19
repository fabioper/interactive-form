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

/***/ "./src/Form.ts":
/*!*********************!*\
  !*** ./src/Form.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/State.ts");

class Form {
    constructor() {
        this.localState = new _State__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}


/***/ }),

/***/ "./src/FormController.ts":
/*!*******************************!*\
  !*** ./src/FormController.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormController; });
class FormController {
    constructor() {
        this.listeners = [];
    }
    get state() {
        return this._state;
    }
    set active(form) {
        this._state = form.localState;
        this._state.setObserver(this);
        this.update();
    }
    onStateChange(...listeners) {
        listeners.forEach(listener => this.listeners.push(listener));
    }
    update() {
        this.listeners.forEach(cb => cb(this._state));
    }
}


/***/ }),

/***/ "./src/Section.ts":
/*!************************!*\
  !*** ./src/Section.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var _SectionsEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionsEnum */ "./src/SectionsEnum.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");


class Section {
    constructor(name) {
        this.name = name;
        this.rootElement = document.querySelector(`[data-section=${this.name}]`);
    }
    query(selector) {
        return this.rootElement.querySelector(selector);
    }
    queryAll(selector) {
        return this.rootElement.querySelectorAll(selector);
    }
    updateState(state) {
        console.log(state.industria);
    }
    initilize(data) {
        switch (this.name) {
            case _SectionsEnum__WEBPACK_IMPORTED_MODULE_0__["section"].INDUSTRIAS:
                this.renderIndustriesCards(data);
                break;
            case _SectionsEnum__WEBPACK_IMPORTED_MODULE_0__["section"].RESIDUOS:
                this.renderResiduesCards(data);
                break;
            default:
                break;
        }
    }
    renderIndustriesCards(data) {
        const cards = this.rootElement.querySelector('.section__cards');
        const industrias = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["extractIndustriesFrom"])(data);
        const markup = Array.from(industrias).map(([key, value]) => `
            <a href="#" data-state-industria="${key}" data-section-action="residuos">
                ${value}
            </a>
        `);
        cards.innerHTML = markup.join(' ');
    }
    renderResiduesCards(data) {
        const cards = this.rootElement.querySelector('.section__cards');
        const markup = data.map(residuo => (`
            <a href="#" data-state-residuo="${residuo.slug}" data-section-action="calculo-montante">
                ${residuo.nome}
            </a>
        `));
        cards.innerHTML = markup.join(' ');
    }
    extractIndustriesFrom(residuos) {
        const extractMap = (acc, curr) => {
            Object.keys(curr).forEach(key => (acc.set(key, curr[key])));
            return acc;
        };
        return residuos.map(residuo => residuo.industrias)
            .reduce(extractMap, new Map());
    }
}


/***/ }),

/***/ "./src/SectionsController.ts":
/*!***********************************!*\
  !*** ./src/SectionsController.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionsController; });
class SectionsController {
    constructor() {
        this.sections = new Map();
    }
    set current(value) {
        this._current = value;
        this._current.rootElement.classList.add('active');
    }
    set previous(value) {
        var _a;
        this._previous = value;
        (_a = this._previous) === null || _a === void 0 ? void 0 : _a.rootElement.classList.remove('active');
    }
    moveTo(key) {
        this.previous = this._current;
        this.current = this.sections.get(key);
    }
    appendSections(...sections) {
        sections.forEach(section => {
            this.sections.set(section.name, section);
            section.initilize(this.formController.data);
        });
        this.addActionsClickEvents();
        this.addCardsClickEvent();
    }
    observe(form) {
        this.formController = form;
        this.formController.onStateChange(state => this.notifySections(state));
    }
    notifySections(state) {
        this.sections.forEach(section => section.updateState(state));
    }
    addActionsClickEvents() {
        const actions = document.querySelectorAll('[data-section-action]');
        actions.forEach(action => action.addEventListener('click', event => {
            event.preventDefault();
            this.moveTo(action.dataset.sectionAction);
        }));
    }
    addCardsClickEvent() {
        const keys = [
            'modo',
            'industria',
            'servico',
            'residuo'
        ];
        keys.forEach(key => {
            const cards = document.querySelectorAll(`[data-state-${key}]`);
            const capitalizedKey = this.capilizeWord(key);
            cards.forEach(card => card.addEventListener('click', () => {
                this.formController.state.setState({
                    [key]: card.dataset[`state${capitalizedKey}`]
                });
            }));
        });
    }
    capilizeWord(key) {
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
}


/***/ }),

/***/ "./src/SectionsEnum.ts":
/*!*****************************!*\
  !*** ./src/SectionsEnum.ts ***!
  \*****************************/
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

/***/ "./src/State.ts":
/*!**********************!*\
  !*** ./src/State.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
class State {
    setState(data) {
        Object.keys((key) => (this[key] = data[key]));
        this.notify();
    }
    setObserver(observer) {
        this.observer = observer;
    }
    notify() {
        this.observer.update();
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
/* harmony import */ var _FormController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormController */ "./src/FormController.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/Form.ts");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");
/* harmony import */ var _SectionsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionsController */ "./src/SectionsController.ts");
/* harmony import */ var _SectionsEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SectionsEnum */ "./src/SectionsEnum.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");






const controller = new _FormController__WEBPACK_IMPORTED_MODULE_0__["default"]();
const form = new _Form__WEBPACK_IMPORTED_MODULE_1__["default"]();
const sectionsController = new _SectionsController__WEBPACK_IMPORTED_MODULE_3__["default"]();
(async () => {
    const data = await Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["fetchData"])();
    controller.data = data;
    controller.active = form;
    sectionsController.observe(controller);
    sectionsController.appendSections(new _Section__WEBPACK_IMPORTED_MODULE_2__["default"](_SectionsEnum__WEBPACK_IMPORTED_MODULE_4__["section"].MODO_DE_PESQUISA), new _Section__WEBPACK_IMPORTED_MODULE_2__["default"](_SectionsEnum__WEBPACK_IMPORTED_MODULE_4__["section"].INDUSTRIAS), new _Section__WEBPACK_IMPORTED_MODULE_2__["default"](_SectionsEnum__WEBPACK_IMPORTED_MODULE_4__["section"].SERVICOS), new _Section__WEBPACK_IMPORTED_MODULE_2__["default"](_SectionsEnum__WEBPACK_IMPORTED_MODULE_4__["section"].RESIDUOS));
    sectionsController.moveTo(_SectionsEnum__WEBPACK_IMPORTED_MODULE_4__["section"].MODO_DE_PESQUISA);
})();


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
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