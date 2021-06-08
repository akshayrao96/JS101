const vowels = ["a", "e", "i", "o", "u"];

function doubleConsonants(string) {
  console.log(string.split("")
    .reduce((total, current) =>
      vowels.includes(current) ? total + current : total + current + current, ""));
}

doubleConsonants('String');
doubleConsonants('Hello-World!');
doubleConsonants('July 4th');
doubleConsonants('');