const appid = "36abeb743432af50afc71f9895b9a4af";
let id = "4092267";

const weather = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID=${appid}`;
fetch(weather)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('high').innerHTML = parseFloat(jsObject.main.temp).toFixed(0) + "&#8457;";
    document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&percnt;";
    document.getElementById('windSpeed').textContent = jsObject.wind.speed + " mph";
  });
