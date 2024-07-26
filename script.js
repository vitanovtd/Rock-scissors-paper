let humanScore = 0;
let computerScore = 0;

//function for random computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getHumanChoice(userChoice) {
  const choices = ["rock", "paper", "scissors"];

  let userInput = prompt(
    "Please enter your choice (rock, paper, or scissors):"
  ).toLowerCase();

  return userInput;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
