// function sum(number) {
//   let num = number;
//   let result = 0;
//   while (num > 0) {
//     result += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return result;
// }

// let a = sum(23); // 5
// let b = sum(496); // 19
// let c = sum(123456789); // 45

// console.log(`${a}, ${b}, ${c}`);

function sum(number) {
  return String(number)
    .split("")
    .reduce((total, current) => Number(total) + Number(current));
}

let a = sum(23); // 5
let b = sum(496); // 19
let c = sum(123456789); // 45

console.log(`${a}, ${b}, ${c}`);
