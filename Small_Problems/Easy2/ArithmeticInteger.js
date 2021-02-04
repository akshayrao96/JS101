let rls = require("readline-sync");

let num1 = rls.question("==> Enter the first number: \n");
num1 = parseInt(num1);

let num2 = rls.question("==> Enter the second numer: \n");
num2 = parseInt(num2);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);