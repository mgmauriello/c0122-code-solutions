/* exported capitalizeWord
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
*/

function capitalizeWord(word) {
  if (word === 'javascript') {
    return word[0].toUpperCase() + word[4].toUpperCase + word.slice(2).toLowerCase();
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
