function isPalindromicNumber(num) {
  num = String(num);
  let halfway = num.length / 2;
  for (let i = 0; i <= halfway; i++) {
    if (num[i] !== num[num.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(3));