var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * Created by Horbynko on 19.01.2016.\r\n */\r\n'use strict';\r\n\r\nlet welcome = __webpack_require__(1);\r\n//welcome('home');\r\n\r\nexports.welcome=welcome;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9ob21lLmpzP2FkODIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSG9yYnlua28gb24gMTkuMDEuMjAxNi5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCB3ZWxjb21lID0gcmVxdWlyZSgnLi93ZWxjb21lJyk7XHJcbi8vd2VsY29tZSgnaG9tZScpO1xyXG5cclxuZXhwb3J0cy53ZWxjb21lPXdlbGNvbWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9ob21lLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("/**\r\n * Created by Horbynko on 19.01.2016.\r\n */\r\n'use strict';\r\n\r\nmodule.exports = function(message){\r\n    debugger;\r\n    alert('раньше сдеся была ахинея');\r\n    console.log('HHHHHH');\r\n    console.log('HHHHHH');\r\n};\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC93ZWxjb21lLmpzP2QyMDMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSG9yYnlua28gb24gMTkuMDEuMjAxNi5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWVzc2FnZSl7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGFsZXJ0KCfRgNCw0L3RjNGI0LUg0YHQtNC10YHRjyDQsdGL0LvQsCDQsNGF0LjQvdC10Y8nKTtcclxuICAgIGNvbnNvbGUubG9nKCdISEhISEgnKTtcclxuICAgIGNvbnNvbGUubG9nKCdISEhISEgnKTtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC93ZWxjb21lLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);