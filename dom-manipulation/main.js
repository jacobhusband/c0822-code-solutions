var count = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function increaseClickCount(event) {
  count++;
  $clickCount.textContent = `Clicks: ${count}`;
  if (count >= 4 && count < 7) {
    event.target.className = 'hot-button cool';
  } else if (count >= 7 && count < 10) {
    event.target.className = 'hot-button tepid';
  } else if (count >= 10 && count < 13) {
    event.target.className = 'hot-button warm';
  } else if (count >= 13 && count < 16) {
    event.target.className = 'hot-button hot';
  } else if (count > 16) {
    event.target.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', increaseClickCount);
