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
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/State.ts");

class Form {
    constructor(dados) {
        this._state = new _State__WEBPACK_IMPORTED_MODULE_0__["State"]();
    }
    setState(state) {
        Object.keys(state).forEach(key => (this._state[key] = state[key]));
    }
    get state() {
        return this._state;
    }
}


/***/ }),

/***/ "./src/FormManager.ts":
/*!****************************!*\
  !*** ./src/FormManager.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormManager; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");

class FormManager {
    constructor() {
        this.forms = [];
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    add(form) {
        this.forms.push(form);
    }
    setActive(form) {
        this.active = form;
        this.state = form.state;
        this.state.addListener(this);
    }
    remove(formToDelete) {
        this.forms = this.forms.filter(form => form !== formToDelete);
    }
    edit(formToEdit) {
        const form = this.forms.find(form => form !== formToEdit);
        this.setActive(form);
    }
    update() {
        _Section__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.state);
    }
    send(form) {
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
class Section {
    static get currentSection() {
        return Section._currentSection;
    }
    static set currentSection(value) {
        Section._currentSection = value;
        Section.currentSection.classList.add('active');
    }
    static get previousSection() {
        return Section._currentSection;
    }
    static set previousSection(value) {
        var _a;
        Section._previousSection = value;
        (_a = Section.previousSection) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
    }
    static find(key) {
        return Section.sections.get(key);
    }
    static moveTo(key) {
        Section.previousSection = Section.currentSection;
        Section.currentSection = Section.sections.get(key);
    }
    static add(...keys) {
        keys.forEach(key => Section.sections.set(key, document.querySelector(`[data-section=${key}]`)));
    }
    static update(state) {
        Section.state = state;
        Section.stateChangeCallback(state);
    }
    static onStateChange(callback) {
        Section.stateChangeCallback = callback;
    }
}
Section.sections = new Map();


/***/ }),

/***/ "./src/State.ts":
/*!**********************!*\
  !*** ./src/State.ts ***!
  \**********************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
class State {
    constructor() {
        this._residuo = null;
        this.listeners = [];
    }
    set dados(value) {
        this._dados = value;
        this.notify();
    }
    get data() {
        return this._dados;
    }
    getResiduo() {
        return this._residuo;
    }
    set residuo(value) {
        this._residuo = this.dados.find(res => res.slug === value);
        this.notify();
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    notify() {
        this.listeners.forEach(listener => listener.update());
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
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/Form.ts");
/* harmony import */ var _FormManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormManager */ "./src/FormManager.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");




const sections = ['modo-de-pesquisa', 'industrias', 'residuos'];
const getIndustrias = (residuos) => {
    const extractMap = (acc, curr) => {
        Object.keys(curr).forEach(key => (acc.set(key, curr[key])));
        return acc;
    };
    return residuos.map(residuo => residuo.industrias)
        .reduce(extractMap, new Map());
};
const addActionsClickEvent = () => {
    const actions = document.querySelectorAll('[data-section-action]');
    actions.forEach(action => {
        action.addEventListener('click', () => {
            const { sectionAction } = action.dataset;
            _Section__WEBPACK_IMPORTED_MODULE_0__["default"].moveTo(sectionAction);
        });
    });
};
const loadIndustriesData = (rediduosData) => {
    const industriasSection = _Section__WEBPACK_IMPORTED_MODULE_0__["default"].find('industrias');
    const industriasCards = industriasSection.querySelector('.section__cards');
    const industrias = getIndustrias(rediduosData);
    const markup = Array.from(industrias).map(([key, value]) => `
        <a href="#" data-modo="${key}" data-section-action="${key}">
        ${value}
        </a>`);
    industriasCards.insertAdjacentHTML('afterbegin', markup.join(' '));
};
const loadResiduesData = (rediduosData) => {
    const residuosSection = _Section__WEBPACK_IMPORTED_MODULE_0__["default"].find('residuos');
    const residuosCards = residuosSection.querySelector('.section__cards');
    const residuosMarkup = rediduosData.map(residuo => (`
                <a href="#" data-residuo="${residuo.slug}" data-section-action="calculo-montante">
                    ${residuo.nome}
                </a>
            `));
    residuosCards.insertAdjacentHTML('afterbegin', residuosMarkup.join(' '));
};
(async () => {
    const rediduosData = await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fetchData"])();
    const formManager = new _FormManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const currentForm = new _Form__WEBPACK_IMPORTED_MODULE_1__["Form"](rediduosData);
    formManager.setActive(currentForm);
    _Section__WEBPACK_IMPORTED_MODULE_0__["default"].add(...sections);
    _Section__WEBPACK_IMPORTED_MODULE_0__["default"].onStateChange(state => {
        loadIndustriesData(rediduosData);
        loadResiduesData(rediduosData);
        addActionsClickEvent();
    });
    _Section__WEBPACK_IMPORTED_MODULE_0__["default"].moveTo('residuos');
    currentForm.setState({ dados: rediduosData });
})();


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: addSlugProps, slug, fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSlugProps", function() { return addSlugProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
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