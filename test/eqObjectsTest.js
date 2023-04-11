const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObject", () => {
  it("returns true if shirtObject is same as anotherShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

  it("returns false if shirtObject is different as anotherShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });

});

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
