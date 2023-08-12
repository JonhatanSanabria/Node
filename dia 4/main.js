var words = ["uno", "dos", "tres", "cuatro"];
words.forEach(function (word) {
  console.log(word);
  if (word === "dos") {
    words.shift();
  }
});