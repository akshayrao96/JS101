function leadingSubstrings(string) {
  let result = [];
  for (let i = 1; i <= string.length; i++) {
    result.push(string.substring(0, i));
  }
  console.log(result);
}

leadingSubstrings('abc'); // ["a", "ab", "abc"]
leadingSubstrings('a'); // ["a"]
leadingSubstrings('xyzzy'); // ["x", "xy", "xyz", "xyzz", "xyzzy"]