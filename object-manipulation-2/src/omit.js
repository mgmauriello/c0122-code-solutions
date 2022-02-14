/* exported omit
-need to get a new obj lit to hold chosen objs
-If key is listed in keys, should not be included newObj.
-newObj of all of the properties of source not listed in keys
-opposite of pick where we do NOT want to get properties
-loop through keys and search through the source
for each of those keys
-for with an if statement
*/

function omit(source, keys) {
  var newObj = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
