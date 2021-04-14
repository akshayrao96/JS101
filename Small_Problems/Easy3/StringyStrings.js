function stringy(num) {
  let final = "";
  for (let i = 0; i < num; i++) {
    final += (i % 2 == 0) ? 1 : 0;
  }
  console.log(final);

}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"