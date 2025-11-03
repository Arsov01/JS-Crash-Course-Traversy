const currentImg = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// set 1st img opacity
imgs[0].style.opacity = opacity;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1));
  // change img to src clicked img
  currentImg.src = e.target.src;

  currentImg.classList.add("fade-in");

  //   remove fade-in class
  setTimeout(() => {
    currentImg.classList.remove("fade-in");
  }, 500);

  //   change the opacity to var
  e.target.style.opacity = opacity;
}
