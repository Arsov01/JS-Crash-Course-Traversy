let i = 0;
const images = [];
const time = 3000;

// image list

images[0] =
  "https://images.unsplash.com/photo-1760159201322-8a0574c1296c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
images[1] =
  "https://images.unsplash.com/photo-1760312379880-1a5623c5f835?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500";

images[2] =
  "https://images.unsplash.com/photo-1760054288584-c5e598a97b82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500";
images[3] =
  "https://images.unsplash.com/photo-1759665936472-a53c807e9c80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500";

function changeImg() {
  //   document.slides.src = images[i];
  document.querySelector("#slides").src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, time);
}
window.onload = changeImg;
