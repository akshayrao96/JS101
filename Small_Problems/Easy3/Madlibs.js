let rls = require("readline-sync");
let noun = rls.question("Enter a noun: ");
let verb = rls.question("Enter a verb: ");
let adj = rls.question("Enter a adj: ");
let adverb = rls.question("Enter a adverb: ");

console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? Oh my!`);