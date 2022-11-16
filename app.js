const start = document.querySelector(".start__panel");
const game = document.querySelector(".game");
const buttonStart = document.querySelector(".button__start");
const startTheGame = () => {
  buttonStart.addEventListener("click", () => {
    start.classList.add("hidden");
    game.classList.remove("hidden");
  });
};
startTheGame();
