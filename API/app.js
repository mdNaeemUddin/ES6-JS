// json

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  console.log(data);
}

function user() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => usersDisplay(data));
}


function usersDisplay(users) {
    const ul = document.getElementById('user-list');
    for (let item of users) {
        console.log(item.name);
        const li = document.createElement('li');
        li.innerText = item.name;
        ul.appendChild(li);
    }
}

