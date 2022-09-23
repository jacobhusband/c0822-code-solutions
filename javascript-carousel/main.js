var id = null;
var i = 0;

var $carouselContainer = document.querySelector('.carousel-container');
var $carouselDots = $carouselContainer.querySelectorAll('.dot');
var $carouselImages = $carouselContainer.querySelectorAll('img.pokemon-image');

$carouselContainer.addEventListener('click', detectCarouselClicks);

id = setInterval(changeImageByDirection, 3000, 'right');

function changeImageByDirection(direction) {
  hideImage();
  changeIndex(direction);
  showImage();
}

function changeIndex(direction) {
  if (direction === 'right') {
    if (i === 4) {
      i = 0;
    } else {
      i++;
    }
  } else {
    if (i === 0) {
      i = 4;
    } else {
      i--;
    }
  }
}

function hideImage() {
  $carouselDots[i].classList.remove('dark-bg');
  $carouselImages[i].classList.add('hidden');
}

function showImage() {
  $carouselDots[i].classList.add('dark-bg');
  $carouselImages[i].classList.remove('hidden');
}

function detectCarouselClicks(event) {
  if (
    event.target.matches('.chevron-container') ||
    event.target.matches('.chevron-image')
  ) {
    changeImageByChevronClick(event);
  }
  if (event.target.matches('.dot')) {
    changeImageByDotClick(event);
  }
  if (event.target.matches('.select-button')) {
    keepImageStillBySelectButton(event);
  }
}

function changeImageByDotClick(event) {
  hideImage();
  i = event.target.dataset.id - 1;
  showImage();
  resetInterval();
}

function changeImageByChevronClick(event) {
  if (event.target.matches('.chevron-left')) {
    changeImageByDirection('left');
  } else {
    changeImageByDirection('right');
  }
  resetInterval();
}

function keepImageStillBySelectButton(event) {
  if (!event.target.matches('.selected')) {
    event.target.classList.add('selected');
    event.target.textContent = 'SELECTED';
    $carouselContainer.style.border = '3px solid rgb(11 78 11)';
    clearInterval(id);
  } else {
    $carouselContainer.style.border = 'none';
    event.target.classList.remove('selected');
    event.target.textContent = 'SELECT';
    resetInterval();
  }
}

function resetInterval() {
  clearInterval(id);
  id = setInterval(changeImageByDirection, 3000, 'right');
}
