/* exported difference */
function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArr.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (first.indexOf(second[a]) === -1) {
      newArr.push(second[a]);
    }
  }
  return newArr;
}
