/* exported zip
-array of arrays
-subarray containing element from first parameter and second
-each from same index of array
-need to get the first string from each array at the index and return to a new array
-total of 3 new arrays
-if the first length is less than second length, then for (loop)
-push from first parameter at the index to the new array for the 1st string
of the new array -- ^^ same with the second parameter
then push the array for the first string to the zipArr
-^^^^^ for a new array for the second string in the array, for the parameter
second
-return zipArr
*/
function zip(first, second) {
  var zipArr = [];
  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      var arr1 = [];
      arr1.push(first[i]);
      arr1.push(second[i]);
      zipArr.push(arr1);
    }
  } else {
    for (i = 0; i < second.length; i++) {
      var arr2 = [];
      arr2.push(first[i]);
      arr2.push(second[i]);
      zipArr.push(arr2);
    }
  }

  return zipArr;
}
