const start = document.querySelector(".start__panel");
const game = document.querySelector(".game");
const next = document.querySelector(".next__panel");
const plane = document.querySelector("#PlaneToShoot");
const buttonStart = document.querySelector(".button__start");
const miss = document.querySelector(".miss");
let yourscore = 0;
const startTheGame = () => {
  buttonStart.addEventListener("click", () => {
    start.classList.add("hidden");
    game.classList.remove("hidden");
  });
};
const planeStart = () => {
  plane.addEventListener("click", clickTarget);
};
const clickTarget = () => {
  plane.classList.add("active");
  scorePlayer();
};
const nextLevel = () => {
  next.classList.remove("hidden");
  game.classList.add("hidden");
  if ((yourscore = 1)) {
    const wynik = document.querySelector(".wynik");
    wynik.innerText = "Wygrałeś!";
  }
};
const scorePlayer = () => {
  if (plane.classList.contains("active")) {
    const score = document.querySelector(".your__score");
    yourscore = 1;
    score.innerHTML = yourscore;
    setTimeout(nextLevel, 1);
  }
};
const missTarget = () => {
  miss.addEventListener("click", () => {
    setTimeout(backToStart, 1);
  });
};
const backToStart = () => {
  game.classList.add("hidden");
  start.classList.remove("hidden");
};
const mediumLevel = () => {
  const button = document.querySelector(".button__next");
  button.addEventListener("click", () => {
    plane.classList.remove("animationEasy");
    plane.classList.add("animationMedium");
    setTimeout(mediumLevelStart, 1000);
  });
};
const mediumLevelStart = () => {
  game.classList.remove("hidden");
  next.classList.add("hidden");
};
startTheGame();
planeStart();
missTarget();
mediumLevel();
