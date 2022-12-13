/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeatherInfo() {
  try {
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=usa&appid=bc17df3c5c4a68ed03f277a1b5080ced",
      { mode: "cors" }
    );
    let weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch {
    (error) => {
      console.log(error);
    };
  }
}

getWeatherInfo();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mbygpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT11c2EmYXBwaWQ9YmMxN2RmM2M1YzRhNjhlZDAzZjI3N2ExYjUwODBjZWRcIixcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2gge1xuICAgIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH07XG4gIH1cbn1cblxuZ2V0V2VhdGhlckluZm8oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==