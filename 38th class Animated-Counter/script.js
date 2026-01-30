const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    console.log(count);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCounter, 2);
    } else {
      count.innerText = target;
    }
  };

  updateCounter();
});
