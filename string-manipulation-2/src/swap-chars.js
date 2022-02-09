/* exported swapChars
-swap the char at first index and second index in the string
-relace char at firstIndex with secondIndex
access letter at certain position using {}
check if there's anything before firstIndex
check if there's anything between firstIndex and secondIndex
 check if there's anything after secondIndex
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  var beforeFirstChar = '';
  var betweenFirstSecondChar = '';
  var afterSecondChar = '';
  if (firstIndex > 1) {
    beforeFirstChar = string.substring(0, firstIndex);
  } if (secondIndex > string.length - 1) {
    betweenFirstSecondChar = string.substring(firstIndex + 1, secondIndex);
  } if (secondIndex - firstIndex > 0) {
    afterSecondChar = string.substring(secondIndex, string.length);
  }
  return beforeFirstChar + firstChar + betweenFirstSecondChar + secondChar + afterSecondChar;
*/
function swapChars(firstIndex, secondIndex, string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    var indexStr = '';
    newStr += string[i];
    if (string[i] === firstIndex) {
      firstIndex = indexStr;
    }
  }
  return newStr;
}
