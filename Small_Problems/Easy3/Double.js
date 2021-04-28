function isDouble(num) {
  let str = String(num)
  if (str.length % 2 != 0) {
    return num * 2;
  } else {
    let halfway = str.length / 2;
    for (let i = 0; i < halfway; i++) {
      if (str[i] !== str[i + halfway]) {
        return num * 2;
      }
    }
  }
  return num;
}


console.log(isDouble(37));

console.log(isDouble(103103));

console.log(isDouble(323111));

console.log(isDouble(32223222));

console.log(isDouble(0));