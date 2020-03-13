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
            this.state = newState;
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
    send() {
        console.log(this.data);
    }
    get data() {
        const data = {
            informacoesPessoais: _State__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo,
            servico: _State__WEBPACK_IMPORTED_MODULE_0__["default"].service || null,
            industria: _State__WEBPACK_IMPORTED_MODULE_0__["default"].industry || null,
            residuos: this.getSelectedResidues()
        };
        return data;
    }
    getSelectedResidues() {
        return this._states.reduce((acc, curr) => {
            const residuo = {
                nome: curr.residuo.nome,
                recipientes: curr.calculoMontante.recipientes
            };
            acc.push(residuo);
            return acc;
        }, []);
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
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/State.ts");
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProgressBar */ "./src/components/ProgressBar.ts");



class Section {
    constructor(name, step) {
        this._name = name;
        this._position = step;
        this._rootElement = document.querySelector(`[data-section=${name}`);
        this._onMount = [];
        this._isFullfilled = false;
    }
    get name() {
        return this._name;
    }
    get position() {
        return this._position;
    }
    get state() {
        return this.controller.state;
    }
    get data() {
        return this.controller.data;
    }
    set isFullfilled(value) {
        this._isFullfilled = value;
    }
    get isFullfilled() {
        return this._isFullfilled;
    }
    mount() {
        this._rootElement.classList.add('active');
        this._onMount.forEach(onMount => onMount.bind(this)());
        this.fillProgressBar();
        this.addCardsClickEvent();
        this.addBindings();
        this.addButtonsClickEvents();
    }
    removeAllChildrenFrom(progressBar) {
        while (progressBar.firstChild)
            progressBar.removeChild(progressBar.firstChild);
    }
    unmount() {
        this._rootElement.classList.remove('active');
    }
    onMount(...callback) {
        this._onMount.push(...callback);
    }
    query(selector) {
        return this._rootElement.querySelector(selector);
    }
    queryAll(selector) {
        return Array.from(this._rootElement.querySelectorAll(selector));
    }
    addCardsClickEvent() {
        const cards = this.query('[data-cards]');
        if (cards) {
            const cardButtons = cards.querySelectorAll('button');
            cardButtons.forEach(card => this.addCardClickEvent(card));
        }
        this.addActionsClickEvent();
    }
    addCardClickEvent(card) {
        card.addEventListener('click', event => {
            event.preventDefault();
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].MODO_DE_PESQUISA)
                this.state.searchMode = card.dataset.card;
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INDUSTRIAS)
                this.state.industry = card.dataset.card;
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].SERVICOS)
                this.state.service = card.dataset.card;
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS)
                this.state.residuo = this.data.find(({ slug }) => (slug === card.dataset.card));
            this.isFullfilled = true;
        });
    }
    addActionsClickEvent() {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event) => {
                event.preventDefault();
                const inputs = this.queryAll('input, select');
                if (this.isValid(inputs)) {
                    this.controller.moveTo(action.dataset.action);
                    this.isFullfilled = true;
                }
            };
        });
    }
    isValid(inputs) {
        return inputs.every(input => {
            input.reportValidity();
            return input.checkValidity();
        });
    }
    addBindings() {
        const bindings = this.queryAll('[data-bind]');
        bindings.forEach(binding => {
            let value;
            if (binding.dataset.bind.includes(':')) {
                const [state, key] = binding.dataset.bind.split(':');
                if (this.state[state])
                    value = this.state[state][key];
            }
            else {
                value = this.state[binding.dataset.bind];
            }
            if (!value)
                return binding.parentElement.style.display = 'none';
            binding.parentElement.style.display = 'block';
            if (binding.hasAttribute('data-transform'))
                value = value
                    .map(v => Object.values(v))
                    .map(v => `<li>${v}</li>`)
                    .join(' ');
            binding.innerHTML = value;
        });
        this.bindFormFields();
        this.bindSidebarFields();
    }
    bindFormFields() {
        if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].CALCULO_MONTANTE) {
            this.isFullfilled = true;
            const frequenciaInput = this.query('input[name=frequencia]');
            const periodoSelect = this.query('select[name=periodo]');
            const recipientesInput = this.queryAll('input[name=quantidade]');
            frequenciaInput.value = this.state.calculoMontante.frequencia.toString();
            periodoSelect.value = this.state.calculoMontante.periodo.toString();
            frequenciaInput.onchange = () => (this.state.calculoMontante.frequencia = frequenciaInput.valueAsNumber);
            periodoSelect.onchange = () => (this.state.calculoMontante.periodo = periodoSelect.value);
            recipientesInput.forEach(input => {
                const recipiente = this.state.calculoMontante.recipientes[input.id];
                if (recipiente)
                    input.value = recipiente.toString();
                input.onchange = () => (this.state.calculoMontante.recipientes[input.id] = input.valueAsNumber);
            });
        }
        if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INFO_PESSOAIS) {
            const inputs = this.queryAll('input, textarea');
            inputs.forEach(input => {
                input.value = _State__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo[input.name];
                input.onchange = () => _State__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo[input.name] = input.value;
            });
        }
    }
    bindSidebarFields() {
        const aside = document.querySelector('[data-aside]');
        if (!this.controller.hasState())
            return (aside.innerHTML = '');
        aside.innerHTML = this.getResiduesListingMarkup();
        aside.insertAdjacentHTML('beforeend', this.getUserInfoListingMarkup());
        this.addEditButtonsClickEvents();
        this.addRemoveButtonsClickEvents();
    }
    addRemoveButtonsClickEvents() {
        const remove = document.querySelectorAll('[data-remove]');
        remove.forEach(btn => {
            this.onClick(btn, () => {
                if (window.confirm('Deseja realmente excluir este item?')) {
                    this.controller.removeState(btn.dataset.remove);
                    this.controller.moveTo(this._name);
                }
            });
        });
    }
    addEditButtonsClickEvents() {
        const edit = document.querySelectorAll('[data-edit]');
        edit.forEach(btn => {
            btn.onclick = (event) => {
                event.preventDefault();
                if (btn.dataset.edit !== '') {
                    this.controller.editState(btn.dataset.edit);
                    return this.controller.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].CALCULO_MONTANTE);
                }
                this.controller.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INFO_PESSOAIS);
            };
        });
    }
    getUserInfoListingMarkup() {
        return `
                <div>
                    <h3>Informações de Contato</h3>
                    <p>${this.state.contato}</p>
                    <div>
                        <button data-edit class="btn__secondary btn__secondary--edit">
                            Editar
                        </button>
                    </div>
                </div>
            `;
    }
    getResiduesListingMarkup() {
        return this.controller.states.map((state, idx) => {
            if (state.calculoMontante.periodo)
                return `
                    <div>
                        <h3>Resíduo</h3>
                        <p>${state.residuo.nome}</p>
                        <h3>Frequência</h3>
                        <p>${state.frequencia}</p>
                        <h3>Recipiente(s)</h3>
                        <p>${state.recipientes}</p>
                        <div>
                            <button data-edit="${idx}" class="btn__secondary btn__secondary--edit">
                                Editar
                            </button>
                            <button data-remove="${idx}" class="btn__secondary btn__secondary--remove">
                                Excluir
                            </button>
                        </div>
                    </div>
                `;
            return '';
        }).join(' ');
    }
    fillProgressBar() {
        const progressBar = new _components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"](this.controller);
        progressBar.fillUntil(this);
        progressBar.renderAt(this.query('.progress'));
    }
    clearCurrentForm() {
        const inputs = this.queryAll('input, select');
        inputs.forEach(input => input.value = input.defaultValue || '');
    }
    addButtonsClickEvents() {
        const saveButton = this.query('[data-save]');
        const submitButton = this.query('[type=submit]');
        const clearButton = this.query('.clear');
        this.onClick(saveButton, () => this.controller.save());
        this.onClick(submitButton, () => this.controller.send());
        this.onClick(clearButton, () => this.clearCurrentForm());
    }
    onClick(element, cb) {
        if (element)
            element.onclick = (event) => {
                event.preventDefault();
                cb(event);
            };
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
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");

class SectionController {
    constructor(manager, data) {
        this._sections = new Map();
        this._history = [];
        this.data = data;
        this._manager = manager;
        window.addEventListener('popstate', () => {
            this._history.pop();
            if (this._history.length > 0)
                this.moveTo(this._history.pop());
        });
    }
    get state() {
        return this._manager.state;
    }
    get states() {
        return this._manager.states;
    }
    set active(section) {
        this.previous = this._active;
        this._active = section;
        this._history.push(section.name);
        this.changeHistoryState(section);
        this._active.mount();
    }
    get active() {
        return this._active;
    }
    set previous(section) {
        this._previous = section;
        if (this._previous)
            this._previous.unmount();
    }
    get previous() {
        return this._previous;
    }
    get sections() {
        return this._sections;
    }
    changeHistoryState(section) {
        this._history.length > 0 ?
            history.pushState({ section: section.name }, section.name) :
            history.replaceState({ section: section.name }, section.name);
    }
    append(...sections) {
        sections.forEach(section => {
            section.controller = this;
            this._sections.set(section.name, section);
        });
    }
    find(key) {
        return this._sections.get(key);
    }
    moveTo(key) {
        this.active = this.find(key);
    }
    save() {
        this._manager.save(this.state);
        this.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS);
    }
    send() {
        this._manager.save(this.state);
        this._manager.send();
    }
    hasState() {
        return this._manager.hasState();
    }
    removeState(index) {
        this._manager.removeState(parseInt(index, 10));
    }
    editState(index) {
        this._manager.editState(parseInt(index, 10));
    }
    clear() {
        const message = 'Tem certeza que deseja limpar o formulário?';
        if (window.confirm(message))
            location.reload();
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
    }
    get frequencia() {
        const { frequencia, periodo } = this.calculoMontante;
        return !periodo ? '' :
            `${frequencia}x por ${periodo}`;
    }
    get recipientes() {
        const { recipientes } = this.calculoMontante;
        return Object.keys(recipientes)
            .map(container => `${container} (${recipientes[container]})<br>`)
            .join(' ');
    }
    get contato() {
        const { nome, telefone, empresa, endereco, numero, observacao } = State.userInfo;
        return `
            ${nome}<br>
            ${telefone}<br>
            ${empresa}<br>
            ${endereco}, ${numero}<br>
            ${observacao}
        `;
    }
    set industry(value) { State.industry = value; }
    get industry() { return State.industry; }
    set searchMode(value) { State.searchMode = value; }
    get searchMode() { return State.searchMode; }
    set service(value) { State.service = value; }
    get service() { return State.service; }
}
State.userInfo = {
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
    cnpj: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    observacao: ''
};


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
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");





const loading = document.querySelector('.loading');
(async () => {
    const data = await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["fetchData"])();
    const manager = new _FormManager__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const controller = new _SectionsController__WEBPACK_IMPORTED_MODULE_1__["default"](manager, data);
    loading.remove();
    const sections = [];
    controller.append(new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA, 1), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INDUSTRIAS, 2), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].SERVICOS, 2), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS, 3), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE, 4), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INFO_PESSOAIS, 5), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].REVISE_PEDIDO, 6), new _Section__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].PEDIDO_ENVIADO, 7));
    controller.find(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS).onMount(function () {
        const cards = this.query('[data-cards]');
        const description = this.query('.cards-description');
        const industries = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["extractIndustriesFrom"])(this.data);
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["loadResiduesCards"])(this.state, this.data, cards);
        if (description)
            description.remove();
        if (this.state.industry) {
            const markup = `
                <p class="cards-description">
                    Normalmente, a <strong>indústria
                    <span>${industries.get(this.state.industry).toLowerCase()}</strong> gera os seguintes tipos de resíduos:
                </p>
            `;
            cards.insertAdjacentHTML('beforebegin', markup);
        }
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

/***/ "./src/components/ProgressBar.ts":
/*!***************************************!*\
  !*** ./src/components/ProgressBar.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressBar; });
/* harmony import */ var _ProgressBarValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBarValue */ "./src/components/ProgressBarValue.ts");

class ProgressBar {
    constructor(controller) {
        this._controller = controller;
        this._sections = Array.from(this._controller.sections.values());
        this._values = this._sections.map(section => new _ProgressBarValue__WEBPACK_IMPORTED_MODULE_0__["default"](section));
        this.moveSectionIfActive = this.moveSectionIfActive.bind(this);
    }
    get markup() {
        return this._values.map(value => value.element.outerHTML).join(' ');
    }
    fillUntil(activeSection) {
        this._activeSectionIndex = this._sections.indexOf(activeSection);
        for (let i = 0; i <= this._activeSectionIndex; i++)
            this._values[i].fill();
    }
    renderAt(container) {
        container.innerHTML = '';
        const steps = this.appendStepsDiv(container);
        this._values.forEach(value => {
            steps.appendChild(value.element);
            value.addOnClickEvent(this.moveSectionIfActive);
        });
    }
    appendStepsDiv(container) {
        const steps = this.createStepsDiv();
        container.appendChild(steps);
        this.appendMoveButtons(steps);
        return steps;
    }
    appendMoveButtons(steps) {
        steps.insertAdjacentElement('beforebegin', this.createPreviousAction());
        steps.insertAdjacentElement('afterend', this.createNextButton());
    }
    createStepsDiv() {
        const steps = document.createElement('div');
        steps.classList.add('steps');
        return steps;
    }
    createPreviousAction() {
        const previousButton = document.createElement('div');
        const previousIndex = this._activeSectionIndex - 1;
        previousButton.classList.add('previous');
        previousIndex >= 0 ?
            previousButton.classList.add('active') :
            previousButton.classList.remove('active');
        previousButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
        previousButton.onclick = () => {
            if (previousIndex >= 0)
                this._controller.moveTo(this._sections[previousIndex].name);
        };
        return previousButton;
    }
    createNextButton() {
        const nextButton = document.createElement('div');
        const nextIndex = this._activeSectionIndex + 1;
        nextButton.classList.add('next');
        const section = this._sections[this._activeSectionIndex];
        nextIndex < this._values.length && section.isFullfilled ?
            nextButton.classList.add('active') :
            nextButton.classList.remove('active');
        nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
        nextButton.onclick = () => {
            if (nextIndex < this._values.length && section.isFullfilled)
                this._controller.moveTo(this._sections[nextIndex].name);
        };
        return nextButton;
    }
    moveSectionIfActive(progressValue, section) {
        if (progressValue.isActive)
            this._controller.moveTo(section.name);
    }
}


/***/ }),

/***/ "./src/components/ProgressBarValue.ts":
/*!********************************************!*\
  !*** ./src/components/ProgressBarValue.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressBarValue; });
class ProgressBarValue {
    constructor(section) {
        this._section = section;
        this._element = document.createElement('div');
        this._element.classList.add('progress__value');
    }
    get element() {
        return this._element;
    }
    get isActive() {
        return this._element.classList.contains('active');
    }
    fill() {
        this._element.classList.add('active');
    }
    addOnClickEvent(callback) {
        this._element.onclick = () => (callback(this, this._section));
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


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: addSlugProps, slug, fetchData, hasTreatment, belongsTo, loadResiduesCards, loadIndustriesCards, extractIndustriesFrom, toMarkup, chooseFilter, extractDropdownOptionsMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSlugProps", function() { return addSlugProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTreatment", function() { return hasTreatment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belongsTo", function() { return belongsTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResiduesCards", function() { return loadResiduesCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIndustriesCards", function() { return loadIndustriesCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIndustriesFrom", function() { return extractIndustriesFrom; });
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
function loadIndustriesCards(data, cards) {
    const industries = extractIndustriesFrom(data);
    cards.innerHTML = Array.from(industries)
        .map(([key, name]) => toMarkup(key, name, null, _enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS))
        .join(' ');
}
function extractIndustriesFrom(data) {
    const extractMap = (acc, curr) => {
        Object.keys(curr).forEach(key => (acc.set(key, curr[key])));
        return acc;
    };
    return data.map(residuo => residuo.industrias)
        .reduce(extractMap, new Map());
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