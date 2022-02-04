/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getEvenNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getEvenNumbersToTen:', getEvenNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord:', repeatWord('poggers', 20));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter:', logEachCharacter('isengard'));

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll:', doubleAll([3, 4, 9, 5, 6]));

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys:', getKeys({ title: 'wazup', author: 'me' }));

function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues:', getValues({ title: 'wazup', author: 'me' }));
