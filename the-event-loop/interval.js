let counter = 3;

const countDown = setInterval(() => {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log('Blast off!');
    clearInterval(countDown);
  }
}, 1000);
