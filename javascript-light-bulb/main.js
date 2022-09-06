var $room = document.querySelector('.container');
var $bulb = $room.firstElementChild;
var lightOn = false;

$bulb.addEventListener('click', brightenRoom);

function brightenRoom(event) {
  if (!lightOn) {
    $room.className = 'container bright';
    $bulb.className = 'bulb light';
    lightOn = true;
  } else {
    $room.className = 'container dim';
    $bulb.className = 'bulb dark';
    lightOn = false;
  }
}
