var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var r = 0; r < xhr.response.length; r++) {
    var list = document.createElement('li');
    list.textContent = xhr.response[r].name;
    $userList.appendChild(list);
  }
});
xhr.send();
