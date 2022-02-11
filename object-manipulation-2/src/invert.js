/* exported invert
-invert property and value in object lit
-new obj lit needed to hold new results
-for property in the obj, need to find the property of the obj
and apply that to the new obj while having it = to the property
- then return the new obj
*/
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
