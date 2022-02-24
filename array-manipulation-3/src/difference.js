/* exported difference
-symmetric difference set of elements which are in either of the sets,
but not in their intersection
- if x is not found in either of the other arrays,
each of the first two x values are added to the result
*/
function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArr.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
