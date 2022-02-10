var $button = document.querySelector('button');
var $body = document.querySelector('body');
var isBulbOn = false;

$button.addEventListener('click', function (event) {

  if (isBulbOn === true) {
    $button.className = 'circle box-shadow lights-on';
    $body.className = 'background-color lights-on';

  } else if (isBulbOn === false) {
    $body.className = 'background-color lights-off';
    $button.className = 'circle box-shadow background-color lights-off';
  }
  isBulbOn = !isBulbOn;
});
