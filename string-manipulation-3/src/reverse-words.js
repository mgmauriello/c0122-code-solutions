/* exported reverseWords
reverse all words
split each word off from string
after split reverse and then join - reverses everything
need to get words in original order
repeat step 2 and 3
*/
function reverseWords(word) {
  return word.split('').reverse().join('').split(' ').reverse().join(' ');

}
