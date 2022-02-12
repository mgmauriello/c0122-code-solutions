var $modal = document.querySelector('.modal');
var $trigger = document.querySelector('.trigger');

function handleTriggerClick(event) {
  if (!event.target.matches('.trigger')) {
    return;
  }
  $modal.className = 'modal show-modal';
}

function handleModalClick(event) {
  if (!event.target.matches('.modal-button')) {
    return;
  }
  $modal.remove('show-modal');
}

$trigger.addEventListener('click', handleTriggerClick);
$modal.addEventListener('click', handleModalClick);
