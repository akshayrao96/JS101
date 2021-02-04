// Prompts user for integer > 0
// Prompts user to get sum or product of all numbers in between

let rls = require("readline-sync");
let int = rls.question("Please enter an integer greater than 0: ");
int = parseInt(int);

let letter = rls.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (letter === "s") {
  sum(int);
} else if (letter === "p") {
  product(int);
} else {
  console.log("Please enter either p or s");
}


function sum(int) {
  let total = 0;
  for (let num = 1; num <= int; num++) {
    total += num;

  }
  console.log("The sum of the integers between 1 and " + int + " is " + total + ".");
}

function product(int) {
  let total = 1;
  for (let num = 1; num <= int; num++) {
    total *= num;
  }
  console.log("The product of the integers between 1 and " + int + " is " + total + ".");
}