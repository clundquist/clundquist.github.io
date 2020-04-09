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
      let length = document.createElement('h3');
      let level = document.createElement('p');
      let cost = document.createElement('p');
      let services = document.createElement('p');
      let image = document.createElement('img');

      name.textContent = activity.name;
      length.textContent = activity.length;
      level.textContent = `Skill Level: ${activity.level}`;
      cost.textContent = `Cost: ${activity.cost}`;
      services.textContent = `${activity.services}`;

      image.setAttribute('src', `images/${activity.photo}`);
      image.setAttribute('alt', `${activity.name}`);

      card.appendChild(name);
      card.appendChild(length);
      card.appendChild(level);
      card.appendChild(cost);
      card.appendChild(services);
      card.appendChild(image);

      document.querySelector('div.activities').appendChild(card);
  });
});