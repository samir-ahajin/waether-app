import mainWeatherInfo from "./getInfo";
import details from "./showInfo";
let sbutton = document.getElementById("search-btn");

(async () => {
  let sval = "manila";

  let searchData = await mainWeatherInfo.data(sval);
  details.show(searchData);
})();
sbutton.addEventListener("click", async () => {
  let sval = document.getElementById("search").value;

  let searchData = await mainWeatherInfo.data(sval);
  details.show(searchData);
});
