var captcha =
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
/***/ function(module, exports) {

	eval("/**\r\n * Created by Ivan on 13.12.2015.\r\n */\r\n/** @jsx React.DOM */\r\n\r\n\r\nvar Auth = React.createClass({displayName: \"Auth\",\r\n    haha: function () {\r\n        $.ajax({\r\n            url: this.props.url,\r\n            type: \"POST\"\r\n        });\r\n\r\n    },\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"div\", null, \r\n                React.createElement(\"div\", {className: \"entrance-menu right hide-on-med-and-down valign-wrapper\"}, \r\n                    React.createElement(\"button\", {onClick: this.haha, className: \"waves-effect waves-light btn modal-trigger\", href: \"#modal1\"}, \n                        \"Регистрация\"\n                    )\r\n                )\r\n            )\r\n        )\r\n    }\r\n});\r\n\r\nReact.render(React.createElement(Auth, {url: \"http://demo8099007.mockable.io/activation\"}), document.getElementById('header-id'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9jYXB0Y2hhLmpzP2FjZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhbiBvbiAxMy4xMi4yMDE1LlxyXG4gKi9cclxuLyoqIEBqc3ggUmVhY3QuRE9NICovXHJcblxyXG5cclxudmFyIEF1dGggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBoYWhhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cmFuY2UtbWVudSByaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93biB2YWxpZ24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYWhhfSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIG1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI21vZGFsMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0LnJlbmRlcig8QXV0aCB1cmw9e1wiaHR0cDovL2RlbW84MDk5MDA3Lm1vY2thYmxlLmlvL2FjdGl2YXRpb25cIn0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1pZCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9jYXB0Y2hhLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);