/* exported swapChars
-swap the char at first index and second index in the string
-relace char at firstIndex with secondIndex
check if first and second index are the same, if so return string - nothing changed
check if second is < first then create new var for secondIndex, have second become first and first to new second
check if there's anything before firstIndex
check if there's anything between firstIndex and secondIndex
 check if there's anything after secondIndex
swap char index within each if statements
then add everything back before, between, and after index to the string make the string again
*/
function swapChars(firstIndex, secondIndex, string) {
  if (firstIndex === secondIndex) {
    return string;
  }

  if (secondIndex < firstIndex) {
    var secondChar = secondIndex;
    secondIndex = firstIndex;
    firstIndex = secondChar;
  }

  if (firstIndex >= string.length) {
    return string;
  }

  return string.substring(0, firstIndex) + string[secondIndex] +
  string.substring(firstIndex + 1, secondIndex) + string[firstIndex] +
  string.substring(secondIndex + 1);
}
