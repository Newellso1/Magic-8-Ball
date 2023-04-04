// Defining the Variables 
let userName = prompt("Enter Your Name");
let userNameFinal = "";

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

// Checks if a username has been entered and if so it returns it in Capital Case

if (userName == null) {
    console.log(`Hello, type ask() to ask the magical 8 ball a question`);
    userNameFinal = "Holder of the magical ball";
} else if (userName == "") {
    console.log(`Hello, type ask() to ask the magical 8 ball a question`);
    userNameFinal = "Holder of the magical ball";
} else {
    userNameFinal = userName.charAt(0).toUpperCase() + userName.slice(1);
    console.log(`Hello ${userNameFinal}, type ask() to ask the magical 8 ball a question`);
}

let userQuestion = "";
// Asking a question
function ask() {
    userQuestion = prompt('What do you want to know');
    console.log(`${userNameFinal} wants to know "${userQuestion}?"`);
    console.log(`The magical ball says...`);
    console.log(answers[Math.floor(Math.random() * answers.length)]);

}