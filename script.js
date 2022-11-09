// 1 --- ROCK
// 2 --- PAPER
// 3 --- SCISSORS
let playerChoice;
let playerChoiceInt;
let compChoiceInt;

let playerScore = 0;
let compuScore = 0;

const buttons = document.querySelectorAll(".btn");

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compuScore}`;

const output = document.querySelector("#output");
output.textContent = `May the odds be in your favour!`;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    game(playerChoice);
  });
});

function getComputerChoice() {
  let randomNr = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (randomNr === 1) {
    choice = "ROCK";
  } else if (randomNr === 2) {
    choice = "PAPER";
  } else {
    choice = "SCISSORS";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  let result = "";
  if (playerSelection.toUpperCase() === computerSelection) {
    result = "It's a TIE!";
    output.textContent = `Its a tie! You chose ${playerSelection} and The computer chose ${computerSelection}`;
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "PAPER"
  ) {
    result = "You LOST! Paper beats Rock";
    output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    compuScore++;
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "SCISSORS"
  ) {
    result = "You WIN! Rock beats Scissors";
    output.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    playerScore++;
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "ROCK"
  ) {
    result = "You WIN! Paper beats Rock";
    output.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    playerScore++;
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "SCISSORS"
  ) {
    result = "You LOST! Scissors beats Paper";
    output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    compuScore++;
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "PAPER"
  ) {
    result = "You WIN! Scissors beats Paper";
    output.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    playerScore++;
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "ROCK"
  ) {
    result = "You LOST! Rock beats Scissors";
    output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    compuScore++;
  } else {
    return "You have entered something incorrectly";
  }
  return result;
}

function game(playerChoice) {
  output.textContent = "Choose Rock, Paper, or Scissors";
  playRound(playerChoice, getComputerChoice());
  player.textContent = `Player Score: ${playerScore}`;
  computer.textContent = `Computer Score: ${compuScore}`;

  if (playerScore == 5) {
    output.textContent = "You Won the Game! Congrats";
    playerScore = 0;
    compuScore = 0;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compuScore}`;
  } else if (compuScore == 5) {
    output.textContent = "You Lost the game:/ Better luck next time?";
    playerScore = 0;
    compuScore = 0;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compuScore}`;
  }
}
// game();
