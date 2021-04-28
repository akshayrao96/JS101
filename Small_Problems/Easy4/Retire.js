let rls = require('readline-sync');

console.log("What is your age?");
let age = rls.prompt();

console.log("At what age would you like to retire?");
let retireAge = rls.prompt();

const year = new Date().getFullYear();

console.log(`It's ${year}. You will retire in ${Number(year) + Number(retireAge - age)}.`);
console.log(`You have only ${retireAge - age} years of work to go!`);