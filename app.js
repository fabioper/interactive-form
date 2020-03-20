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

/***/ "./src/FormHandler.ts":
/*!****************************!*\
  !*** ./src/FormHandler.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormHandler; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/State.ts");
/* harmony import */ var _FormRepository_InMemoryFormRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRepository/InMemoryFormRepository */ "./src/FormRepository/InMemoryFormRepository.ts");


class FormHandler {
    constructor() { this._repository = _FormRepository_InMemoryFormRepository__WEBPACK_IMPORTED_MODULE_1__["default"].instance; }
    static get instance() {
        if (this._instance)
            return this._instance;
        this._instance = new FormHandler();
        return this._instance;
    }
    sendAll() {
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
        const states = this._repository.getAll();
        return states.reduce(this.format, []);
    }
    format(previousValue, currentValue) {
        previousValue.push({
            nome: currentValue.residuo.nome,
            recipientes: currentValue.calculoMontante.recipientes
        });
        return previousValue;
    }
}


/***/ }),

/***/ "./src/FormRepository/InMemoryFormRepository.ts":
/*!******************************************************!*\
  !*** ./src/FormRepository/InMemoryFormRepository.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InMemoryFormRepository; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ "./src/State.ts");

class InMemoryFormRepository {
    constructor() {
        this.active = new _State__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._states = [];
    }
    static get instance() {
        if (InMemoryFormRepository._instance)
            return InMemoryFormRepository._instance;
        InMemoryFormRepository._instance = new InMemoryFormRepository();
        return InMemoryFormRepository._instance;
    }
    get active() { return this._active; }
    set active(state) { this._active = state; }
    get states() { return this._states; }
    getAll() {
        return this._states;
    }
    getById(id) {
        return this._states[id];
    }
    add(state) {
        if (!this._states.includes(state))
            this._states.push(state);
        else
            this._states = this._states.map(st => {
                if (st === state)
                    return state;
                return st;
            });
        const newState = new _State__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.active = newState;
        return this.active;
    }
    update(id, state) {
        throw new Error('Method not implemented.');
    }
    remove(id) {
        this._states = this._states.filter((_value, idx) => idx !== id);
    }
    isEmpty() {
        return Boolean(this._states.length);
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
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/State.ts");
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProgressBar */ "./src/components/ProgressBar.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _SectionRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionRouter */ "./src/SectionRouter.ts");
/* harmony import */ var _FormHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormHandler */ "./src/FormHandler.ts");
/* harmony import */ var _FormRepository_InMemoryFormRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormRepository/InMemoryFormRepository */ "./src/FormRepository/InMemoryFormRepository.ts");






class Section {
    constructor(name, step, data, condition) {
        this._name = name;
        this._position = step;
        this._rootElement = document.querySelector(`[data-section=${name}`);
        this._onMount = [];
        this._satisfied = false;
        this._condition = condition;
        this._router = _SectionRouter__WEBPACK_IMPORTED_MODULE_3__["default"].instance;
        this._repository = _FormRepository_InMemoryFormRepository__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
        this._handler = _FormHandler__WEBPACK_IMPORTED_MODULE_4__["default"].instance;
        this._data = data;
    }
    get name() { return this._name; }
    get position() { return this._position; }
    set isSatisfied(value) { this._satisfied = value; }
    get isSatisfied() { return this._satisfied; }
    get condition() {
        if (this._condition)
            return this._condition(this._repository.active);
        return true;
    }
    mount() {
        this._rootElement.classList.add('active');
        this._onMount.forEach(onMount => onMount.bind(this)());
        this.fillProgressBar();
        this.addCardsClickEvent();
        this.addBindings();
        this.addButtonsClickEvents();
        if (this.name === 'revise-seu-pedido')
            this.renderHistory();
    }
    renderHistory() {
        const orders = [...this._repository.getAll(), this._repository.active];
        const editButton = (idx) => `
                <button data-edit="${idx}" class="btn__secondary btn__secondary--edit">
                    Editar
                </button>`;
        const removeButton = (idx) => `
                <button data-remove="${idx}" class="btn__secondary btn__secondary--remove">
                    Excluir
                </button>`;
        const markup = orders.map((state, idx) => `
            <div>
                <div>
                    <div>
                        <h3>Resíduo</h3>
                        <p>${state.residuo.nome}</p>
                    </div>
                    <div>
                        <h3>Frequência</h3>
                        <p>${state.frequencia}</p>
                    </div>
                    <div>
                        <h3>Recipientes</h3>
                        <p>${state.recipientes}</p>
                        <div>${editButton(idx)} ${removeButton(idx)}</div>
                    </div>
                </div>
            </div>
            `);
        const historyPlaceholder = this.query('[data-history]');
        historyPlaceholder.innerHTML = markup.join(' ');
        this.addEditButtonsClickEvents();
        this.addRemoveButtonsClickEvents();
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
    removeAllChildrenFrom(progressBar) {
        while (progressBar.firstChild)
            progressBar.removeChild(progressBar.firstChild);
    }
    addBindings() {
        const bindings = this.queryAll('[data-bind]');
        bindings.forEach(binding => {
            let value;
            if (binding.dataset.bind.includes(':')) {
                const [state, key] = binding.dataset.bind.split(':');
                if (this._repository.active[state])
                    value = this._repository.active[state][key];
            }
            else {
                value = this._repository.active[binding.dataset.bind];
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
    bindSidebarFields() {
        const aside = document.querySelector('[data-aside]');
        if (!_State__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo.nome && this._repository.isEmpty())
            return (aside.innerHTML = '');
        aside.innerHTML = this.getResiduesListingMarkup();
        if (_State__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo.nome)
            aside.insertAdjacentHTML('beforeend', this.getUserInfoListingMarkup());
        this.addEditButtonsClickEvents();
        this.addRemoveButtonsClickEvents();
    }
    bindFormFields() {
        if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE) {
            this.isSatisfied = true;
            console.log(this._repository.active);
            const frequenciaInput = this.query('input[name=frequencia]');
            const periodoSelect = this.query('select[name=periodo]');
            const recipientesInput = this.queryAll('input[name=quantidade]');
            frequenciaInput.value = this._repository.active.calculoMontante.frequencia.toString();
            periodoSelect.value = this._repository.active.calculoMontante.periodo.toString();
            frequenciaInput.onchange = () => (this._repository.active.calculoMontante.frequencia = frequenciaInput.valueAsNumber);
            periodoSelect.onchange = () => (this._repository.active.calculoMontante.periodo = periodoSelect.value);
            recipientesInput.forEach(input => {
                const recipiente = this._repository.active.calculoMontante.recipientes[input.id];
                if (recipiente)
                    input.value = recipiente.toString();
                input.onchange = () => (this._repository.active.calculoMontante.recipientes[input.id] = input.valueAsNumber);
            });
        }
        if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INFO_PESSOAIS) {
            const inputs = this.queryAll('input, textarea');
            inputs.forEach(input => {
                input.value = _State__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo[input.name];
                input.onchange = () => _State__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo[input.name] = input.value;
            });
        }
    }
    clearCurrentForm() {
        const inputs = this.queryAll('input, select');
        inputs.forEach(input => input.value = input.defaultValue || '');
    }
    isValid(inputs) {
        return inputs.every(input => {
            input.reportValidity();
            return input.checkValidity();
        });
    }
    getUserInfoListingMarkup() {
        return `
                <div>
                    <h3>Informações de Contato</h3>
                    <p>${_State__WEBPACK_IMPORTED_MODULE_0__["default"].contato.toString()}</p>
                    <div>
                        <button data-edit class="btn__secondary btn__secondary--edit">
                            Editar
                        </button>
                    </div>
                </div>
            `;
    }
    getResiduesListingMarkup() {
        const startDiv = '<div>';
        const endDiv = '</div>';
        const markup = this._repository.getAll().map((state, idx) => {
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
        })
            .join(' ');
        return startDiv + markup + endDiv;
    }
    fillProgressBar() {
        const progressBar = new _components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"]();
        progressBar.fillUntil(this);
        progressBar.renderAt(this.query('.progress'));
    }
    onClick(element, cb) {
        if (element)
            element.onclick = (event) => {
                event.preventDefault();
                cb(event);
            };
    }
    addRemoveButtonsClickEvents() {
        const remove = document.querySelectorAll('[data-remove]');
        remove.forEach(btn => {
            this.onClick(btn, () => {
                if (window.confirm('Deseja realmente excluir este item?')) {
                    console.log(`Removing item: ${btn.dataset.remove}`);
                    this._repository.remove(parseInt(btn.dataset.remove, 10));
                    if (!this._repository.isEmpty())
                        return this._router.moveTo(this._name);
                    this._router.moveTo(this._name);
                }
            });
        });
    }
    addEditButtonsClickEvents() {
        const edit = document.querySelectorAll('[data-edit]');
        edit.forEach(btn => {
            const redirect = (dest) => {
                const confirm = dest.query('.submit');
                confirm.textContent = 'Ok';
                this.onClick(confirm, () => {
                    this._router.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].REVISE_PEDIDO);
                    confirm.textContent = 'Avançar';
                });
            };
            this.onClick(btn, () => {
                if (btn.dataset.edit !== '') {
                    this._repository.active = this._repository.getById(parseInt(btn.dataset.edit, 10));
                    return this._router.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE, redirect);
                }
                return this._router.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INFO_PESSOAIS, redirect);
            });
        });
    }
    addButtonsClickEvents() {
        if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE) {
            const moveForwardButton = this.query('.submit');
            if (_State__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo.nome)
                this.onClick(moveForwardButton, () => this._router.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].REVISE_PEDIDO));
        }
        const saveButton = this.query('[data-save]');
        if (!this._repository.active.residuo && saveButton)
            saveButton.remove();
        this.onClick(saveButton, () => {
            this._repository.add(this._repository.active);
            this._router.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS);
        });
        const submitButton = this.query('[type=submit]');
        this.onClick(submitButton, () => this._handler.sendAll());
        const clearButton = this.query('.clear');
        this.onClick(clearButton, () => this.clearCurrentForm());
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
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA)
                this._repository.active.searchMode = card.dataset.card;
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INDUSTRIAS)
                this._repository.active.industry = card.dataset.card;
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].SERVICOS)
                this._repository.active.service = card.dataset.card;
            if (this._name === _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS)
                this._repository.active.residuo = this._data.find(({ slug }) => (slug === card.dataset.card));
            this.isSatisfied = true;
        });
    }
    addActionsClickEvent() {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event) => {
                event.preventDefault();
                const inputs = this.queryAll('input, select');
                if (this.isValid(inputs)) {
                    this._router.moveTo(action.dataset.action);
                    this.isSatisfied = true;
                }
            };
        });
    }
}


/***/ }),

/***/ "./src/SectionRouter.ts":
/*!******************************!*\
  !*** ./src/SectionRouter.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionRouter; });
class SectionRouter {
    constructor() {
        this._sections = new Map();
        this._history = [];
    }
    static get instance() {
        if (this._instance)
            return this._instance;
        this._instance = new SectionRouter();
        return this._instance;
    }
    set active(section) {
        this.previous = this._active;
        this._active = section;
        this._history.push(section.name);
        this.changeHistoryState(section);
        this._active.mount();
    }
    get active() { return this._active; }
    set previous(section) {
        this._previous = section;
        if (this._previous)
            this._previous.unmount();
    }
    get previous() { return this._previous; }
    get sections() {
        return this._sections;
    }
    append(...sections) {
        sections.forEach(section => {
            this._sections.set(section.name, section);
        });
    }
    find(key) {
        return this._sections.get(key);
    }
    moveTo(key, cb) {
        this.active = this.find(key);
        if (cb)
            cb(this.active);
    }
    changeHistoryState(section) {
        this._history.length > 0 ?
            history.pushState({ section: section.name }, section.name) :
            history.replaceState({ section: section.name }, section.name);
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
    static get contato() {
        const { nome, telefone, empresa, endereco, numero, observacao } = State.userInfo;
        return `
            ${nome}<br>
            ${telefone}<br>
            ${empresa}<br>
            ${endereco}, ${numero}<br>
            ${observacao}
        `;
    }
    get contato() { return State.contato; }
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
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section */ "./src/Section.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _SectionRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionRouter */ "./src/SectionRouter.ts");
/* harmony import */ var _FormRepository_InMemoryFormRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormRepository/InMemoryFormRepository */ "./src/FormRepository/InMemoryFormRepository.ts");





const loading = document.querySelector('.loading');
(async () => {
    const data = await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["fetchData"])();
    const router = _SectionRouter__WEBPACK_IMPORTED_MODULE_3__["default"].instance;
    const repository = _FormRepository_InMemoryFormRepository__WEBPACK_IMPORTED_MODULE_4__["default"].instance;
    loading.remove();
    router.append(new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA, 1, data), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INDUSTRIAS, 2, data, state => state.searchMode === 'industrias'), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].SERVICOS, 2, data, state => state.searchMode === 'servicos'), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS, 3, data), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE, 4, data), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INFO_PESSOAIS, 5, data), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].REVISE_PEDIDO, 6, data), new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].PEDIDO_ENVIADO, 7, data));
    router.find(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS).onMount(function () {
        const cards = this.query('[data-cards]');
        const description = this.query('.cards-description');
        const industries = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["extractIndustriesFrom"])(data);
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["loadResiduesCards"])(repository.active, data, cards);
        if (description)
            description.remove();
        if (repository.active.industry) {
            const markup = `
                <p class="cards-description">
                    Normalmente, a <strong>indústria
                    <span>${industries.get(repository.active.industry).toLowerCase()}</strong> gera os seguintes tipos de resíduos:
                </p>
            `;
            cards.insertAdjacentHTML('beforebegin', markup);
        }
    });
    router.find(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE).onMount(function () {
        const recipients = this.query('.iq__options');
        const activator = recipients.previousElementSibling;
        const containers = repository.active.residuo.containers[0].container;
        recipients.innerHTML = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["extractDropdownOptionsMarkup"])(containers);
        activator.onclick = () => recipients.parentElement.classList.toggle('active');
    });
    router.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA);
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
/* harmony import */ var _SectionRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SectionRouter */ "./src/SectionRouter.ts");


class ProgressBar {
    constructor() {
        this._router = _SectionRouter__WEBPACK_IMPORTED_MODULE_1__["default"].instance;
        this._sections = Array.from(this._router.sections.values());
        this._progressBarValues = this._sections.map(section => new _ProgressBarValue__WEBPACK_IMPORTED_MODULE_0__["default"](section));
        this.moveSectionIfActive = this.moveSectionIfActive.bind(this);
    }
    get markup() {
        return this._progressBarValues.map(value => value.element.outerHTML).join(' ');
    }
    get currentSection() {
        return this._sections[this._activeIndex];
    }
    getNextIndex(index) {
        if (index > this._progressBarValues.length)
            return;
        const next = this._sections[index];
        if (next.condition)
            return index;
        return this.getNextIndex(index + 1);
    }
    getPreviousIndex(index) {
        if (index < 0)
            return;
        const previous = this._sections[index];
        if (previous.condition)
            return index;
        return this.getPreviousIndex(index - 1);
    }
    fillUntil(activeSection) {
        this._activeIndex = this._sections.indexOf(activeSection);
        for (let i = 0; i <= this._activeIndex; i++)
            this._progressBarValues[i].fill();
    }
    renderAt(container) {
        container.innerHTML = '';
        const steps = this.appendStepsDiv(container);
        this._progressBarValues.forEach(value => {
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
        previousButton.classList.add('previous');
        previousButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>`;
        const previousIndex = this.getPreviousIndex(this._activeIndex - 1);
        previousIndex || previousIndex === 0 ?
            previousButton.classList.add('active') :
            previousButton.classList.remove('active');
        previousButton.onclick = () => {
            if (previousIndex >= 0)
                this._router.moveTo(this._sections[previousIndex].name);
        };
        return previousButton;
    }
    createNextButton() {
        const nextButton = document.createElement('div');
        nextButton.classList.add('next');
        nextButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>`;
        const nextIndex = this.getNextIndex(this._activeIndex + 1);
        console.log(nextIndex);
        nextIndex && this.currentSection.isSatisfied ?
            nextButton.classList.add('active') :
            nextButton.classList.remove('active');
        const nextSection = this._sections[nextIndex];
        nextButton.onclick = () => {
            if (this.currentSection.isSatisfied && nextSection)
                this._router.moveTo(nextSection.name);
        };
        return nextButton;
    }
    moveSectionIfActive(progressValue, section) {
        if (progressValue.isActive)
            this._router.moveTo(section.name);
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