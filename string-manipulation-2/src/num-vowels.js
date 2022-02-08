/* exported numVowels
- need to count the amount of vowels in a string
-determine what are vowels in a string
-need to have a number for the count of vowels
-if there is a vowel within a string, must return at the instance it's found (can use indexOf for that)
-vowels cannot be lower than 0 - (how to determine if return IS 0 though, can try negative 1 to account for 0)
*/
function numVowels(string) {
  var vowels = 'aAeEiIoOuU';
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
