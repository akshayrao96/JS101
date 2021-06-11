function sequence(num1, num2) {
  let val = num2;
  let arr = [];
  for (let i = 0; i < num1; i++) {
    arr.push(val);
    val += num2;
  }
  return arr;
}


console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []