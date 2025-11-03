// get modal element

const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");

// functio openmodal

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.classList.toggle("open");
  }
}

// listen for open click
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);
