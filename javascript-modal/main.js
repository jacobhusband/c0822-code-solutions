var $openModal = document.querySelector('button.open-modal');
var $closeModal = document.querySelector('button.close-modal');
var $modalContainer = document.querySelector('div.modal-container');

$openModal.addEventListener('click', openModal);
$closeModal.addEventListener('click', closeModal);

function openModal(event) {
  $modalContainer.className = 'modal-container';
}

function closeModal(event) {
  $modalContainer.className = 'modal-container hidden';
}
