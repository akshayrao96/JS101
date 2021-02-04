function xor(first, second) {
  if ((first && second) || (!first && !second)) {
    return false;
  } else {
    return true;
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));