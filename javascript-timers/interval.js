var $h1 = document.querySelector('h1');
var counter = 3;

var majorTomCountdown = setInterval(function () {
  $h1.textContent = counter;
  counter--;
  if (counter === -1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(majorTomCountdown);
  }
}, 1000);
