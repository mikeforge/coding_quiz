// variables
var timer;
var timerCount;

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var quizStart = document.querySelector(".quiz-start");
var quizQuestions = document.querySelector(".quiz-questions");
var quizResults = document.querySelector(".quiz-results");


// setting defaults for splash page
quizStart.hidden = false;
quizQuestions.hidden = true;
quizResults.hidden = true;

//function to get the quiz going 

function startQuiz() {
  timerCount = 60;
  //disallow clicking of button during quiz
  startButton.disabled = true;
  startButton.hidden = true;
  startTimer()
}


//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page

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
    quizSpace.textContent = "Quiz Results";
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


//function to return to splash page
function resetQuiz () {
  clearInterval(timer);
  resetTimer();
}


// user clicks button to submit initials


// click button to start quiz
startButton.addEventListener("click", startQuiz);

// click button to return to splash page
resetButton.addEventListener("click",resetQuiz);
