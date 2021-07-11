const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(arr) {
  let total = [];
  let row = [];
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      row.push(matrix[i][j]);
    }
    total.push(row);
    row = [];
  }
  return total;
}

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]