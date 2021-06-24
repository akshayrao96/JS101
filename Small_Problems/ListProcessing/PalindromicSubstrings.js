function palindromes(string) {
  let arr = substrings(string);
  let result = arr.filter(word => isPalindrome(word));
  console.log(result);
}

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  return result;
}

function isPalindrome(string) {
  if (string.length === 1) {
    return false;
  }
  for (let i = 0; i <= Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


palindromes('abcd'); // []
palindromes('madam'); // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]