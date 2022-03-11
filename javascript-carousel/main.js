var $images = document.querySelectorAll('.img');
var $circle = document.querySelector('#selection-circle');
var $switches = document.querySelectorAll('.switch');
var $prevImage = document.querySelector('#prev-img');
var $nextImage = document.querySelector('#next-img');

$prevImage.addEventListener('click', handlePrevImage);
$nextImage.addEventListener('click', handleNextImage);
$circle.addEventListener('click', dataView);

var counter = 1;
var pokemon = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'jigglypuff'];

function handlePrevImage(event) {
  if (counter === 1) {
    counter = 6;
  }
  counter -= 1;
  viewSwap(pokemon[counter - 1], 3000);
  stopCarousel();
}

function handleNextImage(event) {
  if (counter === 0) {
    counter = 5;
  }
  viewSwap(pokemon[counter], 3000);
  counter += 1;
  stopCarousel();
}

function viewSwap(string) {
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].getAttribute('data-view') !== string) {
      $images[i].className = 'img hidden';
      $switches[i].className = 'switch far fa-circle';
    } else {
      $images[i].className = 'img';
      $switches[i].className = 'switch fas fa-circle';
    }
  }
}

function dataView(event) {
  var $dataView = event.target.getAttribute('data-view');
  if (event.target.nodeName === 'I' && $dataView !== '') {
    viewSwap($dataView);
  }
  for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i] === $dataView) {
      counter = i + 1;
    }
  }
  stopCarousel();
}

function carousel(event) {
  if (counter === 5) {
    viewSwap(pokemon[counter]);
    counter = 0;
  }
  viewSwap(pokemon[counter]);
  counter++;
}

var intervalID = setInterval(carousel, 3000);

function stopCarousel() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}
