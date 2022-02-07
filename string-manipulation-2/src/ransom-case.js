/* exported ransomCase */
/*
-need to make every other char uppercase
-need to put chars into a new string
-function firstLetterUppercase (input) {
  for (i=0; i < input.length; i+=2) {
     input = input.substr(0, i) + input[i].toUpperCase() + input.substr(i + 1);
  }
  return input;
}
*/
function ransomCase(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    newStr = string.substring(0, i) + string.toUppercase() + string.substring(i + 1);
  }
  return newStr;
}
