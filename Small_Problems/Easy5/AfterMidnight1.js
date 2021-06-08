function timeOfDay(min) {
  if (min > 1440) {
    min = min % 1440;
  } else if (min < 0) {
    min = min % 1440;
    min += 1440;
  }
  let hours = getHour(min);
  let hourTime = Math.floor(hours);
  let minuteTime = getMinute(hours - hourTime);
  return toString(hourTime, minuteTime);
}

function getHour(minute) {
  return minute / 60;
}

function getMinute(time) {
  return Math.round(time * 60);
}

function toString(hours, min) {
  let str = "";
  if (hours < 10) {
    str += "0";
  }
  str += String(hours) + ":";
  if (min < 10) {
    str += "0"
  }
  str += String(min);
  return str;
}



console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");