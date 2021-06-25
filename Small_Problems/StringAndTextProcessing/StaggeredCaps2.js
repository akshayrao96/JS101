function staggeredCase(string) {
  let counter = 0;
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === arr[i].toUpperCase()) {
      continue;
    }
    if (counter % 2 === 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
    counter++;
  }
  let result = arr.join("");
  return result;
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);