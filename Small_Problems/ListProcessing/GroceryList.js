function buyFruit(arr) {
  let result = [];
  arr.forEach(item => {
    for (let i = 1; i <= item[1]; i++) {
      result.push(item[0]);
    }

  });
  console.log(result);

}

buyFruit([
  ['apple', 3],
  ['orange', 1],
  ['banana', 2]
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]