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
    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/images/${this.textContent}.png`;
            computerHand.src = `./assets/images/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
