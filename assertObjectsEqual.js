const eqArrays = function(arr1, arr2) {
  for(a1 of arr1) {
    console.log(a1);
  }
  for(a2 of arr2) {
    console.log(a2);
  }
  if(a1 === a2) {
    return true;
  } else {
    return false;
  }
}

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } 
  for(let ob1 in object1) {    
    if(Array.isArray(object1[ob1]) && Array.isArray(object2[ob1])) {
      eqArrays(object1[ob1], object2[ob1]);
    } else {
      if (typeof(object1[ob1]) !== typeof(object2[ob1])) {
        return false
      } else if(object1[ob1] !== object2[ob1]) {
        return false;
      }
    }
  }
  return true;
};

var object1 = {
  car : 2,
  house : [1, 4, [5, 6]]
}

var object2 = {
  car : 3,
  house : 5
}

var object3 = {
  car : 2,
  house : 3,
  dog : 7
}

var object4 = {
  car : 2,
  house : [1, 4, [5, 6]]
}



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if(eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed:" ,actual," === ", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" ,actual," !== ", expected);
  }
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
};



assertObjectsEqual(object1, object4);

