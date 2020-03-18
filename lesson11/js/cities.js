const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
	  const towns = jsonObject['towns'];
	
    towns.forEach(hometown => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let moto = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let image = document.createElement('img');

      switch (hometown.name) {
        case 'Fish Haven':
        case 'Preston':
        case 'Soda Springs':
          name.textContent = hometown.name;
          moto.textContent = hometown.motto;
          year.textContent = `Year Founded: ${hometown.yearFounded}`;
          population.textContent = `Population: ${hometown.currentPopulation}`;
          rainfall.textContent = `Annual Rainfall: ${hometown.averageRainfall}`;
    
          image.setAttribute('src', `images/${hometown.photo}`);
          image.setAttribute('alt', `${hometown.name} - ${hometown.motto}`);
    
          card.appendChild(name);
          card.appendChild(moto);
          card.appendChild(year);
          card.appendChild(population);
          card.appendChild(rainfall);
          card.appendChild(image);
            
          document.querySelector('div.cities').appendChild(card);
      }
    });
  });