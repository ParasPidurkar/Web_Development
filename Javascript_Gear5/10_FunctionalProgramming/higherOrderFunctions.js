// Higher Order Functions
// A function that recieves another function as an argument, returns a function, or does both

function doTwice(func) {
  func();
  func();
}

doTwice(function () {
  console.log("HELLO YOU PIG FACED RAT PERSON");
});

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const multBy10 = multiplyBy(10);
