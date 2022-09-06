let words = ["Madrid", "Rome", "Milan", "Berlin"];

let new_Words = words.filter(function (y) {
  return y.includes("m") || y.includes("M");
});

console.log(new_Words);