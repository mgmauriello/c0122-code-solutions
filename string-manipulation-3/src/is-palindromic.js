/* exported isPalindromic
check if word is same if reversed
check if length is even or odd
if string at the index is not equal to the string's length minus the index
minus one to get the last char - then it's false
need to account for words with spaces - split and then join?
*/
function isPalindromic(string) {
  string = string.split(' ').join('');

  var newStr = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr === string;
}
