const sliderImage = document.querySelectorAll(".slide");
const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");

let current = 0; // Added 'let' declaration

// clear all images
function reset() {
  for (let i = 0; i < sliderImage.length; i++) {
    sliderImage[i].style.display = "none";
  }
}

// init slider
function startSlide() {
  reset();
  sliderImage[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImage[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImage[current + 1].style.display = "block";
  current++;
}

// left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImage.length - 1; // Fixed: should be length - 1
  } else {
    slideLeft();
  }
});

// right arrow click
arrowRight.addEventListener("click", () => {
  if (current === sliderImage.length - 1) {
    // Fixed: should be length - 1
    current = 0; // Fixed: should reset to 0, not -1
  } else {
    slideRight();
  }
});

startSlide();
