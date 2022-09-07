var formObj = {};
var $form = document.querySelector('form');

$form.addEventListener('submit', submission);

function submission(event) {
  event.preventDefault();
  formObj.name = $form.elements.name.value;
  formObj.email = $form.elements.email.value;
  formObj.message = $form.elements.message.value;
  console.log('form object: ', formObj);
  $form.reset();
}
