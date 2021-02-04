// Prompts user to input length and width of room in meters
// Returns area in square meters and square feet

const SQUARE_FEET = 10.7639;

let rlc = require("readline-sync");

let length = rlc.question("Enter the length of the room in meters: \n");
let width = rlc.question("Enter the width of the room in meters: \n");

console.log(`The area of the room is ${length * width} square meters (
  ${length * width * SQUARE_FEET}).`);