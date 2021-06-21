function rotateRightmostDigits(num, id) {
  let numArr = String(num).split("");
  let index = numArr.length - id;
  let arrReverse = numArr.slice(index);
  arrReverse = arrReverse.slice(1).concat(arrReverse[0]);
  return Number(numArr.slice(0, index).concat(arrReverse).join(""));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);

// 735291, 4
// [7, 3, 5, 2, 9, 1], id = 2
