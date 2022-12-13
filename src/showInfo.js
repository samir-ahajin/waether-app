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

export default details; // eslint-disable-line
