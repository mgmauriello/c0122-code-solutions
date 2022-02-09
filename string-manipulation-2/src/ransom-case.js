/* exported ransomCase */
/*
-need to make every other char uppercase
-need to put chars into a new string
-Increment by 2 for every other char
- for the string - start it at 1 as first char isnt cap
-substring returns the part of the string between the start and end indexes
*/

function ransomCase(string) {
  string = string.toLowerCase(0);
  for (var i = 1; i < string.length; i += 2) {
    string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
  }
  return string;
}
