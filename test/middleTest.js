const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//test code
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]))