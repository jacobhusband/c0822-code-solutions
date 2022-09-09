var str = 'grumpy wizards make toxic brew';
var $container = document.querySelector('.container');
var $h1 = createSentence(str[0], str.substring(1));
var startIndex = 0;
var spanGText = '';
var spanUText = str[0];

$container.appendChild($h1);

document.addEventListener('keypress', checkChar);

function checkChar(event) {
  var letter = spanUText.charCodeAt(0);
  var clickedLetter = event.keyCode;
  var underlinedLetter = $h1.querySelector('.underline');

  if (
    underlinedLetter.className === 'underline red' ||
    underlinedLetter.className === 'underline red-background'
  ) {
    underlinedLetter.className = 'underline';
  }

  if (clickedLetter !== letter) {
    if (letter === 32) {
      underlinedLetter.className = 'underline red-background';
    } else {
      underlinedLetter.className = 'underline red';
    }
    return;
  }

  startIndex++;
  var previousLetter = $h1.textContent[startIndex - 1];
  var currentLetter = $h1.textContent[startIndex];
  spanGText += previousLetter;
  spanUText = currentLetter;

  updateSentence(spanUText, str.substring(startIndex + 1), spanGText);
}

function createSentence(underline, h1, green = '') {
  var $h1 = document.createElement('h1');
  var $underlineSpan = document.createElement('span');
  var $greenSpan = document.createElement('span');
  var $sentence = document.createTextNode(h1);

  $underlineSpan.className = 'underline';
  $greenSpan.className = 'green';
  $underlineSpan.textContent = underline;
  $greenSpan.textContent = green;

  $h1.appendChild($greenSpan);
  $h1.appendChild($underlineSpan);
  $h1.appendChild($sentence);

  return $h1;
}

function updateSentence(underline, h1, green) {
  var $recreatedSentence = createSentence(underline, h1, green);
  $container.removeChild($h1);
  $h1 = $recreatedSentence;
  $container.appendChild($h1);
}
