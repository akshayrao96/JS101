function triangle(num) {
  let space = num - 1;
  let star = 1;
  while (num > 0) {
    console.log(`${" ".repeat(space)}${"*".repeat(star)}`);
    space--;
    star++;
    num--;
  }
}

triangle(9);
triangle(5);

