const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=36abeb743432af50afc71f9895b9a4af';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
  	const desc = jsObject.weather[0].description;
  	document.getElementById('imagesrc').textContent = imagesrc;
  	document.getElementById('weather icon').setAttribute('src', imagesrc);
  	document.getElementById('weather icon').setAttribute('alt', desc);
  });