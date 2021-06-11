function maxRotation(number) {
  let result = number;
  let digits = String(result).length;
  for (let i = digits; i > 1; i--) {
    result = rotateRightmostDigits(result, i);
  }
  return result
}


function rotateRightmostDigits(num, id) {
  let numArr = String(num).split("");
  let index = numArr.length - id;
  let arrReverse = numArr.slice(index);
  arrReverse = arrReverse.slice(1).concat(arrReverse[0]);
  return Number(numArr.slice(0, index).concat(arrReverse).join(""));

}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845