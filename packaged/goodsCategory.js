var goodsCategory =
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

	eval("/** @jsx React.DOM */\r\n\r\nvar GoodsCategory = React.createClass({displayName: \"GoodsCategory\",\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"div\", {className: \"row\"}, \r\n                React.createElement(Category, {image: \"../public/img/artleo.png\", categoryName: \"Фототехника\"}), \r\n                React.createElement(Category, {image: \"../public/img/00d07bd5f7f5307f333775b4786c--raboty-dlya-detej-detskij-vyazanyj-komplekt.png\", \r\n                               categoryName: \"все для детей\"}), \r\n                React.createElement(Category, {\r\n                    image: \"../public/img/11425817-A-young-family-of-four-with-a-cat-sitting-on-sofa-looking-at-camera-and-smiling-Stock-Photo.png\", \r\n                    categoryName: \"Одежда для всей семьи\"})\r\n            )\r\n        )\r\n    }\r\n});\r\n\r\nvar Category = React.createClass({displayName: \"Category\",\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"div\", {className: \"col s12 m4 l4\"}, \r\n                React.createElement(\"div\", {className: \"card\"}, \r\n                    React.createElement(\"div\", {className: \"card-image\"}, \r\n                        React.createElement(\"a\", {href: \"#\"}, React.createElement(\"img\", {src: this.props.image}))\r\n                    ), \r\n                    React.createElement(\"div\", {className: \"card-action\"}, \r\n                        React.createElement(\"a\", {href: \"index-markup.html\"}, this.props.categoryName)\r\n                    )\r\n                )\r\n            )\r\n        )\r\n    }\r\n});\r\n\r\nReact.render(React.createElement(GoodsCategory, null), document.getElementById(\"goodsCategory-id\"));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9nb29kc0NhdGVnb3J5LmpzPzY0OTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggUmVhY3QuRE9NICovXHJcblxyXG52YXIgR29vZHNDYXRlZ29yeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgaW1hZ2U9XCIuLi9wdWJsaWMvaW1nL2FydGxlby5wbmdcIiBjYXRlZ29yeU5hbWU9XCLQpNC+0YLQvtGC0LXRhdC90LjQutCwXCIvPlxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5IGltYWdlPVwiLi4vcHVibGljL2ltZy8wMGQwN2JkNWY3ZjUzMDdmMzMzNzc1YjQ3ODZjLS1yYWJvdHktZGx5YS1kZXRlai1kZXRza2lqLXZ5YXphbnlqLWtvbXBsZWt0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU9XCLQstGB0LUg0LTQu9GPINC00LXRgtC10LlcIi8+XHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi4uL3B1YmxpYy9pbWcvMTE0MjU4MTctQS15b3VuZy1mYW1pbHktb2YtZm91ci13aXRoLWEtY2F0LXNpdHRpbmctb24tc29mYS1sb29raW5nLWF0LWNhbWVyYS1hbmQtc21pbGluZy1TdG9jay1QaG90by5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZT1cItCe0LTQtdC20LTQsCDQtNC70Y8g0LLRgdC10Lkg0YHQtdC80YzQuFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBDYXRlZ29yeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNCBsNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9Lz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaW5kZXgtbWFya3VwLmh0bWxcIj57dGhpcy5wcm9wcy5jYXRlZ29yeU5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcblxyXG5SZWFjdC5yZW5kZXIoPEdvb2RzQ2F0ZWdvcnkvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29kc0NhdGVnb3J5LWlkXCIpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL21hcmt1cC9nb29kc0NhdGVnb3J5LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);