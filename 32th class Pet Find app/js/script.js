import fetchJsonp from "fetch-jsonp";

const petForm = document.querySelector("#pet-form");

petForm.addEventListener("submit", fetchAnimals);

// fetch animas from api

function fetchAnimals(e) {
  e.preventDefault();

  // get user input

  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  //   fetch pets
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=`);
}
