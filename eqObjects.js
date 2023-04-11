// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } 
  for(let ob1 in object1) {    
    if(Array.isArray(object1[ob1]) && Array.isArray(object2[ob1])) {
      eqArrays(object1[ob1], object2[ob1]);
    } else {
      if(object1[ob1] !== object1[ob1]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;