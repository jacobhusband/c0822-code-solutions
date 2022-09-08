var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', event => {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $parentLi = event.target.closest('.task-list-item');
    console.log('event.target.closest(\'.task-list-item\'): ', $parentLi);
    $parentLi.remove();
  }
});
