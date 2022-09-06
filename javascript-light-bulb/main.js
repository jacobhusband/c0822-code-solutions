var $room = document.querySelector('.container');
var $bulb = $room.firstElementChild;

$bulb.addEventListener('click', brightenRoom);

function brightenRoom(event) {
  if ($room.className === 'container dim') {
    $room.className = 'container bright';
    $bulb.className = 'bulb light';
  } else {
    $room.className = 'container dim';
    $bulb.className = 'bulb dark';
  }
}
