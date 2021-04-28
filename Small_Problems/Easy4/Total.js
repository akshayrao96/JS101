function runningTotal(arr) {
  if (arr.length === 0) {
    return [];
  }
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i] + res[i - 1]);
  }
  console.log(res);
}

runningTotal([2, 5, 13]);
runningTotal([14, 11, 7, 15, 20]);
runningTotal([3]);
runningTotal([]);