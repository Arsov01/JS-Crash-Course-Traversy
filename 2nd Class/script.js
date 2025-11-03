// console.dir(document.domain);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);

// console.log(document.forms);

// console.log(document.links);

// console.log(document.images);

// selectors

// const headerTitle = document.querySelector("#header-title");
// const header = document.querySelector("#main-header");
// // headerTitle.innerText = "Zdr";

// headerTitle.innerHTML = "<h3>Hello</h3>";

// headerTitle.style.background = "tomato";
// header.style.borderBottom = "solid 3px black";
// headerTitle.style.borderBottom = "solid 3px black";

// var items = document.querySelectorAll(".list-group-item");

// for (var i = 0; i < items.length; i++) {
//   items[i].style.background = "green";
// }

// var li = document.getElementsByTagName("li");
// li[1].textContent = "hello";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "orange";
// }

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World ace";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "tomato";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// var titles = document.querySelectorAll(".title");

// console.log(titles);

// titles[0].textContent = "Hello World ACE";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "orange";
// }

// var even = document.querySelectorAll("li:nth-child(even)");
// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "green";
// }

// var itemList = document.querySelector("#items");

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentNode);

// itemList.parentElement.style.backgroundColor = "#36a0a0ff";
// console.log(itemList.parentElement.parentElement.parentElement);

// child nodes

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

// // first child

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = "Hello 1";

// console.log(itemList.lastChild);

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";
// itemList.lastElementChild.style.color = "red";
// itemList.lastElementChild.style.backgroundColor = "yellow";

// next sibling

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "blue";
// itemList.previousElementSibling.style.backgroundColor = "orange";

// create element

// var newDiv = document.createElement("li");

// newDiv.className = "list-group-item my-1";

// newDiv.id = "hello1";

// // add attr
// newDiv.setAttribute("title", "hello div");

// var newDivText = document.createTextNode("Hello World ACE");

// // add text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// const newBtn = document.querySelector("#button");

// // newBtn.addEventListener("click", (e) => {
// //   //   const headerTitle = document.querySelector("#header-title");
// //   //   headerTitle.textContent = "changed";
// //   //   const main = document.querySelector("#main");
// //   //   main.style.backgroundColor = "lightblue";
// //   //   console.log(e);
// // });

// newBtn.addEventListener("click", onclick);

// function onclick(e) {
//   //   console.log(e.target);
//   //   console.log(e.target.id);
//   //   console.log(e.target.className);
//   //   console.log(e.target.classList);
//   //   const output = document.querySelector("#output");
//   //   output.innerHTML = `<h3> ${e.target.id} </h3>`;
//   //   console.log(e.type);
//   //   console.log(e.clientX);
//   //   console.log(e.clientY);
//   //   console.log(e.offsetX);
//   //   console.log(e.offsetY);
//   //   console.log(e.altKey);
//   //   console.log(e.ctrlKey);
//   //   console.log(e.shiftKey);
// }

// const newBtn = document.querySelector("#button");
// const box = document.querySelector("#box");

// // box.addEventListener("mouseover", runEvent);
// // box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

// newBtn.addEventListener("click", runEvent);

// function runEvent(e) {
//   console.log(`event type: ${e.type}`);
//   let output = document.querySelector("#output");

//   //   output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3> <h3>MouseY: ${e.offsetY} </h3>`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} ,40)`;
// }

// const itemIpnut = document.querySelector("input[type='text']");
// const form = document.querySelector("form");
// const select = document.querySelector("#select");

// form.addEventListener("submit", runEvent);

// // select.addEventListener("change", runEvent);
// // select.addEventListener("input", runEvent);

// // itemIpnut.addEventListener("focus", runEvent);
// // itemIpnut.addEventListener("blur", runEvent);
// // itemIpnut.addEventListener("change", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("Event Type: " + e.type);
//   console.log(e.target.value);
//   let output = document.querySelector("#output");
//   output.innerHTML = `<h3> ${e.target.value} </h3>`;
// }

const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const newItem = document.querySelector("#item");
const filter = document.querySelector("#filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete item event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  const inputValue = newItem.value.trim();
  if (!inputValue) return;

  // Create list item
  const li = document.createElement("li");
  li.className =
    "list-group-item my-1 d-flex justify-content-between align-items-center";

  // Add text span
  const textSpan = document.createElement("span");
  textSpan.textContent = inputValue;
  li.appendChild(textSpan);

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-sm btn-danger delete";
  deleteBtn.textContent = "X";
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
  newItem.value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
    }
  }
}

function filterItems(e) {
  const searchText = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    // Get the text content from the span (first child element)
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.includes(searchText)) {
      item.style.display = "flex";
      // Explicitly reapply the flex properties
      item.style.justifyContent = "space-between";
      item.style.alignItems = "center";
    } else {
      item.style.display = "none";
    }
  });
}
