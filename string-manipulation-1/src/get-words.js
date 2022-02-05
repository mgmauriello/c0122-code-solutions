/* exported getWords */
/*
-create storage for list of words with an array
-grab each character in the string and check if there is a space between chars
-IF no space, return with a space by assigning string parameter to an empty arr
-push new string into an array to store the words together and assign
the new string to have an empty string; and then return the arr
*/

function getWords(string) {
  var newStr = '';
  var arr = [];

  if (string === '') {
    return arr;
  }

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newStr += string[i];
    } else {
      arr.push(newStr);
      newStr = '';
    }
  }
  arr.push(newStr);
  return arr;
}
