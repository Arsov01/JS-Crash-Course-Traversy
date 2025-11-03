// brake chain animation
function brakeChain() {
  const chain = document.querySelector("#chain");

  chain.innerHTML = "&#xf0c1;";
  setTimeout(() => {
    chain.innerHTML = "&#xf127";
  }, 1000);
}

// call animation
brakeChain();

// animate every 2 secs
setInterval(brakeChain, 2000);

// battery charge animation
function chargeBattery() {
  const battery = document.querySelector("#battery");

  battery.innerHTML = "&#xf244";

  setTimeout(() => {
    battery.innerHTML = "&#xf243";
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = "&#xf242";
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = "&#xf241";
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = "&#xf240";
  }, 4000);
}

setInterval(chargeBattery, 5000);

chargeBattery();

// hourglass animation

function hourglassTip() {
  const hourGlass = document.querySelector("#hourglass");

  hourGlass.innerHTML = "&#xf254";

  setTimeout(() => {
    hourGlass.innerHTML = "&#xf251";
  }, 1000);

  setTimeout(() => {
    hourGlass.innerHTML = "&#xf252";
  }, 2000);
  setTimeout(() => {
    hourGlass.innerHTML = "&#xf253";
  }, 3000);
}

setInterval(hourglassTip, 4000);

hourglassTip();
