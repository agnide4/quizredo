


//Variables

let qDisplay = $(".qContainer");//display question
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
let countdown = (0.5*questions.length) * 60 * 1000;

console.log(countdown);

function showQuiz(){
   console.log(questions[qIndex]);
   let q = document.createElement("h2")
   console.log(q)
    q.innerHTML = questions[qIndex];
    aDisplay.empty();
    aDisplay.append(q);
     // console.log(aDisplay) 
    showChoices();  
  
}


function showChoices () {
    const entries = Object.values(answers[qIndex]);
        //console.log(entries.length);
    for (let i = 0; i < entries.length; i++) {
      let choices = document.createElement("button");
      choices.classList.add("btnr");
      choices.style.display = "block";
      choices.innerHTML= entries[i];
      aDisplay.append(choices);

      // aDisplay.appen("<p class='btnr'>")
    }

    

    clickedCh.empty;
    $(".btnr").on("click", function(){
        console.log(this);
        clickedCh = this.innerHTML;
        console.log(clickedCh);
        checkAnswer();
    });
    // create event listener

    
  }

  function checkAnswer(){
      if (clickedCh == corrChoices[qIndex]){
          //var result = document.createElement("h4");
          var result = "";
          points+=5;
          result += "You are correct. Your current score is: " + points;
          sDisplay.html(result);
          console.log(result, points);
      }else {
          //var result = document.createElement("h4");
          result = "";
          console.log(result, points);
          result += "Wrong answer. Your current score is: " + points;
          sDisplay.html(result);
          countdown -= (0.15*questions.length) * 60 * 1000;
      }

      quizFlow();   
     

  }

  function quizFlow(){
      qIndex++;
      if (qIndex<questions.length){
          showQuiz();
      }
      else{
          fScore();
       }
  }

  function fScore(){
    var fScore = "<h3>GAME OVER</h3>" + "<h4>Total score is : </h4>"  + points;
    var final = $("#final");
    showPopup();
    
    final.html(fScore);
    clearInterval(timerId);
  }

  function showPopup(){
      aDisplay.addClass("modal"); 
      $(".modal").addClass("active");
      sButton.html("try again");
      
 }

 function getName(){
     
 }


let timerId = setInterval(function(){
countdown -= 1000;
let min = Math.floor(countdown / (60 * 1000));
console.log(min);
  //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
let sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct
console.log(sec);
  if (countdown <= 0 && qIndex<questions.length) {
     showPopup();
     fScore();
     //doSomething();
  } else {
     tDisplay.html(min + " : " + sec);
  }

}, 1000);




showQuiz();
//console.log(showQuiz());
    
});



