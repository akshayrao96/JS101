function featured(number) {
  let val = number + 1;
  while (!isFeatured(val)) {
    val++;
    if (val >= 9876543201) {
      break;
    }
  }
  console.log(val);
}

function isFeatured(num) {
  return (Number.isInteger(num / 7)) && (num % 2 === 1) && (differentDigits(num));
}

function differentDigits(num) {
  let arr = [];
  while (num != 0) {
    let digit = num % 10;
    if (arr.includes(digit)) {
      return false;
    }
    arr.push(digit);
    num = Math.floor(num / 10);
  }
  return true;
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543186); // 9876543201
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."