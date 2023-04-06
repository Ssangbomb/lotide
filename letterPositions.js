
const assertArraysEqual = function(arr1, arr2) {
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++) {
    if(results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

console.log(letterPositions("hello").l)