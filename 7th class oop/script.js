// // 5m
// const book1 = {
//   title: "book one",
//   author: "john doe",
//   year: "2013",

//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1.getSummary());
// const book2 = {
//   title: "book one",
//   author: "john doeasd",
//   year: "2055",

//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book2.getSummary());

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// }

// const book1 = new Book("Book One ", "Ace", "1999");
// const book2 = new Book("Book two", "Aleksandar", "2026");

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // gttet summary

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;

//   return `${this.title} is ${years} years old`;
// };

// // Revise /change year

// Book.prototype.revise = function (mewYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// const book1 = new Book("Book One ", "Ace", "1999");
// const book2 = new Book("Book two", "Aleksandar", "2024");

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// console.log(book2);

// book2.revise("2002");
// console.log(book2);

// // 20m

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // get summary

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);
// Magazine.prototype.constructor = Magazine;

// const mag1 = new Magazine("Mag one", "Jon doe", "2018", "Jan");

// // inherit prototype

// console.log(mag1);

// const BookProtos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },

//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;

//     return `${this.title} is ${years} years old`;
//   },
// };

// // const book1 = Object.create(BookProtos);
// // book1.title = "Book one";
// // book1.author = "Aleksandar";
// // book1.year = "1999";

// const book1 = Object.create(BookProtos, {
//   title: { value: "Book one" },
//   author: { value: "Aleksandar" },
//   year: { value: "1999" },
// });

// console.log(book1);

//

//

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }
//   static topBookStore() {
//     return "Barens & Noble";
//   }
// }

// // initiate object

// const book1 = new Book("Boook one", "Aleksandar", "1999");
// // book1.revise("2025");
// // console.log(book1);

// // console.log(Book.topBookStore());

// console.log(book1.topBookStore());

//

//

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclass

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);

    this.month = month;
  }
}

// instantiate magazine

const mag1 = new Magazine("Mag one", "Aleksandar", "1999", "March");

console.log(mag1);
console.log(mag1.getSummary());
