// initial ratings

const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  tcl: 3.6,
  philips: 4.1,
};

// total stars

const starsTotal = 5;

// form elements
const productSelect = document.querySelector("#product-select");
const ratingControl = document.querySelector("#rating-control");

let product;

// product select change

productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  // enable rating controll

  ratingControl.disabled = false;

  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;

  if (rating > 5) {
    alert("Please rate 1 - 5");
    return;
  }

  // change rating
  ratings[product] = rating;

  getRating();
});

// run getratings when dom loads

document.addEventListener("DOMContentLoaded", getRating);

// get ratings

function getRating() {
  for (let rating in ratings) {
    // get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // /round to nearest 10

    const starPercentageRounded = `${Math.round((starPercentage / 10) * 10)}%`;

    console.log(starPercentageRounded);

    // set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;

    // add number rating

    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
