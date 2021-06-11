function centerOf(string) {
  let result;
  let arr = string.split("");
  let arrLength = arr.length;
  if (arrLength % 2 === 1) {
    result = arr[(arrLength - 1) / 2];
  } else {
    let index1 = arr[(arrLength - 1) / 2 - 0.5];
    let index2 = arr[(arrLength - 1) / 2 + 0.5];
    result = index1 + index2;
  }
  return result;
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
