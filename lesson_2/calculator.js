// Calculator designed to do basic operations to 2 numbers

let rls = require('readline-sync');

console.log("Welcome to calculator!\n");

console.log("What is your first number?");
let number1 = rls.question();

console.log("What is your second number?");
let number2 = rls.question();

console.log("What operation would you like to perform?\n1.) Add  2.) Subtract  3.) Multiply  4.) Divide");
let operation = rls.question();


let output;

if (operation == '1') {
  output = Number(number1) + Number(number2);
  console.log(`Result = ${output}`);
} else if (operation == '2') {
  output = Number(number1) - Number(number2);
  console.log(`Result = ${output}`);
} else if (operation == '3') {
  output = Number(number1) * Number(number2);
  console.log(`Result = ${output}`);
} else if (operation == '4') {
  output = Number(number1) / Number(number2);
  console.log(`Result = ${output}`);
} else {
  console.log("Please type a valid response to operation");
}

