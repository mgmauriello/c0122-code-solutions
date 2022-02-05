/* exported isLowerCased */
/*
-similar to isUpperCased full word HAS to be lower using = toLowerCase(0)
but we have to determine if the word IS lowercase with a boolean t or f
if word is lowercase, return true
if word is not lowercase, don't run = false
*/
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
