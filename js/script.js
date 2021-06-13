// JavaScript source code

function my_name() {
    console.log("My name is Franklin Oliveira.")
    document.querySelector('p').textContent = "My name is Franklin Oliveira."
}


function i_like() {
    console.log("I have many favorite foods.", '\n', "I like to eat salmon, broccoli and potatoes.", '\n',
        "I like to drink pepsi or beer.")
    document.querySelector('p').textContent = "I have many favorite foods. I like to eat salmon, broccoli and potatoes. I like to drink pepsi or beer."
}

// CHALLENGE 1
// Prompt the user for their first name
var firstname = prompt("Please enter your first name");

if (firstname == null || firstname == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + firstname + "! How are you today?";
}

// Store their input to a variable

var identity = document.getElementById(firstname).value;

// Reverse your user’s name

function reverseString(firstname) {
    return firstname.split('').reverse().join('');
}

// alert the reversed string

alert(reverseString);

// Challenge 2
// Prompt for a number value (provide a default of 10)

var x = prompt("Enter a Value", "10");
var num1 = parseInt(x);

// Prompt for a second number value (provide a default of 10)

var y = prompt("Enter a Value", "10");
var num2 = parseInt(y);

// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

alert(x + y);


// Ask for the user's first name

var firstname = prompt("Please enter your first name");

if (firstname == null || firstname == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + firstname + "! How are you today?";
}

// Ask for the user's last name

var lastname = prompt("Please enter your last name");

if (lastname == null || lastname == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + lastname + "! How are you today?";
}

// Log the user's first name to the console

console.log(firstname);

// Alert the user's last name

alert(lastname);

// *BONUS* 
// Ask for the user's birthday

var birthday = prompt("Please enter your birthday");

if (birthday == null || birthday == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + birthday + "! How are you today?";
}

// Ask the user to confirm their birthday input

if (confirm("Is this really your birthday?")) {
    txt = "Thank you!";
} else {
    txt = "Good day!";
}

// Alert the user's birthday

alert(birthday);
