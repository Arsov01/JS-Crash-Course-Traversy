const filterInput = document.querySelector("#filter");
const ul = document.querySelector("#names");
const li = document.querySelectorAll("li.collection-item");

// event listener for filter input
filterInput.addEventListener("keyup", filterContacts);

function filterContacts(e) {
  const filterValue = e.target.value.toUpperCase();

  // loop through all list items

  // for (let i = 0; i < li.length; i++) {
  //   let a = li[i].getElementsByTagName("a")[0];
  //   const textValue = a.textContent || a.innerText;

  //   if (textValue.toUpperCase().indexOf(filterValue) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }
  ul.forEach((li) => {
    li.style.display = li.textContent.toUpperCase().includes(filterValue)
      ? ""
      : "none";
  });
}
