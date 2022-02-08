function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', name);
}
function handleInput(event) {
  console.log(event.target.name);
  console.log('value of name:', event.target.value);
}
var focusEvent = document.querySelector('input');
var blurEvent = document.querySelector('input');
var $input = document.querySelector('input');

focusEvent.addEventListener('focus', handleFocus);
blurEvent.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);
