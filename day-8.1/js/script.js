// JavaScript source code

/*
    Create a new codepen
    Congrats, you got a new dog!
        Create an object named "dog"
        Name and describe your dog
        Add a property to your dog object called "name" and assign a name
        Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
    Let's teach it some tricks
        Give your dog a property called “speak” and assign a function that will alert “woof!”
        Add another method to teach your dog one more trick
   BONUS: Display your dog object values in HTML
*/

// I own a dog named Fido.
const dog = new Object();
dog.name = 'His name is Fido.';
dog.legs = 'He has four legs.';
dog.furcolor = 'His fur is colored gray.';

// Here I construct a button that releases my dog's bio.

const present = function habeusCorpus() {
    console.log(JSON.stringify(dog));
    const body = dog.name + '<br/>' + d;
    const ghoulish = document.getElementById("bb");
    ghoulish.innerHTML = body;

    const dl = document.createElement('p');
    dl.textContent = dog.legs;
    ghoulish.appendChild(dl);

    const dfc = document.createElement('p');
    dfc.textContent = dog.furcolor;
    ghoulish.appendChild(dfc);
}

function addBodyButtonListener(event) {
    const button1 = document.getElementById("dogBio");
    button1.addEventListener("click", present);
}

window.addEventListener('DOMContentLoaded', addBodyButtonListener);

// The dog speaks.
dog.speak = function bark() {
    const woofFact = alert('Woof!');
    };

// The dog moves.
dog.move = function happy() {
    const happyMotion = alert('The dog rolled on his back.');
    };

// The dog's speaking is there, at a click of the button1.
function addBarkButtonListener(event) {
    const button2 = document.getElementById("barkButton");
    button2.addEventListener("click", dog.speak);
}

window.addEventListener('DOMContentLoaded', addBarkButtonListener); 

// The dog's motion is there, at a click of the button2.
function addHappyButtonListener(event) {
    const button3 = document.getElementById("happyButton");
    button3.addEventListener("click", dog.move);
}

window.addEventListener('DOMContentLoaded', addHappyButtonListener);