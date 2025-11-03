// book class represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// ui class handles UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td> ${book.title}</td>
    <td> ${book.author}</td>
    <td> ${book.isbn}</td>
    <td> <a href="#" class ="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static clearFields() {
    const title = (document.querySelector("#title").value = "");
    const author = (document.querySelector("#author").value = "");
    const isbn = (document.querySelector("#isbn").value = "");
  }

  static showAlert(message, className) {
    // create div
    const div = document.createElement("div");
    // add class
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  // In the UI class - update the deleteBook method:
  static deleteBook(target) {
    if (target.classList.contains("delete")) {
      // Get the ISBN from the table cell (trim any whitespace)
      const isbn =
        target.parentElement.previousElementSibling.textContent.trim();

      // Remove from UI
      target.parentElement.parentElement.remove();

      // Remove from storage
      Store.removeBook(isbn);
    }
  }
}

// store class handles storage tasks
class Store {
  static getBooks() {
    const books = localStorage.getItem("books");
    return books
      ? JSON.parse(books)
      : [
          {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            isbn: "9780743273565",
          },
          {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            isbn: "9780061120084",
          },
        ];
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // In the Store class - improve the removeBook method:
  static removeBook(isbn) {
    const books = Store.getBooks();
    // Create a new array without the book to remove (better than splicing)
    const updatedBooks = books.filter((book) => book.isbn !== isbn);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }
}

// event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// event: add book
const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values directly without reassigning const variables
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    //   instatiate book
    const book = new Book(title, author, isbn);

    //   add book to ui
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    //  show success message
    UI.showAlert("Book added successfully", "success");

    //   Clear fields after submission
    UI.clearFields();
  }
});

// event: remove book
const deleteBook = document.querySelector("#book-list");

deleteBook.addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  //  show success message
  UI.showAlert("Book removed", "success");
});
