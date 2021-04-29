// Program sums even consective numbers of the nth row

let num = 2;
let arr = [];

function sumRow(row) {
  for (let i = 0; i < row; i++) {
    arr[i] = rowResult(i + 1, num);
    num = arr[i][arr[i].length - 1] + 2;
  }
  return arr[row - 1].reduce((total, current) => total + current, 0);
}

function rowResult(row, num) {
  let currentNum = num;
  let helperArr = [];
  for (let i = 0; i < row; i++) {
    helperArr.push(currentNum);
    currentNum += 2;
  }
  return helperArr;
}


console.log(sumRow(4));