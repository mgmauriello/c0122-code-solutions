function map(array, transform) {
  const mapArr = [];
  for (let i = 0; i < array.length; i++) {
    const transformed = transform(array[i]);
    mapArr.push(transformed);
  }
  return mapArr;
}

const newMap = map([1, 2, 3, 4, 5, 6, 7], number => number * 20);
console.log('new map', newMap);
