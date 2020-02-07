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
/* harmony import */ var _observers_sections_InformacoesUsuarioSectionObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers/sections/InformacoesUsuarioSectionObserver */ "./src/observers/sections/InformacoesUsuarioSectionObserver.ts");
/* harmony import */ var _observers_TratamentoObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers/TratamentoObserver */ "./src/observers/TratamentoObserver.ts");
/* harmony import */ var _observers_sections_CalculoMontanteSectionObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers/sections/CalculoMontanteSectionObserver */ "./src/observers/sections/CalculoMontanteSectionObserver.ts");
/* harmony import */ var _observers_sections_ResiduosCardsSectionObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers/sections/ResiduosCardsSectionObserver */ "./src/observers/sections/ResiduosCardsSectionObserver.ts");
/* harmony import */ var _observers_sections_ServicoSelectorSectionObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers/sections/ServicoSelectorSectionObserver */ "./src/observers/sections/ServicoSelectorSectionObserver.ts");
/* harmony import */ var _observers_sections_IndustriaSelectorSectionObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers/sections/IndustriaSelectorSectionObserver */ "./src/observers/sections/IndustriaSelectorSectionObserver.ts");
/* harmony import */ var _observers_sections_ModeSelectorSectionObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers/sections/ModeSelectorSectionObserver */ "./src/observers/sections/ModeSelectorSectionObserver.ts");
/* harmony import */ var _observers_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers/GlobalState */ "./src/observers/GlobalState.ts");
/* harmony import */ var _observers_IndustriasObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers/IndustriasObserver */ "./src/observers/IndustriasObserver.ts");
/* harmony import */ var _observers_AsideObserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observers/AsideObserver */ "./src/observers/AsideObserver.ts");










const state = new _observers_GlobalState__WEBPACK_IMPORTED_MODULE_7__["GlobalState"]();
const modeObserver = new _observers_sections_ModeSelectorSectionObserver__WEBPACK_IMPORTED_MODULE_6__["ModeSelectorSectionObserver"]('[data-secao=modo]');
const industriaSelectorObserver = new _observers_sections_IndustriaSelectorSectionObserver__WEBPACK_IMPORTED_MODULE_5__["IndustriaSelectorSectionObserver"]('[data-secao=seletor-industria]');
const servicoSelectorObserver = new _observers_sections_ServicoSelectorSectionObserver__WEBPACK_IMPORTED_MODULE_4__["ServicoSelectorSectionObserver"]('[data-secao=seletor-servico]');
const residuosObserver = new _observers_sections_ResiduosCardsSectionObserver__WEBPACK_IMPORTED_MODULE_3__["ResiduosCardsSectionObserver"]('[data-secao=residuos]');
const calculoMontanteObserver = new _observers_sections_CalculoMontanteSectionObserver__WEBPACK_IMPORTED_MODULE_2__["CalculoMontanteSectionObserver"]('[data-secao=calculo-montante]');
const industriasObserver = new _observers_IndustriasObserver__WEBPACK_IMPORTED_MODULE_8__["IndustriasObserver"](residuosObserver.section);
const informacoesUsuarioObserver = new _observers_sections_InformacoesUsuarioSectionObserver__WEBPACK_IMPORTED_MODULE_0__["InformacoesUsuarioSectionObserver"]('[data-secao=informacoes-usuario]');
const tratamentoObserver = new _observers_TratamentoObserver__WEBPACK_IMPORTED_MODULE_1__["TratamentoObserver"](residuosObserver.section);
const asideObserver = new _observers_AsideObserver__WEBPACK_IMPORTED_MODULE_9__["AsideObserver"]('[data-secao] aside');
state.addObserver(modeObserver, industriaSelectorObserver, servicoSelectorObserver, residuosObserver, calculoMontanteObserver, industriasObserver, informacoesUsuarioObserver, tratamentoObserver, asideObserver);
residuosObserver.cards.forEach(card => {
    card.addEventListener('click', () => {
        const { residuo } = card.dataset;
        state.updateState({ residuo });
    });
});
modeObserver.buttons.forEach(button => {
    button.addEventListener('click', () => {
        const { modo } = button.dataset;
        state.reset();
        state.updateState({ modo });
    });
});
industriaSelectorObserver.selectElement.addEventListener('change', function () {
    const industria = this.value;
    state.updateState({ industria });
});
servicoSelectorObserver.selectElement.addEventListener('change', function () {
    const servico = this.value;
    state.updateState({ servico });
});


/***/ }),

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/*! exports provided: slug, transformToList, removeAllChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToList", function() { return transformToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllChildren", function() { return removeAllChildren; });
function slug(str) {
    let result = str.replace(/^\s+|\s+$/g, '');
    result = result.toLowerCase();
    const from = 'ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
        result = result.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    result = result.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return result;
}
function transformToList(arr) {
    if (arr) {
        const list = arr.map(item => {
            const li = document.createElement('li');
            li.textContent = item.exemplo;
            return li;
        });
        return list;
    }
}
function removeAllChildren(asideExemplosList) {
    if (asideExemplosList.hasChildNodes) {
        while (asideExemplosList.firstChild) {
            asideExemplosList.removeChild(asideExemplosList.firstChild);
        }
    }
}


/***/ }),

/***/ "./src/observers/AsideObserver.ts":
/*!****************************************!*\
  !*** ./src/observers/AsideObserver.ts ***!
  \****************************************/
/*! exports provided: AsideObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideObserver", function() { return AsideObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class AsideObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
        this.title = this.section.querySelector('.residuo-info__titulo');
        this.examples = this.section.querySelector('.residuo-info__exemplos');
        this.destination = this.section.querySelector('.residuo-info__destinacao');
    }
    update(state) {
        if (state.residuo) {
            const residuo = state.dados.find(res => res.slug === state.residuo);
            this.removeAllChildren(this.examples);
            this.title.textContent = residuo.nome;
            this.destination.textContent = residuo.destinacao;
            if (residuo.exemplos) {
                this.addExamplesFrom(residuo);
            }
        }
    }
    addExamplesFrom(residuo) {
        this.examples.insertAdjacentHTML('beforeend', this.examplesToList(residuo.exemplos).join(' '));
    }
    examplesToList(arr) {
        return arr.map(item => `<li>${item.exemplo}</li>`);
    }
}


/***/ }),

/***/ "./src/observers/GenericObserver.ts":
/*!******************************************!*\
  !*** ./src/observers/GenericObserver.ts ***!
  \******************************************/
/*! exports provided: GenericObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObserver", function() { return GenericObserver; });
class GenericObserver {
    update(state) { }
    addActiveClass(element) {
        console.log(element);
        element.classList.add('active');
    }
    removeActiveClass(element) {
        element.classList.remove('active');
    }
    removeAllChildren(asideExemplosList) {
        if (asideExemplosList.hasChildNodes) {
            while (asideExemplosList.firstChild) {
                asideExemplosList.removeChild(asideExemplosList.firstChild);
            }
        }
    }
}


/***/ }),

/***/ "./src/observers/GlobalState.ts":
/*!**************************************!*\
  !*** ./src/observers/GlobalState.ts ***!
  \**************************************/
/*! exports provided: GlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalState", function() { return GlobalState; });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");

class GlobalState {
    constructor() {
        this.state = {
            modo: '',
            industria: '',
            residuo: '',
            servico: '',
            dados: []
        };
        this.observers = [];
        this.getDataFromApi();
    }
    getDataFromApi() {
        fetch('http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45')
            .then(res => res.json())
            .then(data => data.acf.card_residuo)
            .then(data => data.map(residuo => ({ ...residuo, slug: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["slug"])(residuo.nome) })))
            .then(data => this.state.dados = data)
            .then(() => console.log('Data loaded successfully'))
            .then(() => this.notify())
            .catch(err => console.log(err));
    }
    updateState(data) {
        Object.keys(data).forEach(field => {
            this.state[field] = this.state[field] === data[field] ? '' : data[field];
        });
        this.notify();
        console.log(this.state);
    }
    addObserver(...observers) {
        this.observers.push(...observers);
    }
    notify() {
        this.observers.forEach(observer => observer.update(this.state));
    }
    reset() {
        this.state.industria = '';
        this.state.servico = '';
        this.state.residuo = null;
    }
}


/***/ }),

/***/ "./src/observers/IndustriasObserver.ts":
/*!*********************************************!*\
  !*** ./src/observers/IndustriasObserver.ts ***!
  \*********************************************/
/*! exports provided: IndustriasObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriasObserver", function() { return IndustriasObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");


class IndustriasObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(residuosSection) {
        super();
        this.residuosCards = Array.from(residuosSection.querySelectorAll('[data-residuo]'));
    }
    update(state) {
        this.residuosCards.forEach(card => {
            var _a;
            const residuo = state.dados.find(res => res.slug === card.dataset.residuo);
            const industrias = (_a = residuo) === null || _a === void 0 ? void 0 : _a.industrias.map(industria => Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["slug"])(industria));
            if (residuo && state.industria && industrias.includes(state.industria)) {
                this.addActiveClass(card);
            }
            else {
                this.removeActiveClass(card);
            }
        });
    }
}


/***/ }),

/***/ "./src/observers/TratamentoObserver.ts":
/*!*********************************************!*\
  !*** ./src/observers/TratamentoObserver.ts ***!
  \*********************************************/
/*! exports provided: TratamentoObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TratamentoObserver", function() { return TratamentoObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class TratamentoObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(residuosSection) {
        super();
        this.residuosCards = Array.from(residuosSection.querySelectorAll('[data-residuo]'));
    }
    update(state) {
        if (state.servico === 'tratamento-de-residuos') {
            this.residuosCards.forEach(residuo => {
                const data = state.dados.find(res => res.slug === residuo.dataset.residuo);
                if (data && data.tratamento) {
                    this.addActiveClass(residuo);
                }
                else {
                    this.removeActiveClass(residuo);
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/observers/sections/CalculoMontanteSectionObserver.ts":
/*!******************************************************************!*\
  !*** ./src/observers/sections/CalculoMontanteSectionObserver.ts ***!
  \******************************************************************/
/*! exports provided: CalculoMontanteSectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoMontanteSectionObserver", function() { return CalculoMontanteSectionObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericObserver */ "./src/observers/GenericObserver.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/helpers/helpers.ts");


class CalculoMontanteSectionObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
        this.acondicionamentoSelect = this.section.querySelector('select#acondicionamento');
        this.form = this.section.querySelector('form');
        this.form.addEventListener('submit', event => {
            event.preventDefault();
        });
    }
    update(state) {
        if (state.residuo) {
            this.addActiveClass(this.section);
            this.addSelectOptions(state);
        }
        else {
            this.removeActiveClass(this.section);
        }
    }
    addSelectOptions(state) {
        const residuo = state.dados.find(res => res.slug === state.residuo);
        const options = residuo.containers[0].container.map(this.generateContainerOptions);
        this.removeAllChildren(this.acondicionamentoSelect);
        this.acondicionamentoSelect.append(...options);
    }
    generateContainerOptions(container) {
        const opt = document.createElement('option');
        opt.value = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["slug"])(container);
        opt.textContent = container;
        return opt;
    }
}


/***/ }),

/***/ "./src/observers/sections/IndustriaSelectorSectionObserver.ts":
/*!********************************************************************!*\
  !*** ./src/observers/sections/IndustriaSelectorSectionObserver.ts ***!
  \********************************************************************/
/*! exports provided: IndustriaSelectorSectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriaSelectorSectionObserver", function() { return IndustriaSelectorSectionObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericObserver */ "./src/observers/GenericObserver.ts");

class IndustriaSelectorSectionObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(seletor) {
        super();
        this.section = document.querySelector(seletor);
        this.selectElement = this.section.querySelector('select');
    }
    update(state) {
        if (state.modo === 'industria') {
            this.addActiveClass(this.section);
        }
        else {
            this.removeActiveClass(this.section);
        }
    }
}


/***/ }),

/***/ "./src/observers/sections/InformacoesUsuarioSectionObserver.ts":
/*!*********************************************************************!*\
  !*** ./src/observers/sections/InformacoesUsuarioSectionObserver.ts ***!
  \*********************************************************************/
/*! exports provided: InformacoesUsuarioSectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesUsuarioSectionObserver", function() { return InformacoesUsuarioSectionObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericObserver */ "./src/observers/GenericObserver.ts");

class InformacoesUsuarioSectionObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
    }
    update(state) {
        switch (state.servico) {
            case 'remocao-de-lodo':
            case 'limpeza-de-fossa-septica':
            case 'pgrs':
                this.addActiveClass(this.section);
                break;
            default:
                this.removeActiveClass(this.section);
        }
    }
}


/***/ }),

/***/ "./src/observers/sections/ModeSelectorSectionObserver.ts":
/*!***************************************************************!*\
  !*** ./src/observers/sections/ModeSelectorSectionObserver.ts ***!
  \***************************************************************/
/*! exports provided: ModeSelectorSectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeSelectorSectionObserver", function() { return ModeSelectorSectionObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericObserver */ "./src/observers/GenericObserver.ts");

class ModeSelectorSectionObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
        this.buttons = Array.from(this.section.querySelectorAll('[data-modo]'));
    }
    update(state) {
        if (state.dados) {
            this.addActiveClass(this.section);
        }
        else {
            this.removeActiveClass(this.section);
        }
    }
}


/***/ }),

/***/ "./src/observers/sections/ResiduosCardsSectionObserver.ts":
/*!****************************************************************!*\
  !*** ./src/observers/sections/ResiduosCardsSectionObserver.ts ***!
  \****************************************************************/
/*! exports provided: ResiduosCardsSectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResiduosCardsSectionObserver", function() { return ResiduosCardsSectionObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericObserver */ "./src/observers/GenericObserver.ts");

class ResiduosCardsSectionObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
        this.cards = Array.from(this.section.querySelectorAll('[data-residuo]'));
    }
    update(state) {
        if (state.modo === 'residuos' || (state.industria || state.servico)) {
            this.addActiveClass(this.section);
        }
        else {
            this.removeActiveClass(this.section);
        }
    }
}


/***/ }),

/***/ "./src/observers/sections/ServicoSelectorSectionObserver.ts":
/*!******************************************************************!*\
  !*** ./src/observers/sections/ServicoSelectorSectionObserver.ts ***!
  \******************************************************************/
/*! exports provided: ServicoSelectorSectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoSelectorSectionObserver", function() { return ServicoSelectorSectionObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericObserver */ "./src/observers/GenericObserver.ts");

class ServicoSelectorSectionObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
        this.selectElement = this.section.querySelector('select');
    }
    update(state) {
        if (state.modo === 'servicos') {
            this.addActiveClass(this.section);
        }
        else {
            this.removeActiveClass(this.section);
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map