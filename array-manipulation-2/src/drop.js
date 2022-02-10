/* exported drop
-drop the first x elements from array
-return rest of array = need new array for holding elements
-remove everything from before number (count) from array
*/
function drop(array, count) {
  var newArr = array.slice(count);
  return newArr;
}
