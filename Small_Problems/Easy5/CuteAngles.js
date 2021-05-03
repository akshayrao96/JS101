function gettingNum(num) {
  return num - Math.floor(num);
}

function getTime(num) {
  return num * 60;
}

function dms(num) {
  let firstStr = String(Math.floor(num)) + "˚";
  let num1 = gettingNum(num);
  let secondStr = String(Math.floor(getTime(num1))) + "'";
  let num2 = gettingNum(getTime(num1));
  let thirdStr = String(Math.floor(getTime(num2))) + '"';
  return firstStr + secondStr + thirdStr;
}




console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"