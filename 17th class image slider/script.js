const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#next");
const leftBtn = document.querySelector("#prev");

const auto = true;

const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  //   check for next slide

  if (current.nextElementSibling) {
    // add current to next sibling

    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }

  setTimeout(() => {
    current.classList.remove("current");
  });

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  //   check for next slide

  if (current.previousElementSibling) {
    // add current to next sibling

    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => {
    current.classList.remove("current");
  });

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
};

nextBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);
