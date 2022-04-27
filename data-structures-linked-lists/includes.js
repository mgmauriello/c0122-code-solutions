/* exported includes */

function includes(list, value) {
  while (list) {
    if (list.data === value) return true;
    list = list.next;
  }
  return false;
}

// if list contains only one node, return list
// if list's data === value returntrue
// go through to the next node in the list
// return false (until it is true)
