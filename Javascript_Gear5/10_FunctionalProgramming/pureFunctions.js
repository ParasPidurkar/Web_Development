// IMPURE
let value = 2;
function squareAndUpdateValue(num) {
  value = num * num;
  return value;
}

// PURE
function square(num) {
  return num * num;
}

// IMPURE
const colors = ["red", "orange"];
function addToArray(arr, value) {
  return arr.push(value);
}

// PURE
function pureAddToArray(arr, value) {
  return [...arr, value];
}
