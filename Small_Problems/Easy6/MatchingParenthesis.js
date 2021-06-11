function isBalanced(string) {
  let left = 0;
  let right = 0;
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      left++;
    } else if (arr[i] === ")") {
      right++;
    }
    if (right > left) {
      return false;
    }
  }
  return left === right;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);