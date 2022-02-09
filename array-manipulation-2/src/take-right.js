/* exported takeRight
-remove x elements from end of array
-if count > array's length return the array
-
function takeRight(array, count) {
  var newArr = array.slice(count - 1);
  return newArr;
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr
 */
function takeRight(array, count) {
  var newArr = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - 1; i++) {
    newArr = array.slice(count);
  }
  return newArr;
}
