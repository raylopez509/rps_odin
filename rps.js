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

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
    } else if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "rock")
    ) {
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
      computerScore++;
    }
  }
  let humanScore = 0;
  let computerScore = 0;
  let ROUNDS_PLAYED = 5;
  for (let i = 0; i < ROUNDS_PLAYED; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("computer score: " + computerScore);
  console.log("human score: " + humanScore);
}

playGame();
