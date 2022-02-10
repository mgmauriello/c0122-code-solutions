/* exported chunk
-separate arrays into new arrays (newArr) of x elements
-need to store new arrays into a newArr
-need to define an index number equal to 0 (newIndex)for finding the start of array
-need to find the length of the array and compare to see if less than the newIndex
-while loops iterate as long as the newIndex < array.length
-push array to the newArr
-when pushing array can find and then push newIndex to the end index with size
of what the call for the array will be --remember the addition assignment op
-return newArr
*/
function chunk(array, size) {
  var newArr = [];
  var newIndex = 0;
  while (newIndex < array.length) {
    newArr.push(array.slice(newIndex, newIndex += size));
  }
  return newArr;
}
