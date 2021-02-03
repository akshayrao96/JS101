// function returns true if given number is odd
function isOdd(num) {
  return num % 2 == 1 || num % 2 == -1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
