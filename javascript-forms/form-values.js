var $contactForm = document.querySelector('form');
$contactForm.addEventListener('submit', logSubmit);

function logSubmit(event) {
  event.preventDefault();
  var getName = $contactForm.elements.name;
  var email = $contactForm.elements.email;
  var msg = $contactForm.elements.message;

  var userName = getName.value;
  var userEmail = email.value;
  var userMsg = msg.value;

  var newObj = { userName, userEmail, userMsg };
  console.log(newObj);
}
