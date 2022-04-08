function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical: ', medicalSchool('Dr. Spectro'));
console.log('Lawyer: ', lawSchool('Matt Murdock'));
