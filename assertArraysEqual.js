
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