/* exported union */
/*
create new array
look at first array, if first at index does not exist in new array
push first into newArr
look at second array, if it does not exist in newArr,
push second into newArr
return newArr
*/

function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArr.includes(first[i])) {
      newArr.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    if (!newArr.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
