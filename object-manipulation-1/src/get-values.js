/* exported getValues */
/*
-need to get the values out of the object and into an array
-have a new array to hold values
-for the objec key - can have it be pushed to array
-then return the array
*/
function getValues(object) {
  var arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}
