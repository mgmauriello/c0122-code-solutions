/* exported isAnagram
need to account for words with spaces
boolean whether string is anagram or not
find length of strings, if not equal cannot be anagram
split string to each char, sort then rejoin if === the other string
*/
function isAnagram(firstString, secondString) {
  firstString = firstString.split(' ').join('');
  secondString = secondString.split(' ').join('');

  if (firstString === secondString) {
    return true;
  }

  if (firstString.length !== secondString.length) {
    return false;
  }
  return firstString.split('').sort().join('') === secondString.split('').sort().join('');

}
