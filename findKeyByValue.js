
const findKeyByValue = function(obj, value) {
  for(let ob in obj) {
    let theShow = obj[ob];
    if(theShow === value) {
      return ob;
    }
  }
}

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

