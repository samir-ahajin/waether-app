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
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bc17df3c5c4a68ed03f277a1b5080ced`,
        { mode: "cors" }
      );
      if (!weatherResponse.ok) {
        console.log("hello");
      } else {
        const weatherData = await weatherResponse.json();
        let info = new currentData(weatherData);
        return info;
      }
    } catch (err) {
      console.error(err);
    }
  }
  return { data };
})();

export default mainWeatherInfo; // eslint-disable-line
