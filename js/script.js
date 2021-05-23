// JavaScript source code

function my_name() {
    console.log("My name is Franklin Oliveira.")
    document.querySelector('p').textContent="My name is Franklin Oliveira."
}


function i_like() {
    console.log("I have many favorite foods.", '\n', "I like to eat salmon, broccoli and potatoes.", '\n',
        "I like to drink pepsi or beer.")
    document.querySelector('p').textContent = "I have many favorite foods. I like to eat salmon, broccoli and potatoes. I like to drink pepsi or beer."
}

var str = "Supercalifragilisticexpialidocious";
console.log(str.length);

console.log(typeof (4 + 3));

console.log(typeof BigInt(100) === 'bigint');

// Assign STRING VALUES ONLY to all of the following variables.
let adj1 = playful;
let adj2 = funny;
let adj3 = large;
let adj4 = happy;
let adj5 = Toy;
let adj6 = French;
let adverb = angrily;
let color = white;
let noun1 = friend;
let noun2 = newspaper;
let noun3 = bone;
let noun4 = home;
let noun5 = Cocker;
let noun6 = person;
let num = 11;
let pnoun1 = Shepherds;

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE


































//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(story);