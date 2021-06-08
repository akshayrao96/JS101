// Given string, write function change.
// Returns same string but all words in it that are palindromes uppercased.

// "We will meet at noon" = "We will meet at NOON"
// "No palindromes here" = "No palindromes here"
// "" = ""
// "I LOVE my mom and dad equally" = "I LOVE my MOM and DAD equally";

// Split into array
// Evaluate each element in array
// Join back

function change(string) {
  let arr = string.split(" ");
  arr = arr.map(function (element) {
    if (isPalindrome(element)) {
      return element.toUpperCase();
    } else {
      return element;
    }
  });
  console.log(arr);
  let result = arr.join(" ");
  return result;
}

function isPalindrome(word) {
  let halfway = word.length / 2;
  for (let i = 0; i <= halfway; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(change("We will meet at noon"));
//console.log(isPalindrome("noon"));
console.log(change("I LOVE my mom and dad equally"));