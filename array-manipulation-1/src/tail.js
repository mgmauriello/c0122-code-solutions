/* exported tail */
/*
-want to remove first element in string but cannot use certain methods
-if there is an index 0 = return an empty []
-else return array[i]?
 */

function tail(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
