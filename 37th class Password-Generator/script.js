const resultEl = document.querySelector("#result");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateEl = document.querySelector("#generate");
const clipboardEl = document.querySelector("#clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; // Added + to convert to number
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper, // Fixed: Changed order to match function parameters
    hasNumber,
    hasSymbol,
    length, // Added length parameter
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  // 1. Filter out unchecked types
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0],
  );

  // 2. If no types selected, return empty
  if (typesArr.length === 0) {
    return "";
  }

  // 3. Generate password
  let generatedPassword = "";

  // Ensure at least one of each selected type
  typesArr.forEach((type) => {
    const funcName = Object.keys(type)[0];
    generatedPassword += randomFunc[funcName]();
  });

  // Fill remaining length with random characters from selected types
  for (let i = typesArr.length; i < length; i++) {
    const randomType = typesArr[Math.floor(Math.random() * typesArr.length)];
    const funcName = Object.keys(randomType)[0];
    generatedPassword += randomFunc[funcName]();
  }

  // Shuffle the password to mix the characters
  return generatedPassword
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
