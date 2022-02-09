/* exported truncate */
/*
-process through string and remove characters after a specific index
-once removed include ...
*/

function truncate(length, string) {
  return string.substring(0, length) + '...';
}
