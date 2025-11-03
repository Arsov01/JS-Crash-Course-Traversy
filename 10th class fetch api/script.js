// Get DOM elements
const textOutput = document.querySelector("#textOutput");
const getTextBtn = document.querySelector("#getText");
const getJsonBtn = document.querySelector("#getUsers");
const getApiBtn = document.querySelector("#getAPI");
const formSubmit = document.querySelector("#addPost");

// function getText() {
//   fetch("sample.txt")
//     .then(function (res) {
//       return res.text();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// Get Text from sample.txt
function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      textOutput.innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      textOutput.innerHTML = `<h2>Users</h2>`;
      data.forEach((user) => {
        textOutput.innerHTML += `
        <ul class="list-group  my-2">
            <li class="list-group-item ">ID: ${user.id}</li>
          <li class="list-group-item  ">Name: ${user.name}</li>
          <li class="list-group-item  ">Email: ${user.email}</li>
        </ul>
          `;
      });
    });
}
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      textOutput.innerHTML = `<h2>Posts</h2>`;
      data.forEach((post) => {
        textOutput.innerHTML += `
        <div class="card my-2">
      <div class=" card-body text-dark bg-light">
      <h3 class="card-title"> ${post.title}</h3>
        <p class="card-text">${post.body}</p>
        </div>
        </div>
          `;
      });
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// Add event listeners
getTextBtn.addEventListener("click", getText);
getJsonBtn.addEventListener("click", getUsers);
getApiBtn.addEventListener("click", getPosts);
formSubmit.addEventListener("submit", addPost);
