const letters = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(generateString());

function generateString() {
  let str1 = section(8, "");
  let str2 = section(4, "-");
  let str3 = section(4, "-");
  let str4 = section(4, "-");
  let str5 = section(12, "-");
  return (str1 + str2 + str3 + str4 + str5);

}

function section(num, start) {
  let str = start;
  for (let i = 0; i < num; i++) {
    str += String(letters[(Math.floor(Math.random() * letters.length))]);
  }
  return str;
}