function crunch(string) {
  if (string.length === 0) {
    return "";
  }
  let word = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      continue;
    } else {
      word += string[i];
    }
  }
  return word;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""