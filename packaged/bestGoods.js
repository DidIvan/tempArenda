var bestGoods =
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

	eval("/**\r\n * Created by Ivan on 14.12.2015.\r\n */\r\n/** @jsx React.DOM */\r\n\r\nvar BestGoods = React.createClass({displayName: \"BestGoods\",\r\n    /*    getInitialState: function () {\r\n     //TODO extract data from server\r\n     },*/\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"div\", {className: \"row\"}, \r\n                React.createElement(Title, {title: \"ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НЕДЕЛИ\"}), \r\n                React.createElement(Goods, {image: \"../public/img/Product.png\", price: \"155\", goodName: \"Name1\"}), \r\n                React.createElement(Goods, {image: \"../public/img/Product.png\", price: \"250\", goodName: \"Name2\"}), \r\n                React.createElement(Goods, {image: \"../public/img/Product.png\", price: \"350\", goodName: \"Name3\"}), \r\n                React.createElement(Goods, {image: \"../public/img/Product.png\", price: \"450\", goodName: \"Name4\"})\r\n            )\r\n\r\n        )\r\n    }\r\n});\r\nvar Title = React.createClass({displayName: \"Title\",\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"h1\", {className: \"title center-align\"}, this.props.title)\r\n        )\r\n    }\r\n});\r\n\r\nvar Goods = React.createClass({displayName: \"Goods\",\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"div\", {className: \"col s12 m3 l3\"}, \r\n                React.createElement(\"div\", {className: \"card z-depth-2\"}, \r\n                    React.createElement(\"div\", {className: \"card-image\"}, \r\n                        React.createElement(\"a\", {href: \"#\"}, React.createElement(\"img\", {src: this.props.image}))\r\n                    ), \r\n                    React.createElement(\"div\", {className: \"card-action\"}, \r\n                        React.createElement(\"a\", {href: \"#\"}, React.createElement(\"span\", {className: \"price\"}, this.props.price), React.createElement(\"span\", {\r\n                            className: \"perweek\"}, this.props.goodName))\r\n                    )\r\n                )\r\n            )\r\n        )\r\n    }\r\n});\r\n\r\nReact.render(React.createElement(BestGoods, null), document.getElementById('bestGoods-id'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9iZXN0R29vZHMuanM/NDhiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuIG9uIDE0LjEyLjIwMTUuXHJcbiAqL1xyXG4vKiogQGpzeCBSZWFjdC5ET00gKi9cclxuXHJcbnZhciBCZXN0R29vZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAvKiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAvL1RPRE8gZXh0cmFjdCBkYXRhIGZyb20gc2VydmVyXHJcbiAgICAgfSwqL1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0aXRsZT1cItCb0KPQp9Co0JjQlSDQn9Cg0JXQlNCb0J7QltCV0J3QmNCvINCd0JXQlNCV0JvQmFwiLz5cclxuICAgICAgICAgICAgICAgIDxHb29kcyBpbWFnZT1cIi4uL3B1YmxpYy9pbWcvUHJvZHVjdC5wbmdcIiBwcmljZT1cIjE1NVwiIGdvb2ROYW1lPVwiTmFtZTFcIi8+XHJcbiAgICAgICAgICAgICAgICA8R29vZHMgaW1hZ2U9XCIuLi9wdWJsaWMvaW1nL1Byb2R1Y3QucG5nXCIgcHJpY2U9XCIyNTBcIiBnb29kTmFtZT1cIk5hbWUyXCIvPlxyXG4gICAgICAgICAgICAgICAgPEdvb2RzIGltYWdlPVwiLi4vcHVibGljL2ltZy9Qcm9kdWN0LnBuZ1wiIHByaWNlPVwiMzUwXCIgZ29vZE5hbWU9XCJOYW1lM1wiLz5cclxuICAgICAgICAgICAgICAgIDxHb29kcyBpbWFnZT1cIi4uL3B1YmxpYy9pbWcvUHJvZHVjdC5wbmdcIiBwcmljZT1cIjQ1MFwiIGdvb2ROYW1lPVwiTmFtZTRcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG52YXIgVGl0bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgY2VudGVyLWFsaWduXCI+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIEdvb2RzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG0zIGwzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgei1kZXB0aC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9Lz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+e3RoaXMucHJvcHMucHJpY2V9PC9zcGFuPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJ3ZWVrXCI+e3RoaXMucHJvcHMuZ29vZE5hbWV9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUmVhY3QucmVuZGVyKDxCZXN0R29vZHMvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jlc3RHb29kcy1pZCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9iZXN0R29vZHMuanNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);