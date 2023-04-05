const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(arr1, arr2) {
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

const without = function(source, itemsToRemove) {
  let favorite = [];
  for(so of source) {
    if(!itemsToRemove.includes(so)) {
      favorite.push(so);
    }
  }
  return favorite;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);