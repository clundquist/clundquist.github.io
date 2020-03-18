const appid = "36abeb743432af50afc71f9895b9a4af";
let id = "";

switch(document.getElementById('townname').innerHTML) {
  case "Preston Idaho":
    id = "5604473";
    break;
  case "Soda Springs Idaho":
    id = "5607916";
    break;
  case "Fish Haven Idaho":
    id = "5585010";
    break;
}

const weather = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID=${appid}`;
fetch(weather)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('high').innerHTML = parseFloat(jsObject.main.temp).toFixed(0) + "&#8457;";
    document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&percnt;";
    document.getElementById('windSpeed').textContent = jsObject.wind.speed + " mph";
  });

const forecast = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&APPID=${appid}`;
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i=0; i<fiveday.length; i++) {
      let d = new Date(fiveday[i].dt_txt);
      let dayName = days[d.getDay()];
      document.getElementById("day" + i).textContent = dayName;
      document.getElementById("temp" + i).innerHTML = parseFloat(fiveday[i].main.temp).toFixed(0) + "&#8457;";
      document.getElementById("icon" + i).setAttribute("src", `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`);
      document.getElementById("icon" + i).setAttribute("alt", fiveday[i].weather[0].description);
    }
  });
