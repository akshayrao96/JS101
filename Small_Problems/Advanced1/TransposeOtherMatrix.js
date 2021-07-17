function transpose(matrix) {
  let result = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  //matrix[0][0], matrix[1][0], matrix[2][0]
  for (let i = 0; i < columns; i++) {
    let temp = [];
    for (let j = 0; j < rows; j++) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  return result;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
];

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix); // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]); // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
transpose([[1]]); // [[1]]

console.log(
  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
  ])
);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
