/* exported lastChars
-need to only return last characters of the string
-find the string length and subtract the length with substring
*/
function lastChars(length, string) {
  return string.substring(string.length - length);
}
