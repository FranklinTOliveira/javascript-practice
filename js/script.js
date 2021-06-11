// JavaScript source code

// api url
/*const generateFactoid = fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => response.json())
    .then(cats => {
        const randomNumberInRange = Math.random() * cats.length;
        const randomIndex = Math.floor(randomNumberInRange);
        const randomCat = cats[randomIndex];

        const factButton = document.getElementById("answer").innerHTML;
        factButton.addEventListener("click", randomCat);
    });-->
*/

let file = "https://cat-fact.herokuapp.com/facts"

fetch(file)
    .then(x => x.text())
    .then(y => document.getElementById("answer").innerHTML = y);