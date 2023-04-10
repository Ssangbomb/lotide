
const tail = function(array) {
  let lastThing;
  for (let i = 0; i < array.length; i++) {
    lastThing = array[i];
  }
  return lastThing;
};


module.exports = tail;