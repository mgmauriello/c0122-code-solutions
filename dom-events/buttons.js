function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event[clickButton]);
}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event[hoverButton]);
}

var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mousemove', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event[doubleClick]);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
