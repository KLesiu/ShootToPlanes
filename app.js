const start = document.querySelector(".start__panel");
const game = document.querySelector(".game");
const next = document.querySelector(".next__panel");
const plane = document.querySelector("#PlaneToShoot");
const buttonStart = document.querySelector(".button__start");
const miss = document.querySelector(".miss");
const score = document.querySelector(".your__score");
let showScore = document.querySelector(".showScore");
let text = document.querySelector(".rules");
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
    showScore.innerText = "You won";
  }
};
const button = document.querySelector(".button__next");
button.innerText = "Next level!";
const scorePlayer = () => {
  if (plane.classList.contains("active")) {
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
  text.innerText = "You lost.Try again";
};
// const mediumLevel = () => {
//   const button = document.querySelector(".button__next");
//   button.addEventListener("click", () => {
//     plane.classList.remove("animationEasy");
//     plane.classList.add("animationMedium");
//     setTimeout(levelStart, 1000);
//   });
// };
const switchLevel = () => {
  const button = document.querySelector(".button__next");
  button.addEventListener("click", () => {
    if (plane.classList.contains("animationEasy") & (yourscore == 1)) {
      plane.classList.remove("animationEasy");
      plane.classList.add("animationMedium");
      setTimeout(changeBackgroundMedium(), 100);

      setTimeout(levelStart, 1000);
    } else if (plane.classList.contains("animationMedium")) {
      plane.classList.remove("animationMedium");
      plane.classList.add("animationHard");
      yourscore = 2;
      score.innerHTML = yourscore;
      setTimeout(levelStart, 1000);
    } else if (plane.classList.contains("animationHard")) {
      plane.classList.remove("animationHard");
      plane.classList.add("animationExpert");
      setTimeout(levelStart, 1000);
      yourscore = 3;
      score.innerHTML = yourscore;
    } else {
      next.classList.add("hidden");
      game.classList.add("hidden");
      start.classList.remove("hidden");
      text.innerText =
        "Congratulations, you completed all levels. If you want to play one more, click the button.";
      buttonReset();
      plane.classList.remove("animationExpert");
      plane.classList.remove("animationMedium");
      plane.classList.remove("animationHard");
      plane.classList.add("animationEasy");
      plane.classList.remove("active");
      yourscore = 0;
      score.innerHTML = yourscore;
    }
  });
};
const buttonReset = () => {
  buttonStart.addEventListener("click", () => {
    if (plane.classList.contains("animationExpert")) {
      plane.classList.add("animationEasy");
    }
  });
};
const levelStart = () => {
  game.classList.remove("hidden");
  next.classList.add("hidden");
};
const changeBackgroundMedium = () => {
  const body = document.querySelector("body");
  body.style.backgroundImage = "url(img/tlo.svg)";
};
// const shoot = () => {
//   const audioTank = new Audio("mp3/tanksound.mp3");
//   audioTank.play();
// };

// const hardLevel = () => {
//   const button = document.querySelector(".button__next");
//   button.addEventListener("click", () => {
//     if (plane.classList.contains("animationMedium")) {
//       plane.classList.remove("animationMedium");
//       plane.classList.add("animationHard");
//     }
//   });
// };
startTheGame();
planeStart();
missTarget();
// mediumLevel();
// hardLevel();
switchLevel();
// shoot();
