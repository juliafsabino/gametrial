const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let userChoice = null;

// Add click event listeners to buttons
rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissors.addEventListener("click", scissorsClick);

function rockClick() {
  userChoice = "rock";
  paperClicked = false;
  scissorsClicked = false;
  choiceClick(); // Call choiceClick directly here
}

function paperClick() {
  userChoice = "paper";
  rockClicked = false;
  scissorsClicked = false;
  choiceClick(); // Call choiceClick directly here
}

function scissorsClick() {
  userChoice = "scissors";
  rockClicked = false;
  paperClicked = false;
  choiceClick(); // Call choiceClick directly here
}

function choiceClick() {
  if (userChoice === null) {
    alert("Please choose Rock, Paper, or Scissors!");
    return;
  }

  const resultText = document.getElementById("result");
  resultText.textContent = "You chose " + userChoice;

  // add logic here like generate computer choice n determine winner

  const computerChoice = Math.random() > 0.5 ? "rock" : "paper";
  const computerText = document.getElementById("computer");
  computerText.textContent = "Computer chose " + computerChoice;

  let winner = "";
  if (userChoice == computerChoice) {
    winner = "Tie!";
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    winner = "You Win!";
  } else if (userChoice == "paper" && computerChoice == "rock") {
    winner = "You Win!";
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    winner = "You Win!";
  } else {
    winner = "You Lose!";
  }

  const scoreText = document.getElementById("score");
  scoreText.textContent = winner;
  
 
}