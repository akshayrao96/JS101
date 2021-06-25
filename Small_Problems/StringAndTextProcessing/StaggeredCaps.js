function staggeredCase(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    i % 2 == 0 ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].toLowerCase();
  }
  let result = arr.join("");
  console.log(result);
}

staggeredCase('I Love Launch School!'); // "I LoVe lAuNcH ScHoOl!" 
staggeredCase('ALL_CAPS'); // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers'); // "IgNoRe 77 ThE 4444 nUmBeRs"