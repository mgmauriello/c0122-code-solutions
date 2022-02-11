/* exported pick
-need to get a new obj lit to hold chosen objs
- If a key is listed in keys, but is not defined in source,
then that property is not added to the new obj.
-
*/
function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
