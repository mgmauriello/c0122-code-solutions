/* exported compact */
/*
-need to filter out empty, 0, or null strings out of the array
aka all falsy elements
-if array is false, remove and push the rest of array
-
*/

function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      arr.push(array[i]);
    }
  }
  return arr;
}
