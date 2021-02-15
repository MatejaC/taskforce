import 'bootstrap';
import './scss/app.scss';



// fetch contents of given url
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // read response from url as json
    .then(data => {
        // go through every object in json
        for (let index = 0; index < data.length; index++) {
            // element is now a single post from json
            const element = data[index];

            // this prints out to browser console and is good for debugging
            console.log(element["title"])
            console.log(element["body"])

            // you should get your main cards div
            // and add elements to its inner HTML

            let output = document.getElementById('output');

            output.innerHTML += "<h5>" + element["title"] + "</h5>";
            let title = document.createElement("h5");
            title.innerHtml = element["title"]
            output.appendChild(title);

            output.innerHTML += "<p>" + element["body"] + "</p>";
            let body = document.createElement("p");
            body.innerHtml = element["body"]
            output.appendChild(body);
        }
    });