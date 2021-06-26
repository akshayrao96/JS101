function triangle(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
  if (((max === num1 && num2 + num3 < num1) ||
      (max === num2 && num1 + num3 < num2) ||
      (max === num3 && num2 + num1 < num3) ||
      min === 0)) {
    return "invalid";
  } else if (num1 === num2 && num2 === num3) {
    return "equilateral"
  } else if (num1 === num2 || num2 === num3 || num1 === num3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"