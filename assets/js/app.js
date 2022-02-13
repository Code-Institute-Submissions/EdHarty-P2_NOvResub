const game = function () {
    let pScore = 0;
    let cScore = 0;
}
const startGame = function() {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
};
const playMatch = function () {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });