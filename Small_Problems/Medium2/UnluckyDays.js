function fridayThe13ths(year) {
  let thirteens = [];
  for (let i = 0; i <= 12; i++) {
    thirteens.push(new Date(year, i, 13));
  };
  let count = 0;
  thirteens.forEach(element => {
    if (element.getDay() === 5) {
      count++;
    }
  });
  return count;
}


console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2