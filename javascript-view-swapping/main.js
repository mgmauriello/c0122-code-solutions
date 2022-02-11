var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tab.length; i++) {
    $tab[i].className = 'tab';
  }
  event.target.className = 'tab active';

  var dataView = event.target.getAttribute('data-view');
  for (i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === dataView) {
      $view[i].className = 'view';

    } else {
      $view[i].className = 'view hidden';
    }
  }
});
