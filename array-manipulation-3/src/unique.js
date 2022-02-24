/* exported unique
-var for a new array to containe unique elements
-non-repeated elements, order that they first appear
-search through the array at length
-locate element of the array (indexOf) to the new array
-find the first index by -1
push array at index to the new array
*/
function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }

  }
  return newArr;
}
