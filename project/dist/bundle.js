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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\\nError: Cannot find module 'node-sass'\\nRequire stack:\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack\\\\lib\\\\webpack.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack-cli\\\\bin\\\\convert-argv.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack-cli\\\\bin\\\\cli.js\\n- C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack\\\\bin\\\\webpack.js\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:690:27)\\n    at Module.require (internal/modules/cjs/loader.js:852:19)\\n    at require (C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:159:20)\\n    at Object.sassLoader (C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js:46:72)\\n    at C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:301:20\\n    at C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:364:11\\n    at C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:230:18\\n    at runSyncOrAsync (C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:229:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:202:4)\\n    at Storage.finished (C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:43:16)\\n    at C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:79:9\\n    at C:\\\\Users\\\\Игнат\\\\Desktop\\\\project\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:90:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:61:3)\");\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });