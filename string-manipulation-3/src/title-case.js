/* exported titleCase
for loop - if and else if statements
convert string to lower case and split each word
create array for minor words strings
use the variable for words into an array
if word contains hyphen - convert to array, separate hyphen into two words, add together
with 2nd word's first char uppercase
hard code IF word === 'javascript', 'javascript:','api' - change to correct case
minor words generally >= 4 chars in length
if index === 0
if minor word, indexOf the word -to find end -1
if word is includes :
----cap first char, combine w rest of chars, assign to
word[i]
convert string back together and assign to output
*/
function titleCase(title) {
  var word = title.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < word.length; i++) {
    if (word[i].includes('-')) {
      var splitHyphen = word[i].split('-');
      for (var j = 0; j < splitHyphen.length; j++) {
        splitHyphen[j] = splitHyphen[j].charAt(0).toUpperCase() + splitHyphen[j].slice(1);
      }

      var hyphen = splitHyphen.join('-');
      word[i] = hyphen;

    } else if (word[i] === 'api') {
      word[i] = 'API';
    } else if (word[i] === 'javascript:') {
      word[i] = 'JavaScript:';
    } else if (word[i] === 'javascript') {
      word[i] = 'JavaScript';
    } else if (word[i].length >= 4) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (i === 0) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (minor.indexOf(word[i]) === -1) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (word[i - 1].includes(':')) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
  }
  var output = word.join(' ');
  return output;
}
