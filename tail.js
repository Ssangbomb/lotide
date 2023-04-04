const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let lastThing;
  for (let i = 0; i < array.length; i++) {
    lastThing = array[i];
  }
  return lastThing;
};
