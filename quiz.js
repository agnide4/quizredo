


//Variables targeted for DOM manipulation

let qDisplay = $(".qContainer");//display question
let aDisplay = $("#qZ");//display answers
let tDisplay = $("#time");//display timer
let sDisplay = $("#points");//display scores
let sButton = $("#start");//Start quiz on click
let table = document.getElementById("tScore");

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
let clickedCh = ""; //clicked answer
let points = 0; //score
let countdown = (0.5*questions.length) * 60 * 1000; //length of minutes per questions
let timerId = 0; //timer


//Displaying the questions
function showQuiz(){
   
   let q = document.createElement("h2")
   
    q.innerHTML = questions[qIndex];
    aDisplay.empty();
    aDisplay.append(q);
    
    showChoices();  
  
}

//displaying the answers
function showChoices () {
    const entries = Object.values(answers[qIndex]);
    
    for (let i = 0; i < entries.length; i++) {
      let choices = document.createElement("button");
      choices.classList.add("btnr");
      choices.style.display = "block";
      choices.innerHTML= entries[i];
      aDisplay.append(choices);

     
    }

    

    //log user answer value
    clickedCh.empty;
    $(".btnr").on("click", function(){
        clickedCh = this.innerHTML;
        checkAnswer();
    });
    
    
  }


 //compare user choice to correct answers array
  function checkAnswer(){
      if (clickedCh == corrChoices[qIndex]){
          var result = "";
          points+=5;
          result += "You are correct. Your current score is: " + points;
          sDisplay.html(result);
          
      }else {
          result = "";
          result += "Wrong answer. Your current score is: " + points;
          sDisplay.html(result);
          countdown -= (0.15*questions.length) * 60 * 1000;
      }

      quizFlow();   
     

  }


  //move through the quiz
  function quizFlow(){
      qIndex++;
      if (qIndex<questions.length){
          showQuiz();
      }
      else{
          fScore();
       }
  }


  //Final score at the end of the quiz
  function fScore(){
    var final = $("#final");
    showPopup();
    final.html(points);
    clearInterval(timerId);
    
    
  }


  //Display modal over quiz at the end of quiz
  function showPopup(){
      checkLclStorage();
      aDisplay.addClass("modal"); 
      $(".modal").addClass("active");
      sButton.html("try again");
      sButton.on("click", function(){
          qIndex=0;
          location.reload(true);

      })


     
     
 }


    
  
    //Checking local storage before storing new player data 
    function checkLclStorage(){
      
        var prevPlayers = JSON.parse(localStorage.getItem('players')) || [];
        
        if (prevPlayers.length == 0){
            $("#userAction").on('click', function(){
                let player = {
                    name: "",
                    score: points,
                 }
                 $("#userAction").attr("disabled", true);
                player.name = $("#userInput").val();
                player.score = points;
                prevPlayers.push(player);
                localStorage.setItem('players', JSON.stringify(prevPlayers));
                prevPlayers = JSON.parse(localStorage.getItem('players'));
               
                scoreTable(prevPlayers);
        
            });
        }else if (prevPlayers.length > 0  && prevPlayers.length<10){
            
            $("#userAction").on('click', function(){
                let player = {
                    name: "",
                    score: points,
                 }
                $("#userAction").attr("disabled", true);
                player.name = $("#userInput").val();
                player.score = points;
                prevPlayers.push(player);
                localStorage.setItem('players', JSON.stringify(prevPlayers));
                
                scoreTable(prevPlayers);
                

            });        
        } else if (prevPlayers.length = 10){
            $("#userAction").on('click', function(){
                let player = {
                    name: "",
                    score: points,
                 }
                 $("#userAction").attr("disabled", true);
                player.name = $("#userInput").val();
                player.score = points;
                prevPlayers.sort(compareScores);
                
                if (player.score < prevPlayers[9].score){
                    
                    sButton.html("You need to study more. <br> Try again?");
                    
                }else {
                prevPlayers.pop();
                prevPlayers.push(player);
                localStorage.setItem('players', JSON.stringify(prevPlayers));
                prevPlayers = JSON.parse(localStorage.getItem('players'));
                prevPlayers.sort(compareScores);
                
                }
                scoreTable(prevPlayers);
                
            });   

        }
        

    
    }

   
    //Defining comparison terms
    function compareScores(a,b){
            a = a.score;
            b = b.score;
            let comparison = 0;
            if (a<b) {
            comparison = 1;
           } else if (a>b) {
    comparison = -1;
  }
            return comparison;
}


//Rendering the score table
function scoreTable(Array){
    Array.sort(compareScores);
    tData = Object.keys(Array[0]);
    tHead(table,tData);
    tRow(table,Array);

}
//Table score header
function tHead(table, tData){
    let row = table.insertRow(0);
    for(let key of tData){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    
    }
    
}
//Table score Data
function tRow(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
 
 //Start button
 
sButton.on('click', function(){
    
    timerId = setInterval(function(){
        showQuiz();
        countdown -= 1000;
        let min = Math.floor(countdown / (60 * 1000));
        
        let sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct
       
          if (countdown <= 0 && qIndex<questions.length) {
             showPopup();
             fScore();
          } else {
             tDisplay.html(min + " : " + sec);
          }
        
        }, 1000);     
        
       

});



    
});



