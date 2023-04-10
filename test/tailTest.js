const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 7 for [5,6,7]", () => {
    assert.strictEqual(tail([5,6,7]), 7);
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs"); 
  });
});



// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// assertEqual(tail([5,6,7]), 7);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse");