/* exported capitalizeWords */
/*
-fix characters to display all in string to be lowercase except first character
-except JavaScript has two capitalizations - need to split word into two, and then rejoin
*/
function capitalizeWords(word) {
  word = word.toLowerCase();

  var words = word.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}
