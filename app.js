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
/*! exports provided: sections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sections", function() { return sections; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers */ "./src/handlers.ts");



const endpoint = 'http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45';
const sections = document.querySelectorAll('[data-section]');
const actions = document.querySelectorAll('[data-action]');
const industrias = document.querySelectorAll('[data-state-industria]');
const servicos = document.querySelectorAll('[data-state-servico]');
const residuos = document.querySelectorAll('[data-state-residuo]');
const initialState = {
    dados: [],
    formData: new FormData(),
    industria: '',
    modo: '',
    residuo: '',
    servico: '',
    section: null
};
const setSectionUsing = (action) => ((event) => {
    event.preventDefault();
    const section = document.querySelector(`[data-section=${action.dataset.action}]`);
    setState({ section });
});
const addSlugProps = (residuo) => {
    residuo.slug = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["slug"])(residuo.nome);
    residuo.industrias = residuo.industrias.map(_helpers__WEBPACK_IMPORTED_MODULE_1__["slugObject"]);
    return residuo;
};
const fetchData = () => {
    fetch(endpoint).then(response => response.json())
        .then(data => data.acf.card_residuo)
        .then(cards => cards.map(addSlugProps))
        .then(dados => setState({ dados }))
        .then(() => setState({ section: sections.item(0) }));
};
const setState = Object(_state__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, _handlers__WEBPACK_IMPORTED_MODULE_2__["logState"], _handlers__WEBPACK_IMPORTED_MODULE_2__["updateActiveSection"], _handlers__WEBPACK_IMPORTED_MODULE_2__["filterResiduos"]);
const onClick = (elements, callback) => {
    elements.forEach(element => (element.addEventListener('click', event => {
        event.preventDefault();
        callback(element);
    })));
};
window.addEventListener('load', fetchData);
actions.forEach(action => (action.addEventListener('click', setSectionUsing(action))));
onClick(actions, action => setSectionUsing(action));
onClick(industrias, industria => {
    setState({ industria: industria.dataset.stateIndustria });
});
onClick(servicos, servico => (setState({ servico: servico.dataset.stateServico })));
onClick(residuos, residuo => {
    setState({ residuo: residuo.dataset.stateResiduo });
});


/***/ }),

/***/ "./src/handlers.ts":
/*!*************************!*\
  !*** ./src/handlers.ts ***!
  \*************************/
/*! exports provided: logState, updateActiveSection, filterResiduos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logState", function() { return logState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActiveSection", function() { return updateActiveSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterResiduos", function() { return filterResiduos; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");

const logState = (state, previous) => (console.log(state, previous));
const updateActiveSection = (state) => {
    const { section: activeSection } = state;
    _app__WEBPACK_IMPORTED_MODULE_0__["sections"].forEach(section => {
        section === activeSection ?
            section.classList.add('active') :
            section.classList.remove('active');
    });
};
const filterResiduos = (state) => {
    const { dados, industria } = state;
    const residuos = document.querySelectorAll('.residuo__card');
    if (industria) {
        residuos.forEach(element => {
            const residuo = dados.find(res => res.nome === element.dataset.residuo);
            console.log(residuo);
        });
    }
};


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: slug, slugObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugObject", function() { return slugObject; });
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
function slugObject(value) {
    return ({ [slug(value)]: value });
}


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const run = (callbacks, currentState, previousState) => (callbacks.forEach(cb => cb(currentState, previousState)));
const getProxyHandler = (...callbacks) => ({
    set(currentState, key, value) {
        const { dados } = currentState;
        const previousState = currentState;
        currentState[key] = tryTransformToResiduo(key, value, dados);
        run(callbacks, currentState, previousState);
        return true;
    }
});
const setState = (proxyState) => ((data) => (Object.keys(data).forEach(key => (proxyState[key] = data[key]))));
const createState = (state, ...callbacks) => {
    const proxyState = new Proxy(state, getProxyHandler(...callbacks));
    return setState(proxyState);
};
/* harmony default export */ __webpack_exports__["default"] = (createState);
const tryTransformToResiduo = (key, value, dados) => {
    if (key === 'residuo') {
        return dados.find(res => res.slug === value);
    }
    return value;
};


/***/ })

/******/ });
//# sourceMappingURL=app.js.map