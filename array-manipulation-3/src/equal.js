/* exported equal
-can check to see if first.length === second.length - if not, it cannot be true
-if first array does not equal second array at index, cannot be true
*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
