function isUppercase(string) {
  console.log(string.split("").every(letter => letter === letter.toUpperCase()));
}


isUppercase('t'); // false
isUppercase('T'); // true
isUppercase('Four Score'); // false
isUppercase('FOUR SCORE'); // true
isUppercase('4SCORE!'); // true
isUppercase(''); // true