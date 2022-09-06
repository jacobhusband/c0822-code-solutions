function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('target: ', event.target);
}

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('target: ', event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('target: ', event.target);
}

var $clickButton = document.querySelector('.click-button');
var $hoverButton = document.querySelector('.hover-button');
var $doubleClickButton = document.querySelector('.double-click-button');

$clickButton.addEventListener('click', handleClick);
$hoverButton.addEventListener('mouseover', handleMouseOver);
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
