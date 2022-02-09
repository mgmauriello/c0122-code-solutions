/* exported swapChars
-swap the char at first index and second index in the string
-relace char at firstIndex with secondIndex
access letter at certain position using {}
if secondindex in bob is 2
do the same thing and get the last b in bob if 2
 var str = string;
  var newStr = str;
  var firstChar = str[firstIndex];
  var secondChar = str[secondIndex];

  newStr.replace('dog', 'monkey')
  return newStr;

*/
function swapChars(firstIndex, secondIndex, string) {
  // 11, 23, 'HTML, CSS, JavaScript, React'
  // J, R
  // "HTML, CSS, " check if there's anything before firstIndex
  // "avaScript, " check if there's anything between firstIndex and secondIndex
  // "eact" check if there's anything after secondIndex
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  var beforeFirstChar = '';
  var betweenFirstSecondChar = '';
  var afterSecondChar = '';
  // ctrl, cmd, option
  // ctrl + arrow key = moving 1 word in a direction
  // shift + arrow key = highlight
  // cmd + arrow key = move to end of line

  if (firstIndex > 1) {
    // string.substring(firstChar)
    // swap the chars
    // 0, 1, 'lodash'
    // str.substring(1, 3) oda
    beforeFirstChar = string.substring(0, firstIndex);

  } if (secondIndex > string.length - 1) {
    // swap the chars
    betweenFirstSecondChar = string.substring(firstIndex + 1, secondIndex);
  } if (secondIndex - firstIndex > 0) {
    // swap the chars
    afterSecondChar = string.substring(secondIndex, string.length);
  }

  return beforeFirstChar + firstChar + betweenFirstSecondChar + secondChar + afterSecondChar;

}
