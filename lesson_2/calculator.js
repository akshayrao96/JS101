// Calculator designed to do basic operations to 2 numbers

let number1;
let number2;
let result;

do {
  function prompt(message) {
    console.log(`=> ${message}`);
  }
  const rls = require("readline-sync");

  prompt("Welcome to calculator!");

  prompt("What is your first number?");
  number1 = rls.question();

  function isValidNum(num) {
    return num.trimStart() === "" || Number.isNaN(Number(num));
  }

  while (isValidNum(number1)) {
    prompt("That doesn't seem to be a valid number... Please try again");
    number1 = rls.question();
  }

  prompt("What is your second number?");
  number2 = rls.question();

  while (isValidNum(number2)) {
    prompt("That doesn't seem to be a valid number... Please try again");
    number2 = rls.question();
  }

  prompt(
    "What operation would you like to perform?\n1.) Add  2.) Subtract  3.) Multiply  4.) Divide"
  );
  let operation = rls.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Please enter 1, 2, 3 or 4");
    operation = rls.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
    // no default
  }

  prompt(`Result = ${output}`);
  prompt("Would you like to play again\n1.) y 2.) n");
  result = rls.question().toLowerCase();
} while (result === "y");
