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

/***/ "./src/FormManager.ts":
/*!****************************!*\
  !*** ./src/FormManager.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormManager; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/State.ts");

class FormManager {
    constructor() {
        this.state = new _State__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._states = [];
    }
    set state(state) {
        this._state = state;
    }
    get state() {
        return this._state;
    }
    save(state) {
        if (!this._states.includes(state)) {
            this._states.push(state);
            const newState = new _State__WEBPACK_IMPORTED_MODULE_0__["default"]();
            newState.userInfo = state.userInfo;
            this.state = newState;
            console.log(this._states);
        }
    }
    hasState() {
        return this._states.length > 0;
    }
    get states() {
        return this._states;
    }
    removeState(index) {
        this._states = this._states.filter((_value, idx) => idx !== index);
    }
    editState(index) {
        this.state = this._states[index];
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
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");

class Section {
    constructor(name) {
        this.name = name;
        this.rootElement = document.querySelector(`[data-section=${name}`);
        this._onMount = [];
    }
    get state() {
        return this.controller.state;
    }
    get data() {
        return this.controller.data;
    }
    mount() {
        this.rootElement.classList.add('active');
        this._onMount.forEach(onMount => onMount.bind(this)());
        this.addCardsClickEvent();
        this.addActionsClickEvent();
        this.addBindings();
        this.addFormBindings();
        this.bindSidebar();
        const save = this.query('[data-save]');
        if (save)
            save.onclick = (event) => {
                event.preventDefault();
                this.controller.save();
            };
    }
    unmount() {
        this.rootElement.classList.remove('active');
    }
    onMount(...callback) {
        this._onMount.push(...callback);
    }
    query(selector) {
        return this.rootElement.querySelector(selector);
    }
    queryAll(selector) {
        return Array.from(this.rootElement.querySelectorAll(selector));
    }
    addCardsClickEvent() {
        const cards = this.query('[data-cards]');
        if (cards) {
            const cardButtons = cards.querySelectorAll('button');
            cardButtons.forEach(card => this.onCardClick(card));
        }
    }
    onCardClick(card) {
        card.addEventListener('click', event => {
            event.preventDefault();
            if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].MODO_DE_PESQUISA)
                this.state.searchMode = card.dataset.card;
            if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INDUSTRIAS)
                this.state.industry = card.dataset.card;
            if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].SERVICOS)
                this.state.service = card.dataset.card;
            if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS)
                this.state.residuo = this.data.find(({ slug }) => (slug === card.dataset.card));
        });
    }
    addActionsClickEvent() {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event) => {
                event.preventDefault();
                const inputs = this.queryAll('input, select');
                const isValid = inputs.every(input => {
                    input.reportValidity();
                    return input.checkValidity();
                });
                if (isValid)
                    this.controller.moveTo(action.dataset.action);
            };
        });
    }
    addBindings() {
        const bindings = this.queryAll('[data-bind]');
        bindings.forEach(binding => {
            let value;
            if (binding.dataset.bind.includes(':')) {
                const [state, key] = binding.dataset.bind.split(':');
                value = this.state[state][key];
            }
            else {
                value = this.state[binding.dataset.bind];
            }
            if (!value)
                return binding.parentElement.remove();
            if (binding.hasAttribute('data-transform'))
                value = value
                    .map(v => Object.values(v))
                    .map(v => `<li>${v}</li>`)
                    .join(' ');
            binding.innerHTML = value;
        });
    }
    addFormBindings() {
        if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].CALCULO_MONTANTE) {
            const frequencia = this.query('input[name=frequencia]');
            const periodo = this.query('select[name=periodo]');
            const recipientes = this.queryAll('input[name=quantidade]');
            frequencia.value = this.state.calculoMontante.frequencia.toString();
            periodo.value = this.state.calculoMontante.periodo.toString();
            frequencia.onchange = () => {
                this.state.calculoMontante.frequencia = frequencia.valueAsNumber;
                console.log(this.state);
            };
            periodo.onchange = () => {
                this.state.calculoMontante.periodo = periodo.value;
                console.log(this.state);
            };
            recipientes.forEach(input => {
                const recipiente = this.state.calculoMontante.recipientes[input.id];
                if (recipiente)
                    input.value = recipiente.toString();
                input.onchange = () => {
                    this.state.calculoMontante.recipientes[input.id] = input.valueAsNumber;
                    console.log(this.state);
                };
            });
        }
        if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INFO_PESSOAIS) {
            const inputs = this.queryAll('input');
            inputs.forEach(input => {
                input.value = this.state.userInfo[input.name];
                input.onchange = () => {
                    this.state.userInfo[input.name] = input.value;
                    console.log(this.state);
                };
            });
        }
    }
    bindSidebar() {
        const aside = document.querySelector('[data-aside]');
        if (this.controller.hasState()) {
            aside.innerHTML = this.controller.states.map((state, idx) => `
                    <div>
                        <h3>Resíduo</h3>
                        <p>${state.residuo.nome}</p>
                        <h3>Frequência</h3>
                        <p>${state.frequencia}</p>
                        <h3>Recipiente(s)</h3>
                        <p>${state.recipientes}</p>
                        <div>
                            <button data-edit="${idx}" class="btn__secondary btn__secondary--edit">Editar</button>
                            <button data-remove="${idx}" class="btn__secondary btn__secondary--remove">Excluir</button>
                        </div>
                    </div>
                `).join(' ');
            aside.insertAdjacentHTML('beforeend', `
                <div>
                    <h3>Informações de Contato</h3>
                    <p>${this.controller.states[0].contato}</p>
                </div>
            `);
            const edit = document.querySelectorAll('[data-edit]');
            const remove = document.querySelectorAll('[data-remove]');
            edit.forEach(btn => {
                btn.onclick = (event) => {
                    event.preventDefault();
                    this.controller.editState(btn.dataset.edit);
                    this.controller.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].CALCULO_MONTANTE);
                };
            });
            remove.forEach(btn => {
                btn.onclick = (event) => {
                    event.preventDefault();
                    this.controller.removeState(btn.dataset.remove);
                    this.controller.moveTo(this.name);
                };
            });
        }
        else {
            aside.innerHTML = '';
        }
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionController; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");


class SectionController {
    constructor(manager, data) {
        this._sections = new Map();
        this.data = data;
        this.manager = manager;
    }
    get state() {
        return this.manager.state;
    }
    set active(section) {
        this.previous = this._active;
        this._active = section;
        this._active.mount();
    }
    set previous(section) {
        this._previous = section;
        if (this._previous)
            this._previous.unmount();
    }
    append(...keys) {
        keys.forEach(key => {
            const section = new _Section__WEBPACK_IMPORTED_MODULE_0__["default"](key);
            section.controller = this;
            this._sections.set(key, section);
        });
    }
    find(key) {
        return this._sections.get(key);
    }
    moveTo(key) {
        this.active = this.find(key);
    }
    save() {
        this.manager.save(this.state);
        this.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].RESIDUOS);
    }
    hasState() {
        return this.manager.hasState();
    }
    get states() {
        return this.manager.states;
    }
    removeState(index) {
        this.manager.removeState(parseInt(index, 10));
    }
    editState(index) {
        this.manager.editState(parseInt(index, 10));
    }
}


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
    constructor() {
        this.calculoMontante = {
            frequencia: 1,
            periodo: '',
            recipientes: {}
        };
        this.userInfo = {
            nome: '',
            telefone: '',
            email: '',
            empresa: '',
            cnpj: '',
            cep: '',
            endereco: '',
            numero: '',
            complemento: ''
        };
    }
    get frequencia() {
        const { frequencia, periodo } = this.calculoMontante;
        return `${frequencia}x por ${periodo}`;
    }
    get recipientes() {
        const { recipientes } = this.calculoMontante;
        return Object.keys(recipientes)
            .map(container => `${container} (${recipientes[container]})<br>`)
            .join(' ');
    }
    get contato() {
        const { nome, telefone, empresa, endereco, numero } = this.userInfo;
        return `
            ${nome}<br>
            ${telefone}<br>
            ${empresa}<br>
            ${endereco}, ${numero}
        `;
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
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _SectionsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionsController */ "./src/SectionsController.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _FormManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormManager */ "./src/FormManager.ts");




const loading = document.querySelector('.loading');
(async () => {
    const data = await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["fetchData"])();
    const manager = new _FormManager__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const controller = new _SectionsController__WEBPACK_IMPORTED_MODULE_1__["default"](manager, data);
    loading.remove();
    controller.append(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INDUSTRIAS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].SERVICOS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INFO_PESSOAIS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].REVISE_PEDIDO, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].PEDIDO_ENVIADO);
    controller.find(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS).onMount(function () {
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["loadResiduesCards"])(this.state, this.data, this.query('[data-cards]'));
    });
    controller.find(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE).onMount(function () {
        const recipients = this.query('.iq__options');
        const activator = recipients.previousElementSibling;
        const containers = this.state.residuo.containers[0].container;
        recipients.innerHTML = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["extractDropdownOptionsMarkup"])(containers);
        activator.onclick = () => recipients.parentElement.classList.toggle('active');
    });
    controller.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA);
})();


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


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: addSlugProps, slug, fetchData, hasTreatment, belongsTo, loadResiduesCards, toMarkup, chooseFilter, extractDropdownOptionsMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSlugProps", function() { return addSlugProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTreatment", function() { return hasTreatment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belongsTo", function() { return belongsTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResiduesCards", function() { return loadResiduesCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMarkup", function() { return toMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseFilter", function() { return chooseFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractDropdownOptionsMarkup", function() { return extractDropdownOptionsMarkup; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/utils/enums.ts");

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
    for (let i = 0, l = from.length; i < l; i++)
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
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
function hasTreatment() {
    return (residuo) => residuo.tratamento;
}
function belongsTo(industry) {
    return (residuo) => {
        const industrias = Object.keys(residuo.industrias);
        return industrias.includes(industry);
    };
}
function loadResiduesCards(state, data, cards) {
    const filteredResidues = data.filter(chooseFilter(state));
    cards.innerHTML = filteredResidues.map(residuo => (toMarkup(residuo.slug, residuo.nome, residuo.icone, _enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].CALCULO_MONTANTE))).join(' ');
}
function toMarkup(key, name, icon, action) {
    return (`
        <button data-card="${key}" data-action="${action}">
            <img src="${icon}" alt="${name}"/>
            <h3>${name}</h3>
        </button>
    `);
}
function chooseFilter(state) {
    const { industry, service } = state;
    let filter = () => true;
    if (industry)
        filter = belongsTo(industry);
    if (service === 'tratamento-de-residuos')
        filter = hasTreatment();
    return filter;
}
function extractDropdownOptionsMarkup(containers) {
    return containers.map(container => (`
        <div class="iq__option">
            <span class="iq__label">${container}</span>
            <input type="number" name="quantidade" min="0" value="0" id="${container}">
        </div>
    `)).join(' ');
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map