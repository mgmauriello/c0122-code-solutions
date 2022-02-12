var $spans = document.querySelectorAll('span');
var i = 0;

function typingEvent(event) {
  var $currentLetter = document.querySelector('.active');

  if (!$currentLetter.nextElementSibling) {
    if (i === 0) {
      $spans[i].className = 'active';
    }
    return;
  }

  if (event.key === $currentLetter.textContent) {
    $currentLetter.className = 'correct';
    $currentLetter.nextElementSibling.className = 'active';
  } else {
    $currentLetter.className = 'incorrect active';
  }
}

document.addEventListener('keydown', typingEvent);
