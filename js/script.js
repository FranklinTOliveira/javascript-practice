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

//Daily Challenge
//alert user is number is even or odd
//number as argument

let isOdd = function (n) {
    if (n % 2 === 0) {
        return false;
    } else {
        return true;
    }
}
let n = 1;
alert(isOdd(n));

const input = "somepassword";

function startsWithLetter(characterCode) {
    const firstLetterCode = characterCode.charCodeAt(0);

    if (firstLetterCode >= 97 && firstLetterCode <= 122 || firstLetterCode >= 65 & firstLetterCode <= 90) {
        alert("First character is a letter");
    } else {
        alert("First character is not a letter");
    }
}

startsWithLetter(input);

function validatePassword(password) {
    const length = password.length;

    if (length >= 6 && length <= 20) {
        alert("Meets length requirement.");
    } else {
        alert("Doesn't meet length requirement.");
    }
}

validatePassword(input);