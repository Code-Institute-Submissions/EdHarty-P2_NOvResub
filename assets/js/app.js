const game = function () {
  let pScore = 0;
  let cScore = 0;

  // Start game - Intro screen fade out and match screen fade in
  const startGame = function () {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // Play match function
  const playMatch = function () {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // Computer options
    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        // Computer choice
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Call compare hands function
          compareHands(this.textContent, computerChoice);
          // Update and randomly select images
          playerHand.src = `./assets/images/${this.textContent}.png`;
          computerHand.src = `./assets/images/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  // Update score function
  const updateScore = function () {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  // Calling compare hands
  const compareHands = function (playerChoice, computerChoice) {

    const winner = document.querySelector(".winner");
    // Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // Outcome if player chooses rock 
    if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    // Outcome if player chooses paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // Outcome if player chooses scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // Outcome if player chooses lizard
    if (playerChoice === "lizard") {
      if (computerChoice === "scissors" || computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // Outcome if player chooses spock
    if (playerChoice === "spock") {
      if (computerChoice === "lizard" || computerChoice === "paper") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }

      else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // Call all inner function
  startGame();
  // Play match function
  playMatch();
};

// Start game function
game();
