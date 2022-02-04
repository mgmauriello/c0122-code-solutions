/* exported capitalize */
/*
-we just want the first char uppercase
- we need to get the first letter of word; word[0] or as in MDN doc,
can use charAt().toUpperCase() = but need to lowercase the rest.. toLowerCase()
however, need to return the full / rest of word, can achieve with slice
*/
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
