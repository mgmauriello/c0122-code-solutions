function ExampleConstructor() {
}
console.log('ExampleConstructor:', ExampleConstructor.prototype);

console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor:', newExampleConstructor);
console.log('newExampleConstructor instanceof ExampleConstructor:', newExampleConstructor instanceof ExampleConstructor);
