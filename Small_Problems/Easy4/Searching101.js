let rls = require('readline-sync');

function searchingLast() {

  let arr = [];

  console.log("Enter the 1st number: ")
  let num1 = Number(rls.question());
  arr.push(num1);

  console.log("Enter the 2nd number: ")
  let num2 = Number(rls.question());
  arr.push(num2);

  console.log("Enter the 3rd number: ")
  let num3 = Number(rls.question());
  arr.push(num3);

  console.log("Enter the 4th number: ")
  let num4 = Number(rls.question());
  arr.push(num4);

  console.log("Enter the 5th number: ")
  let num5 = Number(rls.question());
  arr.push(num5);

  console.log("Enter the 6th number: ")
  let num6 = Number(rls.question());

  if (arr.includes(num6)) {
    console.log(`The number ${num6} appears in ${arr.join(",")}`);
  } else {
    console.log(`The number ${num6} does not appear in ${arr.join(",")}`);
  }
}

searchingLast();