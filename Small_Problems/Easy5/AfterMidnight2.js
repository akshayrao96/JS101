const MAX_MINS = 24 * 60;

function afterMidnight(string) {
  let minutes;
  let arr = string.split(":");
  if (Number(arr[0]) !== 24) {
    minutes = Number(arr[0]) * 60;
  } else {
    minutes = 0;
  }
  minutes += Number(arr[1]);
  return minutes;
}

function beforeMidnight(string) {
  let minutes;
  let arr = string.split(":");
  minutes = Number(arr[0]) * 60;
  minutes += Number(arr[1]);
  let result = MAX_MINS - minutes;
  if (result === 1440) {
    return 0;
  }
  return result;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
