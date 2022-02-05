/* exported reverseWord */
/*
- we need to reverse a word, string; look at each char and remove and replace to
another index
-can reverse using a decrementing which means for loop
-compare i to the word.length - 1 to grab the last index in string
-replace back into newStr and return newStr
*/
function reverseWord(word) {
  var newStr = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newStr += word[i];
  }
  return newStr;
}
