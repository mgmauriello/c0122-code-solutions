/* exported take */
/*
-want to grab the first x strings in the array
-take(['x', 'y'] num)
-need new array to hold return array
-array slice locations of the lowest char (0) and then whatever the result wants
via index (count)
}
*/
function take(array, count) {
  var newArr = array.slice(0, count);
  return newArr;
}
