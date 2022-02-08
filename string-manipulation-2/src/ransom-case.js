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
  string = string.toLowerCase(0);
  var newStr = string.toLowerCase().split('');
  for (var i = 0; i < newStr.length; i += 2) {
    newStr = newStr[i].toUpperCase();
  }
  return newStr;
}
