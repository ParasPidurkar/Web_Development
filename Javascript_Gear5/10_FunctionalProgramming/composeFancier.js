function compose(...functions) {
  return function (data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function replaceS(str) {
  return str.replaceAll("s", "$");
}

function joinWithDash(array) {
  return array.join("-");
}

const sluggify = compose(joinWithDash, splitWords, lowerCaseString);

const lowerAndReplaceS = compose(replaceS, lowerCaseString);
