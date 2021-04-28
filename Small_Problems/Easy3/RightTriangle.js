function triangle(num) {
  const numSpaces = num - 1;
  let numAstrx = 1;
  const asterix = "*";
  const space = " ";

  for (let i = numSpaces; i >= 0; i--) {
    console.log(space.repeat(i) + asterix.repeat(numAstrx));
    numAstrx++;
  }
}

triangle(9);
