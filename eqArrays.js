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

module.exports = eqArrays;
