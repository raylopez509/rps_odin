function getComputerChoice() {
  randnum = Math.floor(Math.random() * 3);
  switch (randnum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice = prompt(
      "Invalid choice. Please choose rock, paper, or scissors."
    ).toLowerCase();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

const output = document.createElement("div");
const score = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(output);
body.appendChild(score);

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    output.textContent = "You win! " + humanChoice + " beats " + computerChoice;
    score.textContent =
      "Human: " + ++humanScore + " Computer: " + computerScore;
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    output.textContent =
      "You lose! " + computerChoice + " beats " + humanChoice;
    score.textContent =
      "Human: " + humanScore + " Computer: " + ++computerScore;
  } else {
    output.textContent = "Tie!";
    score.textContent = "Human: " + humanScore + " Computer: " + computerScore;
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
