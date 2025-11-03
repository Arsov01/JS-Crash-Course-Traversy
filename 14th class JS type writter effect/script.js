const typeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// type method

typeWriter.prototype.type = function () {
  //   current index of word]
  const current = this.wordIndex % this.words.length;
  //   get full text of current word
  const fullTxt = this.words[current];

  setTimeout(() => this.type(), 300);

  if (this.isDeleting) {
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  //   insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }
  //   if word is completed
  if (!this.isDeleting && this.txt === fullTxt) {
    // make pause at end
    typeSpeed.type = this.wait;
    // set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // pause before start typing
    typeSpeed = 400;
  }
};

// init on dom load
document.addEventListener("DOMContentLoaded", init);
// init app

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //   init TypeWriter

  new typeWriter(txtElement, words, wait);
}
