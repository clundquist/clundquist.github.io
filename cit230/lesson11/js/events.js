const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let name = "";

switch(document.getElementById('townname').innerHTML) {
    case "Fish Haven Idaho":
      name = "Fish Haven";
      break;
    case "Preston Idaho":
      name = "Preston";
      break;
    case "Soda Springs Idaho":
      name = "Soda Springs";
      break;
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.forEach(hometown => {
        if (hometown.name == name) {
          let i = 0;
          let ul = document.createElement('ul');
          let div = document.createElement('div');
          let title = document.createElement('h3');
          title.innerText = "Upcoming Events:";
          div.appendChild(title);
  
          for (i in hometown.events) {
            let list = document.createElement('p');
            list.setAttribute('class', 'eventlist');
            list.textContent = hometown.events[i];
            div.appendChild(list);
            document.querySelector('div.events').appendChild(div);
          }
        }
    })
  });