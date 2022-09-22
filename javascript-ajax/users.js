var userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
var li;

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('status: ', xhr.status);
  console.log('response: ', xhr.response);
  xhr.response.forEach(obj => {
    li = document.createElement('li');
    li.textContent = obj.name;
    userList.appendChild(li);
  });
});
xhr.send();
