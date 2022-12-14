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

export default mainWeatherInfo; // eslint-disable-line
