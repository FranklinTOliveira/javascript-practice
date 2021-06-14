// JavaScript source code


function selectRandomFact(data) {
    // we now have the data in json format
    console.log(data);

    // let's check the type
    console.log(typeof data);

    /* whoops, it says "object" because technically an
       array is an object. But that's not useful
    */

    // old way of checking specific type of object
    console.log(Object.prototype.toString.call(data)); // returns a string

    // new way of checking for array
    console.log(Array.isArray(data)) // returns a boolean

    /* ok so we confirmed the data we got back is an array!
       let's create a random value between 0 and the array's length
    */

    const randomDecimal = Math.random() * data.length;
    console.log(randomDecimal);// refresh page to see me change

    const randomIndex = Math.floor(randomDecimal); // this will give us a whole number between 0 and 4
    console.log(randomIndex); // refresh page to see me change

    // we can use the randomIndex to select an element in the array
    const catFact = data[randomIndex];
    console.log(catFact) // an object, we can use dot notation to access properties we want

    // return catFact but no catFact.text because we're going to return a string rather than an object

    return catFact;
}

/* Endpoint was changed from the heroku app site to a mocky site because access to the heroku app site became unobtainable.
   Was this why Erik didn't produce a solution that included an addEventListener?
*/

const endpoint = "https://run.mocky.io/v3/33f4cebe-cf68-4b6c-a335-702c65bd10e1";

// the built-in fetch function returns a promise so we can chain it using .then's

let allMyCatFacts = [];
fetch(endpoint)
    .then(function (response) {
        return response.json(); // pass on this promise to next .then
    })
    .then(function (response) {
        allMyCatFacts = response; // pass on this promise to next .then
    })

// the Random Fact selected must now be shown
function showRandomFact() {
    const currentRandomFact = selectRandomFact(allMyCatFacts);
    const placement = document.getElementById("answer");
    placement.innerHTML = currentRandomFact;
}

// the Random Fact to be shown must be shown when the button is clicked
function addButtonListener(event) {
    const button = document.getElementById("factButton");
    button.addEventListener("click", showRandomFact);
}

// this line of code comes from when I still was trying to access the heroku app site
window.addEventListener('DOMContentLoaded', addButtonListener); 
