// Next biggest number

function nextBiggerNumber(num) {
  if (Math.floor(num / 10) === 0) {
    return -1;
  }
  arrOfNums = String(num).split("");
  for (let i = arrOfNums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < arrOfNums.length; j++) {

    }
  }


}


console.log(nextBiggerNumber(9) === -1);
console.log(nextBiggerNumber(12) === 21);
console.log(nextBiggerNumber(513) === 531);
console.log(nextBiggerNumber(2017) === 2071);
console.log(nextBiggerNumber(111) === -1);
console.log(nextBiggerNumber(531) === -1);
console.log(nextBiggerNumber(123456789) === 123456798);


// 1423 => 1432
// [1, 3, 6, 2]
// 1243


// boolean function, 
// if true, return
// otherwise, continue;