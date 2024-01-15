const nums = [1, 2, 3, 4];

function push(arr, val) {
  return [...arr, val];
}

function removeLastItem(arr) {
  return arr.slice(0, -1);
}
