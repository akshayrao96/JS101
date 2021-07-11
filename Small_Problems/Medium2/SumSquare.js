function sumSquareDifference(num) {
  let first = 0;
  let second = 0;

  for (let i = 1; i <= num; i++) {
    first += i;
    second += i ** 2;
  }
  return first ** 2 - second;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
