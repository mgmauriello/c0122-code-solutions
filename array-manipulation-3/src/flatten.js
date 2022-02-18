/* exported flatten
-flatten is when you turn a set of subarrays into a single
flattened array - whcih only flattens first level of subarrays
and omits empty arrays
Test whether a value is an Array with Array.isArray
-new array lit
-if array at index is an array then we can loop through the array and push
to newArr
push other arrays from parameter to newArr
*/
function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArr.push(array[i]);
    } else {
      for (var index = 0; index < array[i].length; index++) {
        newArr.push(array[i][index]);
      }
    }
  }
  return newArr;
}
