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
    constructor() {
        this._state = new _State__WEBPACK_IMPORTED_MODULE_0__["State"]();
    }
    setState(state) {
        console.log(state);
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
        this.listeners = [];
    }
    get servico() {
        return this._servico;
    }
    set servico(value) {
        this._servico = value;
        this.notify();
    }
    get industria() {
        return this._industria;
    }
    set industria(value) {
        this._industria = value;
        this.notify();
    }
    get modo() {
        return this._modo;
    }
    set modo(value) {
        this._modo = value;
        this.notify();
    }
    set dados(value) {
        this._dados = value;
        this.notify();
    }
    get dados() {
        return this._dados;
    }
    getResiduo() {
        return this._residuo;
    }
    get residuo() {
        return this._residuo;
    }
    set residuo(value) {
        this._residuo = this.dados.find(res => res.slug === value);
        this.notify();
    }
    asListItem(data) {
        return !data ?
            '' : data.map(({ exemplo }) => `<li>${exemplo}</li>`).join(' ');
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




const sections = [
    'modo-de-pesquisa',
    'industrias',
    'servicos',
    'residuos',
    'calculo-montante',
    'informacoes-pessoais',
    'revise-seu-pedido'
];
const addActionsClickEvents = () => {
    const actions = document.querySelectorAll('[data-section-action]');
    actions.forEach(action => action.addEventListener('click', () => {
        const { sectionAction } = action.dataset;
        _Section__WEBPACK_IMPORTED_MODULE_0__["default"].moveTo(sectionAction);
    }));
};
const renderResiduesWithFilter = (state, residuosData) => {
    if (state.servico === 'tratamento-de-residuos') {
        return renderResidues(residuosData, (residuo) => residuo.tratamento);
    }
    if (state.industria) {
        return renderResidues(residuosData, (residuo) => (Object.keys(residuo.industrias).includes(state.industria)));
    }
    renderResidues(residuosData, () => true);
};
const addCardsClickEvent = (form, ...keys) => (keys.forEach(key => {
    const cards = document.querySelectorAll(`[data-state-${key}]`);
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    cards.forEach(card => card.addEventListener('click', () => (form.setState({ [key]: card.dataset[`state${capitalizedKey}`] }))));
}));
const bindResidue = (state) => {
    const placeholders = document.querySelectorAll('[data-residuo]');
    const residue = state.getResiduo();
    placeholders.forEach(placeholder => {
        if (placeholder.nodeName !== 'UL') {
            return placeholder.textContent = residue[placeholder.dataset.residuo];
        }
        placeholder.innerHTML = state.asListItem(residue[placeholder.dataset.residuo]);
    });
};
const renderIndustries = (data) => {
    const section = _Section__WEBPACK_IMPORTED_MODULE_0__["default"].find('industrias');
    const cards = section.querySelector('.section__cards');
    const industrias = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["extractIndustriesFrom"])(data);
    const markup = Array.from(industrias).map(([key, value]) => `
        <a href="#" data-state-industria="${key}" data-section-action="residuos">
            ${value}
        </a>
    `);
    cards.innerHTML = markup.join(' ');
};
const renderResidues = (data, filtering) => {
    const section = _Section__WEBPACK_IMPORTED_MODULE_0__["default"].find('residuos');
    const cards = section.querySelector('.section__cards');
    const markup = data.filter(filtering).map(residuo => (`
        <a href="#" data-state-residuo="${residuo.slug}" data-section-action="calculo-montante">
            ${residuo.nome}
        </a>
    `));
    cards.innerHTML = markup.join(' ');
};
(async () => {
    const residuosData = await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fetchData"])();
    const formManager = new _FormManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const currentForm = new _Form__WEBPACK_IMPORTED_MODULE_1__["Form"]();
    formManager.setActive(currentForm);
    _Section__WEBPACK_IMPORTED_MODULE_0__["default"].add(...sections);
    _Section__WEBPACK_IMPORTED_MODULE_0__["default"].onStateChange(state => {
        renderIndustries(residuosData);
        renderResiduesWithFilter(state, residuosData);
        state.residuo && bindResidue(state);
        addActionsClickEvents();
        addCardsClickEvent(formManager.active, 'modo', 'industria', 'servico', 'residuo');
    });
    _Section__WEBPACK_IMPORTED_MODULE_0__["default"].moveTo('modo-de-pesquisa');
    currentForm.setState({ dados: residuosData });
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