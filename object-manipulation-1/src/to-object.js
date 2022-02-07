/* exported toObject */
/*
-need to shift array into an object
-need to assign a property and value in the obj
-need to create new object to make the index0 as a key and place a value
-need to return obj
}
*/
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
