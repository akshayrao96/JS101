function transactionsFor(id, list) {
  return list.filter(obj => obj["id"] === id);
}


function isItemAvailable(id, list) {
  let result = 0;
  let iDList = transactionsFor(id, list);
  iDList.forEach(obj => {
    obj["movement"] === "in" ? result += obj["quantity"] : result -= obj["quantity"];
  });
  return result > 0;
}

let transactions = [{
    id: 101,
    movement: 'in',
    quantity: 5
  },
  {
    id: 105,
    movement: 'in',
    quantity: 10
  },
  {
    id: 102,
    movement: 'out',
    quantity: 17
  },
  {
    id: 101,
    movement: 'in',
    quantity: 12
  },
  {
    id: 103,
    movement: 'out',
    quantity: 20
  },
  {
    id: 102,
    movement: 'out',
    quantity: 15
  },
  {
    id: 105,
    movement: 'in',
    quantity: 25
  },
  {
    id: 101,
    movement: 'out',
    quantity: 18
  },
  {
    id: 102,
    movement: 'in',
    quantity: 22
  },
  {
    id: 103,
    movement: 'out',
    quantity: 15
  },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true