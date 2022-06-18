const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing



        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);

        function displayProphets(prophet) {
            // Create elements to add to the document
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let portrait = document.createElement('img');
            let name = prophet.name;
            let last = prophet.lastname;
            let order = prophet.order;
            let birth = document.createElement('p');
            let place = document.createElement('p');
            // Change the textContent property of the h2 element to contain the prophet's full name
            h2.textContent = `${name} ${last} ${ order}`;
            birth.textContent = `Birthdate: ${prophet.birthdate}`;
            place.textContent = `Birthplace: ${prophet.birthplace}`;
            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            let a = "Portrait of ";
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `${a }${name } ${last}`);
            portrait.setAttribute('loading', 'lazy');


            card.appendChild(h2);
            card.appendChild(portrait);
            card.appendChild(birth);
            card.appendChild(place);


            document.querySelector('div.cards').appendChild(card);
        }

    });