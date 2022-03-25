function filter(array, predicate) {
  const filterArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filterArr.push(array[i]);
    }
  }
  return filterArr;
}

const newOverFive = filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], newNum => newNum > 5);
console.log('new filter overFive:', newOverFive);
