const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositionsTest", () => {
  it("returns [2, 3] for letterPositions['Hello'].e", () => {
    assert.strictEqual(letterPositions("Hello").l, [2, 3]);
  });

  it("returns [4] for result1['Hello'].o", () => {
    assert.strictEqual(letterPositions("Hello").o, [4]);
  });

  it("returns [4] for letterPositions['Lighthouse'].t", () => {
    assert.strictEqual(letterPositions("Lighthouse").t, [4]);
  });
});
