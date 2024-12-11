const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const hint = document.getElementById("hint");
const attemptsDisplay = document.getElementById("attempts");

let randomNumber = Number(localStorage.getItem("randomNumber"));
if (!randomNumber) {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  localStorage.setItem("randomNumber", randomNumber);
}

let attempts = Number(localStorage.getItem("attempts"));
if (isNaN(attempts)) {
  attempts = 0;
  localStorage.setItem("attempts", attempts);
}

attemptsDisplay.textContent = attempts;

checkBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    hint.textContent = "Vvedite cislo";
    return;
  }

  attempts++;
  localStorage.setItem("attempts", attempts);
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    hint.textContent = "Uraa";
    localStorage.removeItem("randomNumber");
    localStorage.removeItem("attempts");
  } else if (userGuess < randomNumber) {
    hint.textContent = "Bolshe";
  } else {
    hint.textContent = "Menshe";
  }
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("randomNumber");
  localStorage.removeItem("attempts");
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  hint.textContent = "";
  guessInput.value = "";
});
