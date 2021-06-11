function reverseNumber(number) {
  let result = "";
  while (number > 0) {
    let lastNum = number % 10;
    number = Math.floor(number / 10);
    result += lastNum;
  }
  return Number(result);
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
