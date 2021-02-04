// Prompts for bill amount and tip rate
// Returns tip and total

let rls = require("readline-sync");
let bill = rls.question("What is the bill? ");
bill = parseInt(bill);

let tipPercentage = rls.question("What is the tip percentage? ");
tipPercentage = parseInt(tipPercentage);

let tip = tipPercentage * bill / 100;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(tip + bill).toFixed(2)}`);