function multiplyList(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

console.log((multiplyList([3, 5, 7], [9, 10, 11])));