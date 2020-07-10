const rollBtn = document.getElementById("rollBtn");
const onePlayerBtn = document.getElementById("onePlayerBtn");
const twoPlayerBtn = document.getElementById("twoPlayerBtn");
const snglOrMulty = document.getElementById("sigOrMulty");
const showTurns = document.getElementById("turns");
const diceImg = document.querySelector("img");
const status = document.querySelector(".status");

let score = document.querySelector(".score");

let sum = 0;
const revealBtn = (btn) => {
  btn.disabled = false;
};

onePlayerBtn.addEventListener("click", () => {
  revealBtn(rollBtn);
  snglOrMulty.textContent = "Single Player";
});

const rollDice = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `assets/images/dice${dice}.png`;

  if (dice === 1) {
    // btn.disabled = true;
    status.textContent = "GAME OVER!";
    sum = 0;
    score.textContent = sum;
  } else {
    sum += dice;
    score.textContent = sum;
    if (sum >= 20) {
      //   btn.disabled = true;
      status.textContent = "YOU WON!";

      sum = 0;
    }
  }
};

rollBtn.addEventListener("click", () => {
  status.textContent = "";

  rollDice();
});

twoPlayerBtn.addEventListener("click", () => {
  snglOrMulty.textContent = "Two Players";
  snglOrMulty.textContent = "Player 1 starts";
  revealBtn(rollBtn);
});
