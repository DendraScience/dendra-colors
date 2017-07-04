(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chroma-js"));
	else if(typeof define === 'function' && define.amd)
		define(["chroma-js"], factory);
	else if(typeof exports === 'object')
		exports["colors"] = factory(require("chroma-js"));
	else
		root["dendra"] = root["dendra"] || {}, root["dendra"]["colors"] = factory(root["chroma"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dendra color constants for charts and dashboards.
 *
 * @author J. Scott Smith
 * @license BSD-2-Clause-FreeBSD
 * @module dendra-colors
 */

var chroma = __webpack_require__(1);

var WHEEL = {
  RED: '#dc635c',
  RED_ORANGE: '#dc7d5c',
  ORANGE: '#dcac5c',
  YELLOW_ORANGE: '#dcd095',
  YELLOW: '#d8dc5c',
  YELLOW_GREEN: '#aedc5c',
  GREEN: '#5cdc71',
  BLUE_GREEN: '#5cdcbf',
  BLUE_BLUE_GREEN: '#5cb6dc',
  BLUE: '#5ca1dc',
  BLUE_VIOLET: '#a695dc',
  VIOLET: '#af7abe',
  RED_VIOLET: '#dc95b6'
};

var BOOTSTRAP = {
  RED: WHEEL.RED,
  ORANGE: WHEEL.ORANGE,
  YELLOW: WHEEL.YELLOW,
  GREEN: WHEEL.YELLOW_GREEN,
  BLUE: WHEEL.BLUE,
  TEAL: WHEEL.BLUE_GREEN,
  PINK: WHEEL.RED_VIOLET,
  PURPLE: WHEEL.BLUE_VIOLET
};

var NAMED = {
  HEMLOCK_APPROX: '#615c42'
};

var SERIES = {
  AIR_SPEED_AVG: WHEEL.BLUE_VIOLET,
  AIR_SPEED_MAX: WHEEL.RED,
  AIR_TEMP: [WHEEL.BLUE, WHEEL.YELLOW],
  SOIL_TEMP: [WHEEL.ORANGE, NAMED.HEMLOCK_APPROX],
  SOLAR_RAD: WHEEL.ORANGE,
  SOLAR_PAR: WHEEL.YELLOW_GREEN
};

var TILE = {
  AIR_MOIST: chroma(WHEEL.BLUE).darken(0.6).hex(),
  AIR_PRES: chroma(WHEEL.BLUE).darken(0.6).hex(),
  AIR_TEMP: chroma(WHEEL.BLUE).darken(0.6).hex(),
  NOTIFY_OFFLINE: chroma(WHEEL.RED).darken(0.6).hex(),
  NOTIFY_ONLINE: chroma(WHEEL.YELLOW_GREEN).darken(0.6).hex(),
  PRECIP: chroma(WHEEL.BLUE_GREEN).darken(0.6).hex(),
  SOLAR: chroma(WHEEL.ORANGE).darken(0.6).hex(),
  WIND: chroma(WHEEL.BLUE_VIOLET).darken(0.6).hex()
};

module.exports = {
  BOOTSTRAP: BOOTSTRAP,
  NAMED: NAMED,
  SERIES: SERIES,
  TILE: TILE,
  WHEEL: WHEEL
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});