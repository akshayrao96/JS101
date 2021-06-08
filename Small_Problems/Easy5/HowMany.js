let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];


function countOccurrences(arr) {
  let obj = {};
  arr.forEach(element => {
    if (!obj.hasOwnProperty(element)) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });
  for (let name in obj) {
    console.log(`${name} => ${obj[name]}`);
  }
}



countOccurrences(vehicles);