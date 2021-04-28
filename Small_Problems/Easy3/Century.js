function displayCentury(num) {
  let ending;
  let century = Math.ceil(num / 100);
  if (century === 11 || century === 12 || century === 13) {
    ending = "th";
    return String(century) + ending;
  }
  century = String(century);
  switch (century[century.length - 1]) {
    case "1":
      ending = "st";
      break;
    case "2":
      ending = "nd";
      break;
    case "3":
      ending = "rd";
      break;
    default:
      ending = "th";
  }
  return century + ending;
}

console.log(displayCentury(1052));
console.log(displayCentury(1053));
console.log(displayCentury(412421));
console.log(displayCentury(12122));
console.log(displayCentury(2021));
console.log(displayCentury(1849));