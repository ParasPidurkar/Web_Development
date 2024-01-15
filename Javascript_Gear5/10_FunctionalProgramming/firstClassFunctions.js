function greet(person) {
  console.log(`Hello there, ${person}`);
}

function hate(person) {
  console.log(`I hate you, ${person}`);
}

function callWithBlue(func) {
  func("Blue");
}

callWithBlue((color) => {
  console.log(`${color} is the best color`);
});
