// post in json

function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(posts) {
    const postContainer = document.getElementById('post');

    for (let post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);

        postDiv.innerHTML = `
            <h>
                User ${post.userId}
            </h>
            <h5>
                Post : ${post.title}
            </h5>
            <p>
                Post Description : ${post.body}
            </p>
        `;

        postContainer.appendChild(postDiv);
    }
}

displayPost();



// create a post : post

function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

// delete a post : delete

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}

// Update a post : patch : only updated 

function patchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

// delete a post : put - update / create a new

function putPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

