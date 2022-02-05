/* exported getKeys */
/*
-need to return the property keys for each object
-for a key in the object we can push the key into a new empty array
-and then return the new array
*/
function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
