function sumOfSums(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr.slice(0, i + 1).reduce((total, current) => total + current);
  }
  return result;
}


console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35