function multiplicativeAverage(arr) {
  return Number.parseFloat(arr.reduce((total, current) => total * current) / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));