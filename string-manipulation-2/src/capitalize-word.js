/* exported capitalizeWord
-need to have first char capitalized
-for javascript - index 0 and index 4 capitalized
-need to determine if there is the word javascript
-start with having everything lowercase to make finding javascript possible
*/

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') {
    return word.charAt(0).toUpperCase() + word.substring(1, 4).toLowerCase() + word.charAt(4).toUpperCase() + word.substring(5).toLowerCase();
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
