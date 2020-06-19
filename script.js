//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var louisScore = 0;
var washingtonScore = 0;
var jeffersonScore = 0;
var georgeScore = 0;
var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", louis);
q1a2.addEventListener("click", washington);
q1a3.addEventListener("click", jefferson);
q1a4.addEventListener("click", george);

q2a1.addEventListener("click", louis);
q2a2.addEventListener("click", washington);
q2a3.addEventListener("click", jefferson);
q2a4.addEventListener("click", george);

q3a1.addEventListener("click", louis);
q3a2.addEventListener("click", washington);
q3a3.addEventListener("click", jefferson);
q3a4.addEventListener("click", george);

q4a1.addEventListener("click", louis);
q4a2.addEventListener("click", washington);
q4a3.addEventListener("click", jefferson);
q4a4.addEventListener("click", george);

q5a1.addEventListener("click", louis);
q5a2.addEventListener("click", washington);
q5a3.addEventListener("click", jefferson);
q5a4.addEventListener("click", george);

//for disabling buttons
q1a1.addEventListener("click", disableButton1);
q1a2.addEventListener("click", disableButton1);
q1a3.addEventListener("click", disableButton1);
q1a4.addEventListener("click", disableButton1);

q2a1.addEventListener("click", disableButton2);
q2a2.addEventListener("click", disableButton2);
q2a3.addEventListener("click", disableButton2);
q2a4.addEventListener("click", disableButton2);

q3a1.addEventListener("click", disableButton3);
q3a2.addEventListener("click", disableButton3);
q3a3.addEventListener("click", disableButton3);
q3a4.addEventListener("click", disableButton3);

q4a1.addEventListener("click", disableButton4);
q4a2.addEventListener("click", disableButton4);
q4a3.addEventListener("click", disableButton4);
q4a4.addEventListener("click", disableButton4);

q5a1.addEventListener("click", disableButton5);
q5a2.addEventListener("click", disableButton5);
q5a3.addEventListener("click", disableButton5);
q5a4.addEventListener("click", disableButton5);

restart.addEventListener("click", restartQuiz);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;

  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;

  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
}

function restartQuiz() {
  result.innerHTML = "Your result is..";

  questionCount = 0;
  louisScore = 0;
  washingtonScore = 0;
  jeffersonScore = 0;
  georgeScore = 0;

  enableQuestions();
}

//#TODO: Define quiz functions here
function louis() {
  louisScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function washington() {
  washingtonScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function jefferson() {
  jeffersonScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function george() {
  georgeScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (louisScore >= 3) {
    result.innerHTML = "You are Louis XIV!";
  } else if (washingtonScore >= 3) {
    result.innerHTML = "You are George Washington!";
  } else if (jeffersonScore >= 3) {
    result.innerHTML = "You are Thomas Jefferson!";
  } else if (georgeScore >= 3) {
    result.innerHTML = "You are George III!";
  } else {
    result.innerHTML = "Your time machine was caught in a wormhole. Try again.";
  }
}

function disableButton1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}

function disableButton2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}

function disableButton3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}

function disableButton4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}

function disableButton5() {
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
  document.getElementById("q5a4").disabled = true;
}
