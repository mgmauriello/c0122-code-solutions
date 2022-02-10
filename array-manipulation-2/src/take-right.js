/* exported takeRight
-remove x elements from beginning of array
-if count > array's length return the array

 */
function takeRight(array, count) {
  var newArr = [];
  if (count > array.length) {
    return array;
  }
  newArr = array.slice(-count);
  return newArr;
}
