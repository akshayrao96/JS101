/* eslint-disable prefer-const */
const rls = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors"];

let playAgain = true;
function prompt(msg) {
  console.log(`=> ${msg}`);
}

while (playAgain) {
  prompt(`Welcome to  ${VALID_CHOICES.join(" ")} game!`);
  prompt(`Please pick an option from ${VALID_CHOICES.join(", ")}`);
  let userChoice = rls.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("Invalid option. Please pick again!");
    userChoice = rls.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`User choice = ${userChoice}. Computer choice = ${computerChoice}`);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    prompt("You win!");
  } else if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "paper")
  ) {
    prompt("You lose!");
  } else {
    prompt("It's a tie!");
  }

  prompt("Would you like to play again? (y/n)");
  let answer = rls.question().toLowerCase();

  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("Invalid choice. Please enter y/n");
    answer = rls.question().toLowerCase();
  }
  if (answer === "n") {
    prompt("Thanks for playing!");
    playAgain = false;
  }
}
