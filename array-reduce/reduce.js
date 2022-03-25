function reduce(array, reducer, initialValue) {
  let i = 0;
  let output = initialValue;
  if (arguments.length === 2) {
    i = 1;
    output = array[0];
  }
  for (let i = 0; i < array.length; i++) {
    output = reducer(output, array[i]);
  }
  return output;
}

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const newSum = reduce(numberArr, (sum, number) => sum + number);
console.log('new reduce sum', newSum);
