function triangle(num1, num2, num3) {
  if (num1 + num2 + num3 != 180 || Math.min(num1, num2, num3) === 0) {
    return "invalid";
  } else if (Math.max(num1, num2, num3) < 90) {
    return "acute";
  } else if (Math.max(num1, num2, num3) === 90) {
    return "right";
  } else {
    return "obtuse"
  }
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"