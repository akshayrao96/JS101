const VOWELS = ["a", "e", "i", "o", "u"];

function removeVowels(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].split("").filter(letter => !VOWELS.includes(letter.toLowerCase())).join(""));
  }
  console.log(result);
}


removeVowels(['abcdefghijklmnopqrstuvwxyz']); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']); // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']); // ["BC", "", "XYZ"]