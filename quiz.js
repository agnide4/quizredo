


//Variables

//let qDisplay = $("#qCtn");//display question
let aDisplay = $("#qZ");//display answers
let tDisplay = $("#time");//display timer
let sDisplay = $("#points");//display scores
let sButton = $("#start");//Start quiz on click

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
        B: "The Web server",
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


let corrChoices = [
    "Web programming language",
    "The Web server",
    "Storing numbers, dates, or other values",
    "Accept parameters and Return a value",

]


$(document).ready(function(){

//Function to display quiz

let qIndex = 0; //current question index
let qmax = questions.length-1; //length of question array
let clickedCh = "";
let points = 0;

function showQuiz(){
   console.log(questions[qIndex]);
   let q = document.createElement("h3")
   console.log(q)
    q.innerHTML = questions[qIndex];
    aDisplay.empty();
    aDisplay.append(q);
     // console.log(aDisplay) 
    showChoices();  
  
}


function showChoices () {
    const entries = Object.values(answers[qIndex]);
        console.log(entries.length);
    for (let i = 0; i < entries.length; i++) {
      let choices = document.createElement("button");
      choices.classList.add("btnr");
      choices.style.display = "block";
      choices.innerHTML= entries[i];
      aDisplay.append(choices);

      // aDisplay.appen("<p class='btnr'>")
    }

    

    clickedCh.empty;
    $("btnr").on("click", function(){
        console.log(this.innerHTML);
        clickedCh = this.innerHTML;
    });
    // create event listener
  }

  function checkAnswer(){
      if (clickedCh == corrChoices[qIndex]){
          var result = sDisplay.createElement("h4");
          result = "";
          result.innerHTML = "You are correct" + points;
          points+=5;
          
      }else {
          var result = sDisplay.createElement("h4");
          result = "";
          result.innerHTML = "Wrong answer" + points;
      }
     

  }

  function quizFlow(){
      qIndex++;
      if (qIndex<questions.length){
          showQuiz();
      }
      else{
          
          var end = $("#finals").createElement(h1);
          end.innerHTML = "GAME OVER <br> Total score is:" + points ;




      }
  }




showQuiz();
//console.log(showQuiz());
    
});



