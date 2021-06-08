function repeater(string) {
  console.log(string.split("").reduce((total, current) => total + current + current, ""));
}

repeater('Hello'); // "HHeelllloo"
repeater('Good job!'); // "GGoooodd  jjoobb!!"
repeater(''); // ""