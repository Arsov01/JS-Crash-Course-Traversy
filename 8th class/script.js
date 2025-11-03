// const posts = [
//   { title: "Post one", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output; // Overwrites entire body
//   }, 1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post three", body: "This is post three" }, getPosts);
// createPost({ title: "Post four", body: "This is post four" }, getPosts);
// // 10m

const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output; // Overwrites entire body
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; // Simulate an error condition

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post three", body: "This is post three" })
//   .then(getPosts) // Call getPosts after post creation
//   .catch((err) => console.error(err));

// promise.all([

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });

// async await

// async function init() {
//   await createPost({ title: "Post three", body: "This is post three" });

//   getPosts();
// }

// init();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  console.log(data);
}

fetchUsers();
