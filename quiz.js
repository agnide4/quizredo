//Variables

let qDisplay = $("qcontainer");//display question
let aDisplay = $("quiz");//display answers
let tDisplay = $("timer");//display timer
let sDisplay = $("scores");//display scores
let sButton = $("start");//Start quiz on click

//Questions in an array & answers in objects
let questions = [
    "What is Javascript?",
    "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    "What are variables used for in JavaScript Programs?",
    "Which of the following are capabilities of functions in JavaScript?"
]

let answers = [
    q0 = {
        A: "A starbucks coffee",
        B: "Web programming language",
        C: "A latino style danse",
        D: "The name of french soldier Lancelot"

    },
    q1 = {
        A: "The User's machine running a Web browser",
        B: " The Web server",
        C: "A central machine deep within Netscape's corporate offices",
        D: "None of the above"
    },
    q2 = {
        A:"Storing numbers, dates, or other values",
        B:"Varying randomly",
        C:"Causing high-school algebra flashbacks",
        D:"None of the above"
    },

    q3= {
        A: "Return a value",
        B: "Accept parameters and Return a value",
        C: " Accept parameters",
        D: "None of the above"
    }

]

//Function to display quiz

let qIndex = 0; //current question index
let qmax = questions.length-1; //length of question array

for (let i = 0; i<qmax; i++){
    q = questions[qIndex];
    qDisplay = Text.q;
        



    


    


    
}

