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



const { buttons, industriasSeletor, servicosSeletor, residuosItems } = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["getDOMElements"])();
const state = Object(_helpers_state__WEBPACK_IMPORTED_MODULE_1__["onChange"])(Object(_handlers__WEBPACK_IMPORTED_MODULE_0__["default"])());
window.addEventListener('load', () => {
    fetch('http://gruporodocon.com.br/residuos2/wp-json/wp/v2/pages/45')
        .then(res => res.json())
        .then(data => state.data = data.acf.card_residuo)
        .then(() => console.log('Data loaded successfully'))
        .catch(err => console.log(err));
});
buttons.forEach(button => button.addEventListener('click', () => {
    const { type } = button.dataset;
    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["reset"])(state);
    type === state.selectedFilter ?
        state.selectedFilter = '' :
        state.selectedFilter = type;
}));
industriasSeletor.addEventListener('change', () => {
    state.industry = industriasSeletor.value;
});
servicosSeletor.addEventListener('change', () => {
    state.service = servicosSeletor.value;
});
residuosItems.forEach(residuo => {
    residuo.addEventListener('click', () => {
        const { residuo: selectedResiduo } = residuo.dataset;
        selectedResiduo === state.residue ?
            state.residue = '' :
            state.residue = selectedResiduo;
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
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helpers */ "./src/helpers/helpers.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/constants */ "./src/helpers/constants.ts");


const { filterContainer, industriaSeletorContainer, servicoSeletorContainer, residuosContainer, calculoMontanteContainer, residuosItems, asideResiduoInfo, informacoesUsuarioContainer } = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["getDOMElements"])();
function handleContainerVisibility(condition) {
    return function (currentState) {
        if (condition(currentState)) {
            return Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["show"])(this);
        }
        Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["hide"])(this);
    };
}
/* harmony default export */ __webpack_exports__["default"] = (() => [
    handleContainerVisibility(dataLoaded()).bind(filterContainer),
    handleContainerVisibility(state => isFilteredBy(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].INDUSTRIA, state))
        .bind(industriaSeletorContainer),
    handleContainerVisibility(state => isFilteredBy(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].SERVICOS, state))
        .bind(servicoSeletorContainer),
    handleContainerVisibility(state => isFilteredBy(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].RESIDUOS, state) ||
        (Boolean(state.industry) || Boolean(state.service))).bind(residuosContainer),
    handleContainerVisibility(state => Boolean(state.residue))
        .bind(calculoMontanteContainer),
    handleIndustrias,
    (state) => {
        if (state.residue) {
            const asideTitle = asideResiduoInfo.querySelector('.residuo-info__titulo');
            const asideExemplosList = asideResiduoInfo.querySelector('.residuo-info__exemplos');
            const asideDestinacaoList = asideResiduoInfo.querySelector('.residuo-info__destinacao');
            const residuo = getResiduo(state.residue, state);
            asideTitle.textContent = residuo.nome;
            Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["removeAllChildren"])(asideExemplosList);
            if (residuo.exemplos) {
                asideExemplosList.append(...Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["transformToList"])(residuo.exemplos));
            }
            asideDestinacaoList.textContent = residuo.destinacao;
        }
    },
    (state) => {
        if (state.service === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].TRATAMENTO_RESIDUOS) {
            residuosItems.forEach(residuo => {
                const data = getResiduo(residuo.dataset.residuo, state);
                if (data && data.tratamento) {
                    residuo.classList.add(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].ATIVO);
                }
                else {
                    residuo.classList.remove(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].ATIVO);
                }
            });
        }
    },
    (state) => {
        switch (state.service) {
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].REMOCAO_LODO:
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].LIMPEZA_FOSSA_SEPTICA:
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].PGRS:
                Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["show"])(informacoesUsuarioContainer);
                break;
            default:
                Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["hide"])(informacoesUsuarioContainer);
        }
    },
    (state) => {
        if (state.residue) {
            const select = calculoMontanteContainer.querySelector('select#acondicionamento');
            const residuo = getResiduo(state.residue, state);
            const options = residuo.containers[0].container.map(generateContainerOptions);
            Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["removeAllChildren"])(select);
            select.append(...options);
        }
    }
]);
function generateContainerOptions(container) {
    const opt = document.createElement('option');
    opt.value = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["slug"])(container);
    opt.textContent = container;
    return opt;
}
function handleIndustrias(state) {
    residuosItems.forEach(residuo => {
        const data = getResiduo(residuo.dataset.residuo, state);
        const industrias = data ? data.industrias.map((i) => Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["slug"])(i)) : [];
        if (data && state.industry && industrias.includes(state.industry)) {
            residuo.classList.add(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].ATIVO);
        }
        else {
            residuo.classList.remove(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__["types"].ATIVO);
        }
    });
}
function getResiduo(residuo, state) {
    return state.data.find(r => Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["slug"])(r.nome) === residuo);
}
function dataLoaded() {
    return (state) => Boolean(state.data);
}
function isFilteredBy(filter, state) {
    return state.selectedFilter && state.selectedFilter === filter;
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
/*! exports provided: hide, show, getDOMElements, slug, transformToList, removeAllChildren, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDOMElements", function() { return getDOMElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToList", function() { return transformToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllChildren", function() { return removeAllChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
function hide(element) {
    element.classList.remove('active');
}
function show(element) {
    element.classList.add('active');
}
function getDOMElements() {
    const elements = {
        filterContainer: document.querySelector('[data-container=filtro]'),
        industriaSeletorContainer: document.querySelector('[data-container=seletor-industria]'),
        servicoSeletorContainer: document.querySelector('[data-container=seletor-servico]'),
        residuosContainer: document.querySelector('[data-container=residuos]'),
        calculoMontanteContainer: document.querySelector('[data-container=calculo-montante]'),
        industriasSeletor: document.querySelector('[data-container=seletor-industria] select'),
        servicosSeletor: document.querySelector('[data-container=seletor-servico] select'),
        buttons: Array.from(document.querySelectorAll('[data-container] button')),
        residuosItems: Array.from(document.querySelectorAll('[data-residuo]')),
        informacoesUsuarioContainer: document.querySelector('[data-container=informacoes-usuario]'),
        asideResiduoInfo: document.querySelector('aside.residuo-info')
    };
    return elements;
}
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
    state.industry = '';
    state.service = '';
    state.residue = '';
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
        selectedFilter: '',
        industry: '',
        residue: '',
        service: '',
        data: []
    };
    return new Proxy(state, {
        set(currentState, key, value) {
            currentState[key] = value;
            callbacks.forEach((cb) => {
                cb(currentState);
            });
            return true;
        }
    });
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map