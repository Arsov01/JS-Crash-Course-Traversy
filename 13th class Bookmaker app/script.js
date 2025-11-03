// listen for form submit

const bookmarkForm = document.querySelector("#myForm");

function saveBookmark(e) {
  e.preventDefault();
  const siteName = document.querySelector("#siteName").value;
  const siteUrl = document.querySelector("#siteUrl").value;

  if (!siteName || !siteUrl) {
    alert("Please fill in the form");
    return false;
  }

  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please use a valid URL");
    return false;
  }

  let bookmark = {
    name: siteName,
    url: siteUrl,
  };

  //   //   local storage test
  //   localStorage.setItem("test", "hello world");

  //   console.log(localStorage.getItem("test"));
  //   localStorage.removeItem("test");
  //   console.log(localStorage.getItem("test"));

  //   test if bookmarks is null
  if (localStorage.getItem("bookmarks") === null) {
    // initialize array
    const bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // set to local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    // get bookmarks from local storage
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  fetchBookmarks();
}

function deleteBookmark(url) {
  // get bookmarks from local storage
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  //   loop through bookmarks
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url === url) {
      // remove from array
      bookmarks.splice(i, 1);
    }
  }

  //   re-set back to local storage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  //   re-fetch bookmarks
  fetchBookmarks();
}

function fetchBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  //   get output id
  const bookmarksResults = document.querySelector("#bookmarksResults");
  //   build output
  bookmarksResults.innerHTML = "";

  for (let i = 0; i < bookmarks.length; i++) {
    const name = bookmarks[i].name;
    const url = bookmarks[i].url;

    bookmarksResults.innerHTML += `
                    <div class="card bookmark-card bg-dark text-white mb-2">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text mb-0">${url}</p>
                            </div>
                            <div>
                                <a class="btn btn-primary me-2" target="_blank" href="${url}">Visit</a>
                                <button onclick="deleteBookmark('${url}')" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
  }
}
// validate form

bookmarkForm.addEventListener("submit", saveBookmark);
