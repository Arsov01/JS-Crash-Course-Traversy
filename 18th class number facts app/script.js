const fact = document.querySelector("#fact");
const factText = document.querySelector("#factText");
const numberInput = document.querySelector("#numberInput");

// function getFactAjax() {
//   let number = numberInput.value;

//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", `http://numbersapi.com/${number}`);
//   xhr.onload = function () {
//     if (this.status === 200 && number != "") {
//       fact.style.display = "block";

//       factText.innerText = `${this.responseText}`;
//     }
//   };
//   xhr.send();
// }

// numberInput.addEventListener("input", getFactAjax);

function getFactFetch() {
  let number = numberInput.value;

  if (number === "") {
    fact.style.display = "none";
    factText.innerText = "";
    return;
  }

  fetch(`http://numbersapi.com/${number}`)
    .then((response) => response.text())
    .then((data) => {
      fact.style.display = "block";
      factText.innerText = data;
    })
    .catch((error) => console.log(error));
}

numberInput.addEventListener("input", getFactFetch);
