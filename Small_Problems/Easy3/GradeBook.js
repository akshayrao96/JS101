function grades(score) {
  if (score > 90 && score <= 100) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
}

function getGrade(num1, num2, num3) {
  console.log(grades((num1 + num2 + num3) / 3));
}

getGrade(95, 90, 93);
getGrade(50, 50, 95);