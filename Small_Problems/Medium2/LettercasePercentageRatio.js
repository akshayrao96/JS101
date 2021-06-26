function letterPercentages(string) {
  let res = {
    "lowercase": 0,
    "uppercase": 0,
    "neither": 0
  };
  let total = 0;
  string.split("").forEach(element => {
    if (element.toUpperCase() === element.toLowerCase()) {
      res["neither"]++;
    } else if (element === element.toUpperCase()) {
      res["uppercase"]++;
    } else {
      res["lowercase"]++;
    }
    total++;
  });
  res["lowercase"] = ((res["lowercase"] / total) * 100).toFixed(2);
  res["uppercase"] = ((res["uppercase"] / total) * 100).toFixed(2);
  res["neither"] = ((res["neither"] / total) * 100).toFixed(2);
  console.log(res);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }