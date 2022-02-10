var task = document.querySelector('.task-list');

task.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var listItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', listItem);
    listItem.remove();
  }
});
