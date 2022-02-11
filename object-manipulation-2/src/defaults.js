/* exported defaults
-need to change all the same properties in the objs
-the source and target get assigned to a new var with object.assign
return new var
-need overwrite the values for same properties to target
-if the value does not equal the value of the other obj, return a new
object where the object gets assigned to the source and target
*/
function defaults(target, source) {
  var newObj = [];
  for (var key in target) {
    if (source[key] !== target[key]) {
      newObj[key] = Object.assign(source, target);
    }
  }
  var modifyTarget = Object.assign(target, source);
  return modifyTarget;

}
