/* exported intersection */
/*
declare new array
finding unique values found in both first and second parameter
if first current index shares the same value from second
add current item of first to outputarr
return newArr
*/
function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
