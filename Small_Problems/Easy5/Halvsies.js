function half(arr) {
  let result = [];
  let arr1 = [];
  let arr2 = [];
  let halfway = Math.ceil(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (i <= halfway - 1) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  result.push(arr1);
  result.push(arr2);
  return result;
}


console.log(half([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(half([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(half([5])); // [[5], []]
console.log(half([])); // [[], []]