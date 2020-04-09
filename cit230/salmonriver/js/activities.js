const requestURL = 'data/activities.json';

fetch(requestURL)
  .then(function(response) {
        return response.json();
  })
  .then(function(jsonObject) {
	  const activities = jsonObject['activities'];
    activities.forEach(activity => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let moto = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let image = document.createElement('img');

      name.textContent = activity.name;
      moto.textContent = activity.motto;
      year.textContent = `Year Founded: ${activity.yearFounded}`;
      population.textContent = `Population: ${activity.currentPopulation}`;
      rainfall.textContent = `Annual Rainfall: ${activity.averageRainfall}`;

      image.setAttribute('src', `images/${activity.photo}`);
      image.setAttribute('alt', `${activity.name}`);

      card.appendChild(name);
      card.appendChild(moto);
      card.appendChild(year);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(image);

      document.querySelector('div.activities').appendChild(card);
  });
});