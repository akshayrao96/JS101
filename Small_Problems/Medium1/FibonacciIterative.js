function fibonacci(number) {
  let arr = [1, 1];
  for (let i = 2; i < number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr[number - 1]);
}

fibonacci(20); // 6765
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050