import reddit from "./reddit.js";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

// form event listener
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get search term
  const searchTerm = searchInput.value;

  // get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;

  // get limit
  const searchLimit = document.querySelector("#limit").value;

  // check input
  if (searchTerm === "") {
    showMessage("Please add a search term", "alert-danger");
    return; // Add return to stop execution
  }

  // Show loading message
  showMessage("Searching Reddit...", "alert-info");

  // clear input
  searchInput.value = "";

  // search reddit
  reddit
    .search(searchTerm, searchLimit, sortBy)
    .then((results) => {
      console.log(results);

      // Remove loading message
      document.querySelector(".alert")?.remove();

      let output = `<div class="card-columns">`;

      results.forEach((post) => {
        // check for img - FIXED: Use the image variable we defined
        const image = post.preview
          ? post.preview.images[0].source.url.replace(/&amp;/g, "&") // Fix URL encoding
          : "https://logos-world.net/wp-content/uploads/2023/12/Reddit-Logo-500x281.png";

        output += `
      <div class="card mb-3">
        <img src="${image}" class="card-img-top" alt="${
          post.title
        }" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${truncateText(post.selftext, 100)}</p>
          <div class="mb-2">
            <small class="text-muted">
              <strong>r/${post.subreddit}</strong> | 👍 ${post.score} | 💬 ${
          post.num_comments
        }
            </small>
          </div>
          <a href="${
            post.url
          }" target="_blank" class="btn btn-primary btn-sm">Read more</a>
          <a href="https://reddit.com${
            post.permalink
          }" target="_blank" class="btn btn-outline-secondary btn-sm">View on Reddit</a>
        </div>
      </div>`;
      });

      output += "</div>";
      document.querySelector("#results").innerHTML = output;
    })
    .catch((error) => {
      // Handle any errors
      document.querySelector(".alert")?.remove();
      showMessage(`Error: ${error.message}`, "alert-danger");
      console.error("Search error:", error);
    });
});

// show message
function showMessage(message, className) {
  // create div
  const div = document.createElement("div");

  // add classes
  div.className = `alert ${className}`;

  // add text
  div.appendChild(document.createTextNode(message));

  // get parent
  const searchContainer = document.querySelector("#search-container");

  // get search
  const search = document.querySelector("#search");

  // insert msg
  searchContainer.insertBefore(div, search);

  // timeout
  setTimeout(() => {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }, 3000);
}

// truncate text - FIXED VERSION
function truncateText(text, limit) {
  const shortened = text.indexOf(" ", limit);
  if (shortened === -1) return text.substring(0, limit) + "...";
  return text.substring(0, shortened) + "...";
}
