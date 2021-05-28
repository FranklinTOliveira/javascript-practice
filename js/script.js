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

// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

// Convert the values to integers
// Store the two integers as variables

let x = parseInt(a);
let y = parseInt(b);

// Compare the two numbers
// Alert the larger number

alert(Math.max(x, y));

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

if (x === Number.NaN) {
    prompt("Enter an actual number.");
  else if (y === Number.NaN) {
        prompt("Enter an actual number.");
    }
}
