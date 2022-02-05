/* exported isVowel */
/*
-SO finding a vowel = a,e,i,o,u
-check if char = vowel
-but we have to get an index OF char((searches string n position) !== -1 specific substring occurs)
-char include both Upper and Lower case letters, add both into string or find way to include
toUpperCase() and toLowerCase() to same indexOf()?
*/

function isVowel(char) {
  return ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'U', 'u'].indexOf(char) !== -1;
}
