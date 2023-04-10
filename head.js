
const head = function(array) {
  let firstThing;
  for(let i = 0; i < array.length; i++) {
    firstThing = array[0];
  }
  return firstThing;
}

module.exports = head;
