const zipForm = document.querySelector("#zipForm");
const inputZip = document.querySelector(".zip");
const output = document.querySelector("#output");
const iconRemove = document.querySelector(".icon-remove");
const iconCheck = document.querySelector(".icon-check");

// listen for delete
document.querySelector("body").addEventListener("click", deleteLocation);

zipForm.addEventListener("submit", getLocationInfo);

function getLocationInfo(e) {
  e.preventDefault();

  const zipCode = inputZip.value.trim();

  // Validate BEFORE making the API call

  if (zipCode.length !== 4 || !/^\d+$/.test(zipCode)) {
    output.innerHTML = `
      <article class="message is-danger">
        <div class="message-body">
          Invalid Zipcode - must be exactly 4 digits, please try again
        </div>
      </article>
    `;
    showIcon("remove");
    setTimeout(() => {
      output.innerHTML = " ";
    }, 3000);
    return;
  }

  // Only make the API call if validation passes
  fetch(`http://api.zippopotam.us/mk/${zipCode}`)
    .then((response) => {
      if (response.status !== 200) {
        showIcon("remove");
        output.innerHTML = `
          <article class="message is-danger">
            <div class="message-body">
              Zipcode not found, please try again
            </div>
          </article>
        `;
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      showIcon("check");
      let locationOutput = "";
      data.places.forEach((place) => {
        locationOutput += `
       <article class="message is-success">
      <div class="message-header">
        <p>Location Information</p>
        <button class="delete"></button>
      </div>
      <div class="message-body">
        <p><strong>City:</strong> ${place["place name"]}</p>
        <p><strong>Post Code:</strong> ${data["post code"]}</p>
        <p><strong>Longitude:</strong> ${place.longitude}</p>
        <p><strong>Latitude:</strong> ${place.latitude}</p>
      </div>
    </article>
        `;
      });

      // Changed from innerHTML to insertAdjacentHTML to ADD instead of REPLACE
      output.insertAdjacentHTML("afterbegin", locationOutput);
      inputZip.value = ""; // Clear the input after successful submission
    })
    .catch((error) => {
      console.log(error);
      showIcon("remove");
    });
}

function showIcon(icon) {
  // Hide both icons first
  if (iconRemove) iconRemove.style.display = "none";
  if (iconCheck) iconCheck.style.display = "none";

  // Show correct icon
  const iconToShow = document.querySelector(`.icon-${icon}`);
  if (iconToShow) {
    iconToShow.style.display = "inline-flex";
  }
}

// delete location
function deleteLocation(e) {
  if (e.target.className === "delete") {
    // Find the closest message article and remove it
    e.target.closest(".message").remove();
  }
}
