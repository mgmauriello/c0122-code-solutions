var nums = [4, 10, 39];

var maximumValue = Math.max(...nums);
console.log('maximumValue:', maximumValue);

var heroes = ['Gandalf', 'Frodo', 'Gimli', 'Smaug'];
var randomNumber = Math.random();
randomNumber = (randomNumber * heroes.length);

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Lord of the Rings',
    author: 'JRR Tolkien'
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick'
  },
  {
    title: 'Slaughterhouse Five',
    author: 'Kurt Vonnegut'
  }
];
var lastBook = library.pop(library.length - 1);
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library contents:', library);

var fullName = 'John Cena';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
