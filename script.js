function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerChoice = getComputerChoice();

    let result = playRound(humanSelection, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  console.log(
    `Final Scores is Human: ${humanScore} - Computer: ${computerScore}`
  );

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

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];

  let userInput = prompt(
    "Please enter your choice (rock, paper, or scissors):"
  ).toLowerCase();

  while (!choices.includes(userInput)) {
    userInput = prompt(
      "Invalid choice. Please enter rock, scissors or paper"
    ).toLowerCase();
  }

  return userInput;
}

function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();

  if (human === computerChoice) {
    console.log(
      `Its a draw! You choose ${human} versus ${computerChoice} computer choice`
    );
    return "draw";
  }

  if (
    (human === "rock" && computerChoice === "scissors") ||
    (human === "scissors" && computerChoice === "paper") ||
    (human === "paper" && computerChoice === "rock")
  ) {
    console.log(`You won! ${human} beats ${computerChoice}`);
    return "human";
  } else if (
    (human === "scissors" && computerChoice === "rock") ||
    (human === "paper" && computerChoice === "scissors") ||
    (human === "rock" && computerChoice === "paper")
  ) {
    console.log(`You lost! ${computerChoice} beats ${human}`);
    return "computer";
  }
}

playGame();
