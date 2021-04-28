function wordSizes(word) {
  let obj = {};
  let arr = word.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let size = arr[i].length;
    if (!obj[size]) {
      obj[size] = 1
    } else {
      obj[size] += 1;
    }
  }
  return obj;
}

console.log(wordSizes("Four score and seven."));
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!)"));