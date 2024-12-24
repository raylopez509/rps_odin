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

humanScore = 0;
computerScore = 0;
