function bubbleSort(arr) {
  for (let itr = 0; itr < arr.length; itr++) {
    for (let i = 0; i < arr.length - 1; i++) {
      let num1 = arr[i];
      let num2 = arr[i + 1];
      if (num1 > num2) {
        arr[i] = num2;
        arr[i + 1] = num1;
      }
    }
  }
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]