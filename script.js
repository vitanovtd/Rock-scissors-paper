const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");

rockButton.addEventListener("click", () => playRound("rock"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
paperButton.addEventListener("click", () => playRound("paper"));

const currentResult = document.getElementById("current-result");
const currentScore = document.getElementById("current-score");
const finalResult = document.getElementById("final-result");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  const result = determineWinner(humanChoice, computerChoice);

  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  // for (let i = 0; i < 5; i++) {
  //   let humanSelection = getHumanChoice();
  //   let computerChoice = getComputerChoice();

  //   let result = playRound(humanSelection, computerChoice);

  //   if (result === "human") {
  //     humanScore++;
  //   } else if (result === "computer") {
  //     computerScore++;
  //   }
  // }

  // console.log(
  //   `Final Scores is Human: ${humanScore} - Computer: ${computerScore}`
  // );

  if (humanScore > computerScore) {
    console.log("You are the winner!");
  } else if (computerScore > humanScore) {
    console.log("The computer wins!");
  } else {
    console.log("Its a draw!");
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `Its a draw! You choose ${humanChoice} versus ${computerChoice}`
    );
    return "draw";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

// playGame();
