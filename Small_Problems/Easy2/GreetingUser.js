let rls = require("readline-sync");

let name = rls.question("What is your name? ");


if (name.charAt(name.length - 1) === "!") {
  name = name.substring(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

