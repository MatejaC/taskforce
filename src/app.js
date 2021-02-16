import 'bootstrap';
import './scss/app.scss';


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            let output = document.getElementById('output');

            let card = document.createElement("div");
            card.className = 'single_card';

            let title = document.createElement("h5");
            title.innerHTML = element["title"]
            card.appendChild(title);
            title.className = "card_title"

            let body = document.createElement("p");
            body.innerHTML = element["body"]
            card.appendChild(body);
            body.className = "para"

            output.appendChild(card);

        }
    });