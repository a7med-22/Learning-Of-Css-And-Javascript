myString = "ahmed";
String.prototype.addPointBeforeAfter = function (val) {
  return `.${this}.`;
};

console.log(myString.addPointBeforeAfter());
console.log(String.prototype);
