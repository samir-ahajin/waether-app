/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getInfo.js":
/*!************************!*\
  !*** ./src/getInfo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let mainWeatherInfo = (() => {
  class currentData {
    constructor(cityInfo) {
      this.city = cityInfo.name;
      this.country = cityInfo.sys.country;
      this.main = cityInfo.main;
      this.visibility = cityInfo.visibility;
      this.wind = cityInfo.wind;
      this.icon = cityInfo.weather[0];
    }

    get info() {
      return {
        name: this.city,
        country: this.country,
        data: this.citymain,
        visibility: this.visibility,
        wind: this.wind,
        iconsInfo: this.icon,
      };
    }
  }

  async function data(city) {
    let err = document.getElementById("errormessage");
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bc17df3c5c4a68ed03f277a1b5080ced`,
        { mode: "cors" }
      );
      if (!weatherResponse.ok) {
        err.textContent =
          "Location not Found. Must be in 'City', 'City,State', 'City,Country'";
        console.clear();
      } else {
        err.textContent = "";
        const weatherData = await weatherResponse.json();
        let info = new currentData(weatherData);
        return info;
      }
    } catch (err) {
      err.textContent = "Location not Found.";
      console.clear();
    }
  }
  return { data };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainWeatherInfo); // eslint-disable-line


/***/ }),

/***/ "./src/showInfo.js":
/*!*************************!*\
  !*** ./src/showInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let details = (() => {
  function show(data) {
    let name = document.getElementById("city-name"),
      mainTemp = document.getElementById("temp"),
      icon = document.getElementById("weather-icon"),
      cloudInfo = document.getElementById("cloud-desc"),
      visibility = document.getElementById("visibility"),
      humid = document.getElementById("humid"),
      pressure = document.getElementById("pressure"),
      tempMinMax = document.getElementById("temp-minmax");

    name.textContent = `${data.city},${data.country}`;
    mainTemp.textContent = `${data.main.temp}°C`;
    icon.src = ` https://openweathermap.org/img/wn/${data.icon.icon}@4x.png`;
    cloudInfo.innerHTML = `<b>Feels like ${data.main.feels_like}°C with ${data.icon.description} and windspeed of ${data.wind.speed} km/h.</b>`;
    visibility.textContent = `${data.visibility / 1000} KM`;
    humid.textContent = `${data.main.humidity}`;
    pressure.textContent = `${data.main.pressure}hPa`;
    tempMinMax.textContent = `${data.main.temp_min} °C - ${data.main.temp_max} °C`;
  }

  return { show };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (details); // eslint-disable-line


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInfo */ "./src/getInfo.js");
/* harmony import */ var _showInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showInfo */ "./src/showInfo.js");


let sbutton = document.getElementById("search-btn");

(async () => {
  let sval = "manila";

  let searchData = await _getInfo__WEBPACK_IMPORTED_MODULE_0__["default"].data(sval);
  _showInfo__WEBPACK_IMPORTED_MODULE_1__["default"].show(searchData);
})();

sbutton.addEventListener("click", async () => {
  let sval = document.getElementById("search").value;

  let searchData = await _getInfo__WEBPACK_IMPORTED_MODULE_0__["default"].data(sval);
  _showInfo__WEBPACK_IMPORTED_MODULE_1__["default"].show(searchData);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsZUFBZSxFQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hEaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFVBQVUsR0FBRyxhQUFhO0FBQ3BELDhCQUE4QixlQUFlO0FBQzdDLHFEQUFxRCxlQUFlO0FBQ3BFLDJDQUEyQyxxQkFBcUIsVUFBVSx1QkFBdUIsbUJBQW1CLGlCQUFpQjtBQUNySSxnQ0FBZ0Msd0JBQXdCO0FBQ3hELDJCQUEyQixtQkFBbUI7QUFDOUMsOEJBQThCLG1CQUFtQjtBQUNqRCxnQ0FBZ0Msb0JBQW9CLE9BQU8sb0JBQW9CO0FBQy9FOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLE9BQU8sRUFBQyxDQUFDOzs7Ozs7O1VDeEJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNQO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLHFEQUFvQjtBQUM3QyxFQUFFLHNEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLHlCQUF5QixxREFBb0I7QUFDN0MsRUFBRSxzREFBWTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Nob3dJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG1haW5XZWF0aGVySW5mbyA9ICgoKSA9PiB7XG4gIGNsYXNzIGN1cnJlbnREYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihjaXR5SW5mbykge1xuICAgICAgdGhpcy5jaXR5ID0gY2l0eUluZm8ubmFtZTtcbiAgICAgIHRoaXMuY291bnRyeSA9IGNpdHlJbmZvLnN5cy5jb3VudHJ5O1xuICAgICAgdGhpcy5tYWluID0gY2l0eUluZm8ubWFpbjtcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGNpdHlJbmZvLnZpc2liaWxpdHk7XG4gICAgICB0aGlzLndpbmQgPSBjaXR5SW5mby53aW5kO1xuICAgICAgdGhpcy5pY29uID0gY2l0eUluZm8ud2VhdGhlclswXTtcbiAgICB9XG5cbiAgICBnZXQgaW5mbygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMuY2l0eSxcbiAgICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5LFxuICAgICAgICBkYXRhOiB0aGlzLmNpdHltYWluLFxuICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXG4gICAgICAgIHdpbmQ6IHRoaXMud2luZCxcbiAgICAgICAgaWNvbnNJbmZvOiB0aGlzLmljb24sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRhdGEoY2l0eSkge1xuICAgIGxldCBlcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ybWVzc2FnZVwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWJjMTdkZjNjNWM0YTY4ZWQwM2YyNzdhMWI1MDgwY2VkYCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICApO1xuICAgICAgaWYgKCF3ZWF0aGVyUmVzcG9uc2Uub2spIHtcbiAgICAgICAgZXJyLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIkxvY2F0aW9uIG5vdCBGb3VuZC4gTXVzdCBiZSBpbiAnQ2l0eScsICdDaXR5LFN0YXRlJywgJ0NpdHksQ291bnRyeSdcIjtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuICAgICAgICBsZXQgaW5mbyA9IG5ldyBjdXJyZW50RGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZXJyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiBub3QgRm91bmQuXCI7XG4gICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGRhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5XZWF0aGVySW5mbzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuIiwibGV0IGRldGFpbHMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBzaG93KGRhdGEpIHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpLFxuICAgICAgbWFpblRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIiksXG4gICAgICBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWljb25cIiksXG4gICAgICBjbG91ZEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3VkLWRlc2NcIiksXG4gICAgICB2aXNpYmlsaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmlsaXR5XCIpLFxuICAgICAgaHVtaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkXCIpLFxuICAgICAgcHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzdXJlXCIpLFxuICAgICAgdGVtcE1pbk1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcC1taW5tYXhcIik7XG5cbiAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fSwke2RhdGEuY291bnRyeX1gO1xuICAgIG1haW5UZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLnRlbXB9wrBDYDtcbiAgICBpY29uLnNyYyA9IGAgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29uLmljb259QDR4LnBuZ2A7XG4gICAgY2xvdWRJbmZvLmlubmVySFRNTCA9IGA8Yj5GZWVscyBsaWtlICR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9wrBDIHdpdGggJHtkYXRhLmljb24uZGVzY3JpcHRpb259IGFuZCB3aW5kc3BlZWQgb2YgJHtkYXRhLndpbmQuc3BlZWR9IGttL2guPC9iPmA7XG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEudmlzaWJpbGl0eSAvIDEwMDB9IEtNYDtcbiAgICBodW1pZC50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX1gO1xuICAgIHByZXNzdXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLnByZXNzdXJlfWhQYWA7XG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi50ZW1wX21pbn0gwrBDIC0gJHtkYXRhLm1haW4udGVtcF9tYXh9IMKwQ2A7XG4gIH1cblxuICByZXR1cm4geyBzaG93IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluV2VhdGhlckluZm8gZnJvbSBcIi4vZ2V0SW5mb1wiO1xuaW1wb3J0IGRldGFpbHMgZnJvbSBcIi4vc2hvd0luZm9cIjtcbmxldCBzYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnRuXCIpO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBsZXQgc3ZhbCA9IFwibWFuaWxhXCI7XG5cbiAgbGV0IHNlYXJjaERhdGEgPSBhd2FpdCBtYWluV2VhdGhlckluZm8uZGF0YShzdmFsKTtcbiAgZGV0YWlscy5zaG93KHNlYXJjaERhdGEpO1xufSkoKTtcblxuc2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBsZXQgc3ZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpLnZhbHVlO1xuXG4gIGxldCBzZWFyY2hEYXRhID0gYXdhaXQgbWFpbldlYXRoZXJJbmZvLmRhdGEoc3ZhbCk7XG4gIGRldGFpbHMuc2hvdyhzZWFyY2hEYXRhKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9