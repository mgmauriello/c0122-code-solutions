/*
-need to have clicks be applied to the button
-need to have the clicks counted
-need a counter of 0 for the clicks to start, assign variable
-once click counting has commenced increase clicks: ...
-if the clicks are < x then have them return the different .hot-button
*/
var $clickCount = document.querySelector('.click-count');
var $hotButton = document.querySelector('.hot-button');
var clickNum = 0;

$hotButton.addEventListener('click', function (event) {
  $clickCount.textContent = 'Clicks: ' + clickNum++;
  if (clickNum <= 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickNum <= 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickNum <= 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickNum <= 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickNum <= 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clickNum > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
});
