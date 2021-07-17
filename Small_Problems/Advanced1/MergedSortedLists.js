function merge(arr1, arr2) {
  let result = [];
  let totalElements = arr1.length + arr2.length;
  let ptr1 = 0;
  let ptr2 = 0;
  for (let i = 0; i < totalElements; i++) {
    if (ptr2 === arr2.length || arr1[ptr1] <= arr2[ptr2]) {
      result[i] = arr1[ptr1];
      ptr1++;
    } else {
      result[i] = arr2[ptr2];
      ptr2++;
    }
  }
  return result;
}


// console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5])); // [1, 4, 5]
// console.log(merge([1, 4, 5], [])); // [1, 4, 5]

let arr1 = [1, 2, 3];
let arr2 = [1, 1, 2];
let res = merge(arr1, arr2);
console.log(arr1 + "   " + arr2 + "    " + res);