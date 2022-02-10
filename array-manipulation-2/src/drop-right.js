/* exported dropRight
-remove x elements from end of array
go through array until the value before the index needing to be removed onwards
-starts removing from the end with -index (-count)
*/
function dropRight(array, count) {
  return array.slice(array, -count);
}
