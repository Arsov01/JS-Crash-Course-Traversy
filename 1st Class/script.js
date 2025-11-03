// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist appt",
//     isCompleted: false,
//   },
// ];

// for (let i = 0; i < todos.length; i++) {
//   console.log(`For loop number: ${todos[i].text}`);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// let i = 0;
// while (i < 10) {
//   console.log(`While loop number: ${i}`);
//   i++;
// }

// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);
// // 46m

// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// if (x>5) {
//   if(y > 10)
// }

// color = "orange";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
//     break;
// }

// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }

// addNums(2, 4);

// const addNums = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addNums(2, 4));

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

//class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // // Use standard date formats:
// const person1 = new Person("ace", "arsov", "03/03/1999"); // MM/DD/YYYY format
// const person2 = new Person("Ace", "Arsov", "1999-03-03"); // YYYY-MM-DD format (ISO format)

// console.log(person2.getFullName());
// console.log(person1);

// DOM

// document.querySelector("");

// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   console.log(item);
// });
// console.log(items);

// const ul = document.querySelector(".items");

// // ul.remove();

// // ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Ace";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");

// btn.style.background = "red";

// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   console.log(e.target.id);

//   // const myForm = document.querySelector("#my-form");

//   // myForm.style.background = "#ccc";

//   document.querySelector("body").classList.add("bg-dark");

//   const ul = document.querySelector(".items");

//   ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
//   ul.lastElementChild.style.color = "tomato";
// });

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if (nameInput.value === "" || emailInput.value === "") {
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";

//     setTimeout(() => {
//       msg.remove();
//     }, 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} - ${emailInput.value}`)
//     );

//     userList.appendChild(li);

//     nameInput.value = "";
//     emailInput.value = "";
//   }

//   console.log(nameInput.value);
// }
