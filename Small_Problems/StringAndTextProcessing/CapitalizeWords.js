function wordCap(string) {
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(" ");
}

wordCap('four score and seven'); // "Four Score And Seven"
wordCap('the javaScript language'); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'