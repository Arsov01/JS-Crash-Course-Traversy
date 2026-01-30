const countDown = document.querySelector(".countdown");

// set the laucnh date(ms)

const launchDate = new Date("November 11, 2026, 22:23:00").getTime();

// update every sec

const intvl = setInterval(() => {
  // get todays date and time(ms)

  const now = new Date().getTime();

  //   distance from now to the launch date

  const distance = launchDate - now;

  //   time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % ((1000 * 60 * 60) / 24)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   display result

  countDown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${minutes}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
`;

  // if launchdate passed
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);

    // style output text

    countDown.style.color = "#17a2b8";
    countDown.innerHTML = "Launched! ";
  }
}, 1000);
