var student = {
  firstName: 'Keanu ',
  lastName: 'Reeves',
  age: 300
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName: ' + fullName);
console.log('value of student: ', student);

student.livesInIrvine = false;
student.previousOccupation = 'The One';
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('value of student.previousOccupation: ' + student.previousOccupation);

var vehicle = {
  make: 'DeLorean',
  model: 'DMC-12 time machine',
  year: 1981
};

vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ' + vehicle['color']);
console.log('value of vehicle["isConvertible"] ' + vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Toto',
  type: 'Great Dane'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
