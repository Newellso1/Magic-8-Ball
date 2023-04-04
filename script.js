// Defining the Variables 
let userName = prompt("Enter Your Name");
let userNameCapitalized = userName.charAt(0).toUpperCase() + userName.slice(1);

// The possible responses for the eight ball
let answers = ["It is certain",
    "Probably not",
    "Without a doubt",
    "Most Likely",
    "Yes",
    "No",
    "Very doubtful",
    "My sources say no",
    "Ask again later",
    "Don't count on it",
    "For certain",
    ]

console.log(`Hello ${userNameCapitalized}, type ask() to ask the magical 8 ball a question`)

let userQuestion = "";
// Asking a question
function ask() {
    userQuestion = prompt('What do you want to know');
    console.log(`${userNameCapitalized} wants to know "${userQuestion}?"`);
    console.log(`The magical ball says...`);
    console.log(answers[Math.floor(Math.random() * answers.length)]);

}