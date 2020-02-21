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
/* harmony import */ var _form_FormManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/FormManager */ "./src/form/FormManager.ts");
/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/Form */ "./src/form/Form.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.ts");




(async () => {
    const form = new _form_Form__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const manager = new _form_FormManager__WEBPACK_IMPORTED_MODULE_0__["default"](form, await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["fetchData"])());
    const sectionsController = manager.sectionsController;
    const sections = sectionsController.querySections(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INDUSTRIAS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].SERVICOS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].RESIDUOS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].CALCULO_MONTANTE, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].INFO_PESSOAIS, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].REVISE_PEDIDO, _utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].PEDIDO_ENVIADO);
    sectionsController.appendSections(...sections);
    sectionsController.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_2__["Sections"].MODO_DE_PESQUISA);
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

/***/ "./src/form/FormManager.ts":
/*!*********************************!*\
  !*** ./src/form/FormManager.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormManager; });
/* harmony import */ var _sections_SectionsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/SectionsController */ "./src/sections/SectionsController.ts");

class FormManager {
    constructor(initialForm, data) {
        console.log('Creating [FormController]: constructor()');
        this.forms = [];
        this.sectionsController = new _sections_SectionsController__WEBPACK_IMPORTED_MODULE_0__["default"](this, data);
        this.setActive(initialForm);
    }
    setActive(form) {
        console.log('\tRunning: setActive() ->');
        this.active = form;
        this.formState = this.active.formState;
    }
    add(form) {
        this.forms.push(form);
    }
}


/***/ }),

/***/ "./src/sections/FormSection.ts":
/*!*************************************!*\
  !*** ./src/sections/FormSection.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSection; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/sections/Section.ts");

class FormSection extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onMount() {
        super.onMount();
        console.log(`\t\t[ FormSection ] Running: mount() -> ${this.name}`);
        this.fillPlaceholders();
        this.bindFields();
    }
    bindFields() {
        const inputFields = this.queryAll('input, select');
        inputFields.forEach(inputField => {
            var _a;
            inputField.value = ((_a = this.controller.formState.get(inputField.name)) === null || _a === void 0 ? void 0 : _a.toString()) || '';
            inputField.onkeydown = this.updateFormFields(inputField);
            inputField.onchange = this.updateFormFields(inputField);
            inputField.onblur = this.updateFormFields(inputField);
        });
    }
    updateFormFields(inputField) {
        return () => (this.controller.formState.set(inputField.name, inputField.value));
    }
    fillPlaceholders() {
        const placeholders = this.queryAll('[data-residuo]');
        placeholders.forEach(placeholder => {
            const key = placeholder.dataset.residuo;
            if (placeholder.nodeName === 'UL') {
                const contents = this.getSelectedResidue()[key];
                !contents ? placeholder.previousElementSibling.remove() :
                    placeholder.innerHTML = this.toMarkupList(contents);
            }
            else {
                placeholder.innerHTML = this.getSelectedResidue()[key];
            }
        });
    }
    toMarkupList(args) {
        return args.map(({ exemplo }) => (`
            <li>${exemplo}</li>
        `)).join(' ');
    }
}


/***/ }),

/***/ "./src/sections/IndustriesSection.ts":
/*!*******************************************!*\
  !*** ./src/sections/IndustriesSection.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndustriesSection; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/sections/Section.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");


class IndustriesSection extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onMount() {
        super.onMount();
        console.log(`\t\t[ IndustriesSection ] Running: mount() -> ${this.name}`);
        this.appendIndustriesCards();
    }
    appendIndustriesCards() {
        const industries = this.extractIndustriesFrom(this.controller.data);
        const cards = this.query('.section__cards');
        const markup = Array.from(industries).map(([key, name]) => (this.toMarkup(key, name, _utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].RESIDUOS)));
        cards.innerHTML = markup.join(' ');
    }
    extractIndustriesFrom(data) {
        const extractMap = (acc, curr) => {
            Object.keys(curr).forEach(key => (acc.set(key, curr[key])));
            return acc;
        };
        return data.map(residuo => residuo.industrias)
            .reduce(extractMap, new Map());
    }
    toMarkup(key, name, action) {
        return (`
            <a href="#" class="card-residuo" data-card="${key}" data-action="${action}">
                <div class="card-residuo-conteudo">
                    <div class="card-residuo-frente">
                        <img class="card-residuo-icone"
                            src="http://gruporodocon.com.br/residuos3/wp-content/uploads/2020/01/comum.svg">
                        <h3>${name}</h3>
                    </div>
                </div>
            </a>
        `);
    }
}


/***/ }),

/***/ "./src/sections/ResiduesSection.ts":
/*!*****************************************!*\
  !*** ./src/sections/ResiduesSection.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResiduesSection; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/sections/Section.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");


class ResiduesSection extends _Section__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onMount() {
        super.onMount();
        console.log(`\t\t[ ResiduesSection ] Running: mount() -> ${this.name}`);
        const filter = this.chooseFilter();
        this.appendResiduesCards(filter);
    }
    chooseFilter() {
        const { formState } = this.controller;
        const hasSelectedIndustry = formState.has(_utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].INDUSTRIAS);
        let filter = () => true;
        if (hasSelectedIndustry) {
            const selectedIndustry = formState.get(_utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].INDUSTRIAS);
            filter = this.belongsTo(selectedIndustry);
        }
        if (formState.get(_utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].SERVICOS) === 'tratamento-de-residuos') {
            filter = this.hasTreatment();
        }
        return filter;
    }
    hasTreatment() {
        return (residuo) => residuo.tratamento;
    }
    belongsTo(industry) {
        return (residuo) => {
            const industrias = Object.keys(residuo.industrias);
            return industrias.includes(industry.toString());
        };
    }
    appendResiduesCards(filter) {
        const { data } = this.controller;
        const cards = this.query('.section__cards');
        const markup = data.filter(filter).map(residuo => (this.toMarkup(residuo.slug, residuo.nome, _utils_enums__WEBPACK_IMPORTED_MODULE_1__["Sections"].CALCULO_MONTANTE)));
        cards.innerHTML = markup.join(' ');
    }
    toMarkup(key, name, action) {
        return (`
            <a href="#" class="card-residuo" data-card="${key}" data-action="${action}">
                <div class="card-residuo-conteudo">
                    <div class="card-residuo-frente">
                        <img class="card-residuo-icone"
                            src="http://gruporodocon.com.br/residuos3/wp-content/uploads/2020/01/comum.svg">
                        <h3>${name}</h3>
                    </div>
                </div>
            </a>
        `);
    }
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
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");

class Section {
    constructor(name) {
        console.log(`Creating [Section]: constructor() -> ${name}`);
        this.name = name;
        this.rootElement = document.querySelector(`[data-section=${this.name}]`);
    }
    mount() {
        console.log(`\tRunning: mount() -> ${this.name}`);
        this.rootElement.classList.add('active');
        this.onMount();
        this.setActionClickEvents();
        if (this.name === _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].REVISE_PEDIDO) {
            this.bindFormData();
            this.query('[data-new]').onclick = () => this.newQuote();
        }
    }
    newQuote() {
        this.controller.addNewQuote();
    }
    bindFormData() {
        var _a;
        const residuo = this.query('[data-bind="residuo"]');
        const frequencia = this.query('[data-bind="frequencia"]');
        const recipiente = this.query('[data-bind="recipiente"]');
        const contato = this.query('[data-bind="contato"]');
        const { formState } = this.controller;
        const selected = this.getSelectedResidue();
        residuo.innerHTML = selected.nome;
        frequencia.innerHTML = `${formState.get('frequencia')}x por ${formState.get('periodo')}`;
        recipiente.innerHTML = ((_a = formState.get('recipiente')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
        contato.innerHTML = `
            ${formState.get('nome')}<br>
            ${formState.get('telefone')}<br>
            ${formState.get('empresa')}<br>
            ${formState.get('endereco')}
        `;
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
    query(selector) {
        return this.rootElement.querySelector(selector);
    }
    queryAll(selector) {
        return this.rootElement.querySelectorAll(selector);
    }
    setActionClickEvents() {
        console.log(`\tRunning: addActionsEvent() -> ${this.name}`);
        this.queryAll('[data-action]').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault();
                this.controller.formState.set(this.name, element.dataset.card);
                this.controller.moveTo(element.dataset.action);
                this.controller.formState.forEach((value, key) => {
                    console.log(`${key} => ${value}`);
                });
            });
        });
    }
    getSelectedResidue() {
        const slug = this.controller.formState.get(_utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS).toString();
        return this.controller.data.find(residuo => residuo.slug === slug);
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
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section */ "./src/sections/Section.ts");
/* harmony import */ var _IndustriesSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndustriesSection */ "./src/sections/IndustriesSection.ts");
/* harmony import */ var _ResiduesSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResiduesSection */ "./src/sections/ResiduesSection.ts");
/* harmony import */ var _FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormSection */ "./src/sections/FormSection.ts");
/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/Form */ "./src/form/Form.ts");






class SectionsController {
    constructor(formManager, data) {
        this.sections = new Map();
        console.log('Creating [SectionsController]: constructor()');
        this.manager = formManager;
        this.data = data;
    }
    get formState() {
        return this.manager.formState;
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
    querySections(...names) {
        console.log(`\tRunning: createSections() -> size(${names.length})`);
        return names.map(name => {
            switch (name) {
                case _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INDUSTRIAS:
                    return new _IndustriesSection__WEBPACK_IMPORTED_MODULE_2__["default"](name);
                case _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS:
                    return new _ResiduesSection__WEBPACK_IMPORTED_MODULE_3__["default"](name);
                case _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].CALCULO_MONTANTE:
                case _utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].INFO_PESSOAIS:
                    return new _FormSection__WEBPACK_IMPORTED_MODULE_4__["default"](name);
                default:
                    return new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](name);
            }
        });
    }
    appendSections(...sections) {
        console.log(`\tRunning: appendSections() -> size(${sections.length})`);
        sections.forEach(section => {
            section.controller = this;
            this.sections.set(section.name, section);
        });
    }
    addNewQuote() {
        this.manager.add(this.manager.active);
        const form = new _form_Form__WEBPACK_IMPORTED_MODULE_5__["default"]();
        form.formState.set('nome', this.formState.get('nome'));
        form.formState.set('empresa', this.formState.get('empresa'));
        form.formState.set('telefone', this.formState.get('telefone'));
        form.formState.set('cnpj', this.formState.get('cnpj'));
        form.formState.set('email', this.formState.get('email'));
        form.formState.set('cep', this.formState.get('cep'));
        form.formState.set('endereco', this.formState.get('endereco'));
        form.formState.set('numero', this.formState.get('numero'));
        form.formState.set('complemento', this.formState.get('complemento'));
        this.manager.setActive(form);
        this.moveTo(_utils_enums__WEBPACK_IMPORTED_MODULE_0__["Sections"].RESIDUOS);
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