function letterCaseCount(string) {
  let obj = {
    "lowercase": 0,
    "uppercase": 0,
    "neither": 0
  }
  let arr = string.split("");
  arr.forEach(element => {
    if (element.toLowerCase() !== element.toUpperCase() && element === element.toLowerCase()) {
      obj.lowercase++;
    } else if (element.toLowerCase() !== element.toUpperCase() && element === element.toUpperCase()) {
      obj.uppercase++;
    } else {
      obj.neither++;
    }
  });
  return obj;
}


letterCaseCount('abCdef 123'); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef'); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123'); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(''); // { lowercase: 0, uppercase: 0, neither: 0 }