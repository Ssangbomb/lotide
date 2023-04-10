const assertEqual = require('./assertEqual');

const head = function(array) {
  let firstThing;
  for(let i = 0; i < array.length; i++) {
    firstThing = array[0];
  }
  return firstThing;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");