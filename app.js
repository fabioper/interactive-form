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
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ "./src/handlers.ts");
/* harmony import */ var _helpers_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/state */ "./src/helpers/state.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/helpers */ "./src/helpers/helpers.ts");



const state = Object(_helpers_state__WEBPACK_IMPORTED_MODULE_1__["onChange"])(Object(_handlers__WEBPACK_IMPORTED_MODULE_0__["default"])());
window.addEventListener('load', () => {
    fetch('http://gruporodocon.com.br/residuos2/wp-json/wp/v2/pages/45')
        .then(res => res.json())
        .then(data => state.dados = data.acf.card_residuo)
        .then(() => console.log('Data loaded successfully'))
        .catch(err => console.log(err));
});
_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["buttons"].forEach(button => button.addEventListener('click', () => {
    const { modo: modoSelecionado } = button.dataset;
    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["reset"])(state);
    modoSelecionado === state.filtro ?
        state.filtro = '' :
        state.filtro = modoSelecionado;
}));
_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["industriasSeletor"].addEventListener('change', () => {
    state.industria = _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["industriasSeletor"].value;
});
_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["servicosSeletor"].addEventListener('change', () => {
    state.servico = _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["servicosSeletor"].value;
});
_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["residuosItems"].forEach(residuo => {
    residuo.addEventListener('click', () => {
        const { residuo: residuoSelecionado } = residuo.dataset;
        residuoSelecionado === state.residuo ?
            state.residuo = '' :
            state.residuo = residuoSelecionado;
    });
});


/***/ }),

/***/ "./src/handlers.ts":
/*!*************************!*\
  !*** ./src/handlers.ts ***!
  \*************************/
/*! exports provided: handleContainerVisibility, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleContainerVisibility", function() { return handleContainerVisibility; });
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/constants */ "./src/helpers/constants.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/helpers */ "./src/helpers/helpers.ts");


function handleContainerVisibility(condition) {
    return function (currentState) {
        if (condition(currentState)) {
            return Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["addActiveClass"])(this);
        }
        Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["removeActiveClass"])(this);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (() => [
    handleContainerVisibility(dataLoaded()).bind(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["filterContainer"]),
    handleContainerVisibility(state => isFilteredBy(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].INDUSTRIA, state))
        .bind(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["industriaSeletorContainer"]),
    handleContainerVisibility(state => isFilteredBy(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].SERVICOS, state))
        .bind(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["servicoSeletorContainer"]),
    handleContainerVisibility(state => isFilteredBy(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].RESIDUOS, state) ||
        (Boolean(state.industria) || Boolean(state.servico))).bind(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["residuosContainer"]),
    handleContainerVisibility(state => Boolean(state.residuo))
        .bind(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["calculoMontanteContainer"]),
    handleIndustrias,
    (state) => {
        if (state.residuo) {
            const asideTitle = _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["asideResiduoInfo"].querySelector('.residuo-info__titulo');
            const asideExemplosList = _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["asideResiduoInfo"].querySelector('.residuo-info__exemplos');
            const asideDestinacaoList = _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["asideResiduoInfo"].querySelector('.residuo-info__destinacao');
            const residuo = getResiduo(state.residuo, state);
            asideTitle.textContent = residuo.nome;
            Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["removeAllChildren"])(asideExemplosList);
            if (residuo.exemplos) {
                asideExemplosList.append(...Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["transformToList"])(residuo.exemplos));
            }
            asideDestinacaoList.textContent = residuo.destinacao;
        }
    },
    (state) => {
        if (state.servico === _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].TRATAMENTO_RESIDUOS) {
            _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["residuosItems"].forEach(residuo => {
                const data = getResiduo(residuo.dataset.residuo, state);
                if (data && data.tratamento) {
                    residuo.classList.add(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ATIVO);
                }
                else {
                    residuo.classList.remove(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ATIVO);
                }
            });
        }
    },
    (state) => {
        switch (state.servico) {
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].REMOCAO_LODO:
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].LIMPEZA_FOSSA_SEPTICA:
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].PGRS:
                Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["addActiveClass"])(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["informacoesUsuarioContainer"]);
                break;
            default:
                Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["removeActiveClass"])(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["informacoesUsuarioContainer"]);
        }
    },
    (state) => {
        if (state.residuo) {
            const select = _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["calculoMontanteContainer"].querySelector('select#acondicionamento');
            const residuo = getResiduo(state.residuo, state);
            const options = residuo.containers[0].container.map(generateContainerOptions);
            Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["removeAllChildren"])(select);
            select.append(...options);
        }
    }
]);
function generateContainerOptions(container) {
    const opt = document.createElement('option');
    opt.value = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["slug"])(container);
    opt.textContent = container;
    return opt;
}
function handleIndustrias(state) {
    _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["residuosItems"].forEach(residuo => {
        const data = getResiduo(residuo.dataset.residuo, state);
        const industrias = data ? data.industrias.map((i) => Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["slug"])(i)) : [];
        if (data && state.industria && industrias.includes(state.industria)) {
            residuo.classList.add(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ATIVO);
        }
        else {
            residuo.classList.remove(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["types"].ATIVO);
        }
    });
}
function getResiduo(residuo, state) {
    return state.dados.find(r => Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["slug"])(r.nome) === residuo);
}
function dataLoaded() {
    return (state) => Boolean(state.dados);
}
function isFilteredBy(filter, state) {
    return state.filtro && state.filtro === filter;
}


/***/ }),

/***/ "./src/helpers/constants.ts":
/*!**********************************!*\
  !*** ./src/helpers/constants.ts ***!
  \**********************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
var types;
(function (types) {
    types["INDUSTRIA"] = "industria";
    types["RESIDUOS"] = "residuos";
    types["SERVICOS"] = "servicos";
    types["ATIVO"] = "active";
    types["GESTAO_RESIDUOS"] = "gestao-de-residuos";
    types["TRATAMENTO_RESIDUOS"] = "tratamento-de-residuos";
    types["PGRS"] = "pgrs";
    types["REMOCAO_LODO"] = "remocao-de-lodo";
    types["LIMPEZA_FOSSA_SEPTICA"] = "limpeza-de-fossa-septica";
})(types || (types = {}));


/***/ }),

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/*! exports provided: removeActiveClass, addActiveClass, filterContainer, industriaSeletorContainer, servicoSeletorContainer, residuosContainer, calculoMontanteContainer, informacoesUsuarioContainer, asideResiduoInfo, industriasSeletor, servicosSeletor, buttons, residuosItems, slug, transformToList, removeAllChildren, reset */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "residuosItems", function() { return residuosItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToList", function() { return transformToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllChildren", function() { return removeAllChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
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
const buttons = Array.from(document.querySelectorAll('[data-secao] button'));
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
function reset(state) {
    state.industria = '';
    state.servico = '';
    state.residuo = '';
}


/***/ }),

/***/ "./src/helpers/state.ts":
/*!******************************!*\
  !*** ./src/helpers/state.ts ***!
  \******************************/
/*! exports provided: onChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChange", function() { return onChange; });
function onChange(callbacks) {
    const state = {
        filtro: '',
        industria: '',
        residuo: '',
        servico: '',
        dados: []
    };
    return new Proxy(state, {
        set(state, key, value) {
            state[key] = value;
            callbacks.forEach((cb) => {
                cb(state);
            });
            return true;
        }
    });
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map