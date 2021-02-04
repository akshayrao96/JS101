// Program logs full name, title and occupation of person

function greetings(arr, obj) {
  return `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
