/* exported initial */
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
