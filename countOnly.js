// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countedList = {};
  for(let item of allItems) {
    if(itemsToCount[item]) {
      if(countedList[item]){
        console.log(item);
        countedList[item] += 1;
      } else {
        countedList[item] = 1;
      }
    }
  }
  return countedList;
}

module.exports = countOnly;
