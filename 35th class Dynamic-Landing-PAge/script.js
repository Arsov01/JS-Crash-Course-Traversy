// dom elements
const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

// Options
const ShowAmPm = true;

// show time
function showTime() {
  // let today = new Date(2025, 6, 10, 15, 33, 30);

  let today = new Date();

  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //   set AM OR PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //   12hr format
  hour = hour % 12 || 12;

  //   output the time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${ShowAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}
// add zeros

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set bg and greetings

function setBgGreet() {
  // let today = new Date(2025, 6, 10, 22, 33, 30);

  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('./img/morning.avif')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = "url('./img/afternoon.avif')";
    greeting.textContent = "Good Afternoon";
  } else {
    // evening
    document.body.style.backgroundImage = "url('./img/night.avif')";
    greeting.textContent = "Good Evening";
  }
}

// get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// set name
function setName(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
function setFocus(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// run
showTime();
setBgGreet();
getName();
getFocus();

// 14m
