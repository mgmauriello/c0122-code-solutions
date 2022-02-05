/* exported getLastChar */
/*
-similar to getFIrstChar with string[0], we need to getLastChar by grabbing
the length of string and subtracting 1 = string.length - 1;
instead of string[0] we want string AT string.length - 1 and assign it to string
*/
function getLastChar(string) {
  string = string[string.length - 1];
  return string;
}
