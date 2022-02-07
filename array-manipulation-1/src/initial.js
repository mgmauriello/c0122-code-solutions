/* exported initial */
/*
-want to remove last element in string
-get length of array, subtract 1
-need to get new array to hold the array
-get the newArr and push in the array at i
*/
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
