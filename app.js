//using let
let greeting = "Hello";
let greetingTwo = 'Hello';
let greetingThree = `Hello`;

let templateString = `My computer says ${greeting} and ${greetingTwo}`;

console.log(templateString);

//using var
if(true) {
    var language = "JavaScript";
}

console.log(language);

//using const
const birthYear = 1994;
const isHuman = true;

//get user input
let response = prompt("What is your name?");

//alert(`Hello, ${response}!`);

//DOM Manipulation
document.getElementById("title").innerHTML = `Hello, ${response}!`;