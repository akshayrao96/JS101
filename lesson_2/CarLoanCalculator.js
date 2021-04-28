const rls = require("readline-sync");

function prompt(string) {
  console.log(`==> ${string}`);
}

prompt("What is the loan amount?");
const loanAmount = Number(rls.question());

prompt("What is the Annual Percentage Rate?");
const apr = Number(rls.question()) / 100;

prompt("What is the loan duration?");
const loanDuration = Number(rls.question());

const loanDurationMonth = loanDuration * 12;

const monthlyRate = apr / 12;

const monthlyPayment = (
  (loanAmount * monthlyRate) /
  (1 - (1 + monthlyRate) ** -loanDurationMonth)
).toFixed(2);

prompt("This is your monthly payment");
console.log(`$${monthlyPayment}`);
