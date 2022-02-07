/* exported setValue */
/*
-set value for object
-if we have a value we want to assign it to an obj name
-push the updated object it into an array
- */
function setValue(object, key, value) {
  var arr = [];
  object[key] = value;
  arr.push(object);
}
