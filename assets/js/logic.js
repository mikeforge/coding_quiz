// variables
var timer;
var timerCount;

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
// var resetButton = document.querySelector(".reset-button");
var submitButton = document.querySelector(".submit-button");
var quizStart = document.querySelector(".quiz-start");
var quizQuestions = document.querySelector(".quiz-questions");
var quizResults = document.querySelector(".quiz-results");
var quizHiScores = document.querySelector(".quiz-hi-scores");


// setting defaults for splash page
quizStart.hidden = false;
quizQuestions.hidden = true;
quizResults.hidden = true;
quizHiScores.hidden = true;

//function to get the quiz going 

function startQuiz() {
  timerCount = 10;
  //disallow clicking of button during quiz
  startButton.disabled = true;
  startButton.hidden = true;
  startTimer()
  quizQuestions.hidden = false;
}


//This is where I will set quizQuestions content to rotate through questions.

  //function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page

//

//function for the questionclick 
  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out

//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section

  function displayResults () {
    quizStart.hidden = true;
    quizQuestions.hidden = true;
    quizResults.hidden = false;
    startButton.disabled = false;
    startButton.hidden = false;
  }

 //function for the clock 
  //updates time
  //checks if user ran out of time 

  function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if(timerCount === 0) {
        clearInterval(timer);
        displayResults();
      }
    },1000);
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.textContent=60;
    startButton.disabled = false;
    startButton.hidden = false;
    }

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page

function submitScore () {
  //Need to get score and initials and set to local storage
}


//function to return to splash page
function resetQuiz () {
  clearInterval(timer);
  resetTimer();
}


// click button to start quiz
startButton.addEventListener("click", startQuiz);

//click button to submit score
submitButton.addEventListener("click",submitScore)

// click button to return to splash page
submitButton.addEventListener("click",resetQuiz);
