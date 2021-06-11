function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  let firstElem = arr[0];
  let elem1;
  let elem2 = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    elem1 = arr[i];
    arr[i] = elem2;
    elem2 = elem1;
  }
  arr[arr.length - 1] = firstElem;
  return arr;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']); // ["b", "c", "a"]
rotateArray(['a']); // ["a"]
rotateArray([1, 'a', 3, 'c']); // ["a", 3, "c", 1]
rotateArray([{
    a: 2
  },
  [1, 2], 3
]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
array; // [1, 2, 3, 4]