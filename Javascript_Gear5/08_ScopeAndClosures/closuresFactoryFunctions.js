function createExponentFunction(exponent) {
  return function (val) {
    return val ** exponent;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator("book-");
const getUserId = uniqueIdGenerator("user_");
