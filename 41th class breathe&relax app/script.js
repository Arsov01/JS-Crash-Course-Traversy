const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500; // 7.5 seconds
const breatheTime = (totalTime / 5) * 2; // 3 seconds
const holdTime = totalTime / 5; // 1.5 seconds

function breatheAnimate() {
  text.innerHTML = `Breathe In`;
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

// START IMMEDIATELY - Call it once right away
breatheAnimate();

// Then set up the repeating interval
setInterval(breatheAnimate, totalTime);
