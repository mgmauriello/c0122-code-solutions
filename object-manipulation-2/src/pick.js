/* exported pick
-need to get a new obj lit to hold chosen objs
- If a key is listed in keys, but is not defined in source,
then that property is not added to the new obj.
-loop through keys and search through the source
for each of those keys
-check if source key is undefined return
-self-note look up different for loops
-for with an if statement
*/

function pick(source, keys) {
  var result = {};
  for (var key of keys) {
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
