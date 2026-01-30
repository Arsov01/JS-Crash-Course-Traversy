const currentWord = document.querySelector("#current-word");
const wordInput = document.querySelector("#word-input");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
//
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
//

//available levels

const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

const currentLevel = levels.medium;
// global variable
let time = currentLevel;
let score = 0;
let isPlaying;

//
const wordList = [
  "cat",
  "dog",
  "run",
  "sun",
  "hat",
  "bat",
  "pen",
  "cup",
  "key",
  "map",
  "book",
  "tree",
  "fish",
  "ball",
  "rain",
  "snow",
  "wind",
  "fire",
  "star",
  "moon",
  "happy",
  "quick",
  "brown",
  "jumps",
  "lucky",
  "power",
  "light",
  "water",
  "music",
  "beach",
  "python",
  "rabbit",
  "puzzle",
  "garden",
  "summer",
  "winter",
  "spring",
  "castle",
  "forest",
  "basket",
  "champion",
  "elephant",
  "keyboard",
  "mountain",
  "treasure",
  "butterfly",
  "adventure",
  "hurricane",
  "jellyfish",
  "whisper",
];

// initialize game

function init() {
  // show the num,ber of seconds in ui

  seconds.innerHTML = currentLevel;
  //load word from the array

  showWord(wordList);
  // start matchin on word input

  wordInput.addEventListener("input", startMatch);

  // call countdown every seconds
  setInterval(countDown, 1000);
}
// start match

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel;
    showWord(wordList);
    wordInput.value = "";
    score++;
  }
  scoreDisplay.innerHTML = score;
  // if score is -1, display 0

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match currrentWord to wordInput

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    message.className = "text-success d-flex justify-content-center mt-3";
    return true;
  } else {
    message.innerHTML = "";

    return false;
  }
}

// pick & show random word

function showWord(wordList) {
  // generate dandom array index
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomIndex];
  // output random word

  currentWord.innerHTML = randomWord;
}

function countDown() {
  // make sure time is not run out
  if (time > 0) {
    // decrement
    timeDisplay.innerHTML = time;
    time--;
  } else if (time === 0) {
    timeDisplay.innerHTML = time;

    //game over
    isPlaying = false;

    message.className = "text-danger d-flex justify-content-center mt-3";
    message.innerHTML = "GAME OVER";
    score = -1;
  }
}

// Initialize the game when the page loads

init();
