const requestURL = 'data/guides.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
	  const guides = jsonObject['guides'];
	
    guides.forEach(riverguide => {
      let card = document.createElement('section');
      card.setAttribute('class','card');
      let carddiv = document.createElement('div');
      let name = document.createElement('h2');
      let bio = document.createElement('p');
      let email = document.createElement('p');
      let years = document.createElement('p');
      let level = document.createElement('p');
      let image = document.createElement('img');

      name.textContent = riverguide.name;
      bio.textContent = riverguide.bio;
      email.textContent = `${riverguide.email}`;
      years.textContent = `Years of experience: ${riverguide.years}`;
      level.textContent = `Skill level: ${riverguide.level}`;

      image.setAttribute('src', `images/${riverguide.photo}`);
      image.setAttribute('alt', `${name.textContent}`);

      card.appendChild(image);
      carddiv.appendChild(name);
      carddiv.appendChild(years);
      carddiv.appendChild(level);
      carddiv.appendChild(bio);
      carddiv.appendChild(email);
      card.appendChild(carddiv);

      document.querySelector('div.guides').appendChild(card);
  });
});