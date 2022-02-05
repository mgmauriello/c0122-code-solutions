/* exported reverse */
/*
-need to reverse the flow of the array
-decrement array but not lose anything in the array
push the new array to display values
*/
function reverse(array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
