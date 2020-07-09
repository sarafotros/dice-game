const btn = document.querySelector(".btn");
const diceImg = document.querySelector("img");
const status = document.querySelector(".status");

let score = document.querySelector(".score");

let sum = 0;

const rollDice = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `assets/images/dice${dice}.png`;

  if (dice === 1) {
    status.textContent = "GAME OVER!";
    sum = 0;
    score.textContent = sum;
  } else {
    sum += dice;
    score.textContent = sum;
    if (sum >= 20) {
      status.textContent = "YOU WON!";
      sum = 0;
    }
  }
};

btn.addEventListener("click", () => {
  status.textContent = "";

  rollDice();
});
