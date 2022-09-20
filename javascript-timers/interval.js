var id;
var h1 = document.querySelector('h1');
var num = 4;

id = setInterval(beginCountdown, 1000);

function beginCountdown() {
  num--;
  if (num > 0) {
    h1.textContent = num;
  } else {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(id);
  }
}
