var $spans = document.querySelectorAll('span');
var i = 0;

function typingEvent(event) {
  if (!$spans[i]) {
    return;
  }

  if (event.key === $spans[i].textContent) {
    $spans[i].className = 'correct';
    $spans[i].nextElementSibling.className = 'active';
    i++;
  } else {
    $spans[i].className = 'incorrect active';
  }
}

document.addEventListener('keydown', typingEvent);
