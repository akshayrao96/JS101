const NUM_WORDS = ["zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine"
];

let obj = {};
for (let i = 0; i <= 9; i++) {
  obj[NUM_WORDS[i]] = i;
}

function wordToDigit(String) {
  let res = String.split("[\s+ .]").map(element => {
    if (NUM_WORDS.includes(element)) {
      return obj[element];
    } else {
      return element;
    }
  }).join("[\s+ .]");
  console.log(res);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."