/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weatherdisplay/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weatherdisplay/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * var result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weatherdisplay/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weatherdisplay/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n\n\n\nconst testModule = (function () {\n\n    // Create\n    \n    let content = document.getElementById('content');\n    content.classList.add('content');\n\n    let inputContainer = document.createElement('div');\n    inputContainer.classList.add('inputContainer')\n    content.appendChild(inputContainer);\n\n    let outerContainer = document.createElement('div');\n    outerContainer.classList.add('outer')\n\n    let innercontainer1 = document.createElement('div');\n    innercontainer1.classList.add('inner');\n    let innercontainer2 = document.createElement('div');\n    innercontainer2.classList.add('inner');\n    let innercontainer3 = document.createElement('div');\n    innercontainer3.classList.add('inner');\n    let innercontainer4 = document.createElement('div');\n    innercontainer4.classList.add('inner');\n    let innercontainer5 = document.createElement('div');\n    innercontainer5.classList.add('inner');\n    let innercontainer6 = document.createElement('div');\n    innercontainer6.classList.add('inner');\n    let innercontainer7 = document.createElement('div');\n    innercontainer7.classList.add('inner');\n    let innercontainer8 = document.createElement('div');\n    innercontainer8.classList.add('inner');\n\n    content.appendChild(outerContainer);\n    outerContainer.appendChild(innercontainer1);\n    outerContainer.appendChild(innercontainer2);\n    outerContainer.appendChild(innercontainer3);\n    outerContainer.appendChild(innercontainer4);\n    outerContainer.appendChild(innercontainer5);\n    outerContainer.appendChild(innercontainer6);\n    outerContainer.appendChild(innercontainer7);\n    outerContainer.appendChild(innercontainer8);\n\n    // Select all inner content boxes\n    let innerContent = document.querySelectorAll('.inner');\n\n    // Create input form\n    const label1 = document.createElement('label');\n    inputContainer.appendChild(label1);\n    label1.setAttribute(\"for\", \"searchEntry\"); //* update id\n    label1.innerHTML = \"Enter City\"\n\n    const searchForm = document.createElement('form')\n    inputContainer.appendChild(searchForm);\n\n    const searchEntry = document.createElement('input')\n    searchForm.appendChild(searchEntry);\n    searchEntry.setAttribute(\"type\", \"text\");\n    searchEntry.setAttribute(\"id\", \"searchEntry\");\n    searchEntry.setAttribute(\"name\", \"searchEntry\");\n    searchEntry.setAttribute(\"value\", \"\");\n    searchEntry.setAttribute('required', 'Required');\n    //End\n\n    const searchButton = document.createElement('input')\n    searchButton.setAttribute(\"type\", \"submit\");\n    searchButton.setAttribute(\"value\", \"Submit\");\n    console.log(searchEntry.value);\n    searchForm.appendChild(searchButton);\n\n    searchForm.addEventListener('submit', function () { label1.innerText = searchEntry.value; getWeather(getCity()); ; event.preventDefault(); });\n\n    //getWeather('london');\n\n    // Get the city from the user using a form element\n    function getCity() {\n        let location = searchEntry.value;\n        searchEntry.value = \"\";\n        return location;\n    }\n\n\n    async function getWeather(city) {\n\n        try {\n            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0579ded93b6e576a535d03e42582732&units=imperial`, { mode: 'cors' });\n            const weatherData = await response.json();\n\n            gatherInfo(weatherData);\n\n        }\n        catch (err) {\n            console.log(err);\n        }\n\n\n    }\n\n\n    //Function to collect all relevant info from the data and puts it in an object\n    function gatherInfo(data) {\n\n        let currentTemp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset;\n\n        // Current Weather Values\n        currentTemp = data.main.temp;\n        pressure = data.main.pressure;\n        humidity = data.main.humidity;\n        description = data.weather[0].description;\n        feelsLike = data.main.feels_like;\n        windSpeed = data.wind.speed;\n        sunrise = data.sys.sunrise;\n        sunset = data.sys.sunset;\n\n        // create weather object\n        currentWeatherData(currentTemp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset);\n\n    }\n\n\n    function currentWeatherData(temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset) {\n\n        const dailyWeather = currentWeather(temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset);\n\n        setAllValues(dailyWeather.getTemp(), dailyWeather.getPressure(), dailyWeather.getHumidity(), dailyWeather.getDescription(),\n            dailyWeather.getFeel(), dailyWeather.getWind(), dailyWeather.getSunrise(), dailyWeather.getSunset());\n\n\n    }\n\n\n    const currentWeather = (temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset) => {\n\n        const getTemp = () => temp;\n        const getPressure = () => pressure;\n        const getHumidity = () => humidity;\n        const getDescription = () => description;\n        const getFeel = () => feelsLike;\n        const getWind = () => windSpeed;\n        const getSunrise = () => sunrise;\n        const getSunset = () => sunset;\n\n        return { getTemp, getPressure, getHumidity, getDescription, getFeel, getWind, getSunrise, getSunset }\n    }\n\n    function setAllValues(temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset) {\n        \n        const sunriseTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(sunrise)\n        const sunsetTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(sunset);\n\n        innerContent[0].innerText = \"Pressure: \\n\" + pressure + \" hPa\";\n        innerContent[1].innerText = \"Humidity: \\n\" + humidity + \"%\";\n        innerContent[2].innerText = \"Conditions: \\n\" + description;\n        innerContent[3].innerText = \"Temp: \\n\" + temp + ' \\u00B0';\n        innerContent[4].innerText = \"Feels Like: \\n\" + feelsLike + ' \\u00B0';\n        innerContent[5].innerText = \"Wind Speed: \\n\" + windSpeed + \" mph\";\n        innerContent[6].innerText = \"Sunrise: \\n\" + sunriseTime.getHours() + \":\" + sunriseTime.getMinutes() + \" MST\";\n        innerContent[7].innerText = \"Sunset: \\n\" + (sunsetTime.getHours()  )+ \":\" + sunsetTime.getMinutes() + \" MST\";\n        \n\n    }\n\n\n   \n\n})();\n\n\n\n\n//# sourceURL=webpack://weatherdisplay/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;