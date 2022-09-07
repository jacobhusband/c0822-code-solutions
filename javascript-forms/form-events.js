function handleFocus(event) {
  console.log('focus event was fired: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

var $form = document.querySelector('form');
var $name = $form.querySelector('input#user-name');
var $email = $form.querySelector('input#user-email');
var $textarea = $form.querySelector('textarea');
var inputs = [$name, $email, $textarea];

// console.log(`form: `, $form);
// console.log(`inputs: `, $email, $name);
// console.log(`textarea`, $textarea);

inputs.forEach(el => {
  el.addEventListener('focus', handleFocus);
  el.addEventListener('blur', handleBlur);
  el.addEventListener('input', handleInput);
});
