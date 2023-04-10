const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetter = function(string) {
  let countedStr = {};
  for(let str of string) {
   if(countedStr[str]) {
    countedStr[str] += 1;
   } else {
    countedStr[str] = 1;
   }
  }
  return countedStr;
}

module.exports = countLetter;

console.log(countLetter("lighthouse in the house"));