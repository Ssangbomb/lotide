const assertArrayEqual = function(arr1, arr2) {
  for(a1 of arr1) {
    console.log(a1);
  }
  for(a2 of arr2) {
    console.log(a2);
  }
  if(a1 === a2) {
    console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
  } else if(a1 !== a2){
    console.log(`🛑🛑🛑Assertion Failed: ${a1} !== ${a2}`);
  }
}

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

const middle = function(array) {
  const middleindex = Math.floor(array.length / 2);
  if(array.length < 2) {
    return [];
  } 
  if(array.length % 2 === 0) {
    return [array[middleindex -1], array[middleindex]] ;
  } else if(array.length % 2 === 1) {
    return [array[middleindex]];
  }
}

module.exports = middle;



