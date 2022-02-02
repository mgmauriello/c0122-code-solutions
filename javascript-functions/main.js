function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
convertMinutesToSeconds(5);

function greet(name) {
  var greet = 'Hey, ' + name;
  console.log('greet result:', greet);
}
greet('Beavis');

function getArea(width, height) {
  return width * height;
}
getArea(17, 42);

function getFirstName(name) {
  name = name.firstName;
  return name;
}
getFirstName({ firstName: 'Bill', lastName: 'Murray' });

function getLastElement(array) {
  array = array[array.length - 1];
  return array;
}
getLastElement(['PC Master Race', 'Nintendo Switch', 'PlayStation', 'Xbox']);
