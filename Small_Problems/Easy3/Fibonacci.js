function findFibonacciIndexByLength(numLength) {
  let first = 1;
  let second = 1;
  let count = 2;
  let fibNum;

  do {
    fibNum = first + second;
    count += 1;
    first = second;
    second = fibNum;
  } while (String(fibNum).length < numLength);
  return count;
}

console.log(findFibonacciIndexByLength(2)); // 1 1 2 3 5 8 13