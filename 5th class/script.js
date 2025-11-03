const inputPounds = document.querySelector("#poundsInput");
const gramsOutput = document.querySelector("#gramsOutput");
const kgOutput = document.querySelector("#kgOutput");
const ozOutput = document.querySelector("#ozOutput");
const output = document.querySelector("#output");

output.style.visibility = "hidden";
inputPounds.addEventListener("input", function (e) {
  let pounds = e.target.value;
  console.log(pounds);
  gramsOutput.textContent = (pounds / 0.0022046).toFixed(0);
  kgOutput.textContent = (pounds / 2.2046).toFixed(0);
  ozOutput.textContent = (pounds * 16).toFixed(0);
  output.style.visibility = "visible";
});
