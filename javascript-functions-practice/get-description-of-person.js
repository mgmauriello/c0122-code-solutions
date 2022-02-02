/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  person = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return person;
}
