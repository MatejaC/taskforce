import 'bootstrap';
import './scss/app.scss';


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            console.log(element["title"])
            console.log(element["body"])


            let output = document.getElementById('output');

            let title = document.createElement("h5");
            title.innerHTML = element["title"]
            output.appendChild(title);

            let body = document.createElement("p");
            body.innerHTML = element["body"]
            output.appendChild(body);

        }
    });
ss