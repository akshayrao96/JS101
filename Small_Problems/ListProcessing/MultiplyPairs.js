function multiplyAllPairs(arr1, arr2) {
  let res = [];
  arr1.forEach(element => {
    arr2.forEach(otherElement => {
      res.push(element * otherElement);
    });
  });
  res.sort((a, b) => a - b);
  console.log(res);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]