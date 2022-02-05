/* exported isUpperCased */
/*
-full word HAS to be uppercase using = toUpperCase(0)
but we have to determine if the word IS uppercase with a boolean t or f
if word is uppercase, return true
if word is not uppercase, don't run = false
*/
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
