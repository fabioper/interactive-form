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
/* harmony import */ var _observers_InformacoesUsuarioObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers/InformacoesUsuarioObserver */ "./src/observers/InformacoesUsuarioObserver.ts");
/* harmony import */ var _observers_TratamentoObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers/TratamentoObserver */ "./src/observers/TratamentoObserver.ts");
/* harmony import */ var _observers_CalculoMontanteObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers/CalculoMontanteObserver */ "./src/observers/CalculoMontanteObserver.ts");
/* harmony import */ var _observers_ResiduosObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers/ResiduosObserver */ "./src/observers/ResiduosObserver.ts");
/* harmony import */ var _observers_ServicoSelectorObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers/ServicoSelectorObserver */ "./src/observers/ServicoSelectorObserver.ts");
/* harmony import */ var _observers_IndustriaSelectorObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers/IndustriaSelectorObserver */ "./src/observers/IndustriaSelectorObserver.ts");
/* harmony import */ var _observers_ModeObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers/ModeObserver */ "./src/observers/ModeObserver.ts");
/* harmony import */ var _observers_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers/GlobalState */ "./src/observers/GlobalState.ts");
/* harmony import */ var _observers_IndustriasObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers/IndustriasObserver */ "./src/observers/IndustriasObserver.ts");









const state = new _observers_GlobalState__WEBPACK_IMPORTED_MODULE_7__["GlobalState"]();
const modeObserver = new _observers_ModeObserver__WEBPACK_IMPORTED_MODULE_6__["ModeObserver"]('[data-secao=modo]');
const industriaSelectorObserver = new _observers_IndustriaSelectorObserver__WEBPACK_IMPORTED_MODULE_5__["IndustriaSelectorObserver"]('[data-secao=seletor-industria]');
const servicoSelectorObserver = new _observers_ServicoSelectorObserver__WEBPACK_IMPORTED_MODULE_4__["ServicoSelectorObserver"]('[data-secao=seletor-servico]');
const residuosObserver = new _observers_ResiduosObserver__WEBPACK_IMPORTED_MODULE_3__["ResiduosObserver"]('[data-secao=residuos]');
const calculoMontanteObserver = new _observers_CalculoMontanteObserver__WEBPACK_IMPORTED_MODULE_2__["CalculoMontanteObserver"]('[data-secao=calculo-montante]');
const industriasObserver = new _observers_IndustriasObserver__WEBPACK_IMPORTED_MODULE_8__["IndustriasObserver"](residuosObserver.section);
const informacoesUsuarioObserver = new _observers_InformacoesUsuarioObserver__WEBPACK_IMPORTED_MODULE_0__["InformacoesUsuarioObserver"]('[data-secao=informacoes-usuario]');
const tratamentoObserver = new _observers_TratamentoObserver__WEBPACK_IMPORTED_MODULE_1__["TratamentoObserver"](residuosObserver.section);
state.addObserver(modeObserver, industriaSelectorObserver, servicoSelectorObserver, residuosObserver, calculoMontanteObserver, industriasObserver, informacoesUsuarioObserver, tratamentoObserver);
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
/*! exports provided: removeActiveClass, addActiveClass, filterContainer, industriaSeletorContainer, servicoSeletorContainer, residuosContainer, calculoMontanteContainer, informacoesUsuarioContainer, asideResiduoInfo, industriasSeletor, servicosSeletor, residuosItems, slug, transformToList, removeAllChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActiveClass", function() { return removeActiveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActiveClass", function() { return addActiveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterContainer", function() { return filterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "industriaSeletorContainer", function() { return industriaSeletorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicoSeletorContainer", function() { return servicoSeletorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "residuosContainer", function() { return residuosContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculoMontanteContainer", function() { return calculoMontanteContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "informacoesUsuarioContainer", function() { return informacoesUsuarioContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asideResiduoInfo", function() { return asideResiduoInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "industriasSeletor", function() { return industriasSeletor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicosSeletor", function() { return servicosSeletor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "residuosItems", function() { return residuosItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToList", function() { return transformToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllChildren", function() { return removeAllChildren; });
function removeActiveClass(element) {
    element.classList.remove('active');
}
function addActiveClass(element) {
    element.classList.add('active');
}
const filterContainer = document.querySelector('[data-secao=modo]');
const industriaSeletorContainer = document.querySelector('[data-secao=seletor-industria]');
const servicoSeletorContainer = document.querySelector('[data-secao=seletor-servico]');
const residuosContainer = document.querySelector('[data-secao=residuos]');
const calculoMontanteContainer = document.querySelector('[data-secao=calculo-montante]');
const informacoesUsuarioContainer = document.querySelector('[data-secao=informacoes-usuario]');
const asideResiduoInfo = document.querySelector('aside.residuo-info');
const industriasSeletor = document.querySelector('[data-secao=seletor-industria] select');
const servicosSeletor = document.querySelector('[data-secao=seletor-servico] select');
const residuosItems = Array.from(document.querySelectorAll('[data-residuo]'));
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

/***/ "./src/observers/CalculoMontanteObserver.ts":
/*!**************************************************!*\
  !*** ./src/observers/CalculoMontanteObserver.ts ***!
  \**************************************************/
/*! exports provided: CalculoMontanteObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoMontanteObserver", function() { return CalculoMontanteObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class CalculoMontanteObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
    }
    update(state) {
        if (state.residuo) {
            this.addActiveClass(this.section);
        }
        else {
            this.removeActiveClass(this.section);
        }
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
            residuo: null,
            servico: '',
            dados: []
        };
        this.observers = [];
        this.getDataFromApi();
    }
    getDataFromApi() {
        fetch('http://gruporodocon.com.br/residuos2/wp-json/wp/v2/pages/45')
            .then(res => res.json())
            .then(data => data.acf.card_residuo)
            .then(data => data.map(residuo => ({ ...residuo, slug: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["slug"])(residuo.nome) })))
            .then(data => this.state.dados = data)
            .then(() => console.log('Data loaded successfully'))
            .then(() => this.notify())
            .catch(err => console.log(err));
    }
    updateState(data) {
        this.state = { ...this.state, ...data };
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

/***/ "./src/observers/IndustriaSelectorObserver.ts":
/*!****************************************************!*\
  !*** ./src/observers/IndustriaSelectorObserver.ts ***!
  \****************************************************/
/*! exports provided: IndustriaSelectorObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriaSelectorObserver", function() { return IndustriaSelectorObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class IndustriaSelectorObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
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

/***/ "./src/observers/InformacoesUsuarioObserver.ts":
/*!*****************************************************!*\
  !*** ./src/observers/InformacoesUsuarioObserver.ts ***!
  \*****************************************************/
/*! exports provided: InformacoesUsuarioObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesUsuarioObserver", function() { return InformacoesUsuarioObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class InformacoesUsuarioObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
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

/***/ "./src/observers/ModeObserver.ts":
/*!***************************************!*\
  !*** ./src/observers/ModeObserver.ts ***!
  \***************************************/
/*! exports provided: ModeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeObserver", function() { return ModeObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class ModeObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
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

/***/ "./src/observers/ResiduosObserver.ts":
/*!*******************************************!*\
  !*** ./src/observers/ResiduosObserver.ts ***!
  \*******************************************/
/*! exports provided: ResiduosObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResiduosObserver", function() { return ResiduosObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class ResiduosObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
    constructor(selector) {
        super();
        this.section = document.querySelector(selector);
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

/***/ "./src/observers/ServicoSelectorObserver.ts":
/*!**************************************************!*\
  !*** ./src/observers/ServicoSelectorObserver.ts ***!
  \**************************************************/
/*! exports provided: ServicoSelectorObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoSelectorObserver", function() { return ServicoSelectorObserver; });
/* harmony import */ var _GenericObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObserver */ "./src/observers/GenericObserver.ts");

class ServicoSelectorObserver extends _GenericObserver__WEBPACK_IMPORTED_MODULE_0__["GenericObserver"] {
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


/***/ })

/******/ });
//# sourceMappingURL=app.js.map