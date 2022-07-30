let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let roundWinner = document.querySelector(".roundWinner");
let computerImg = document.querySelector(".computerChoice");
let playerImg = document.querySelector(".playerChoice");

console.log(Number.parseInt(playerScore.innerText) + 1);

document.querySelector("#rock").addEventListener("click", () => {
  findWinner("rock");
})
document.querySelector("#paper").addEventListener("click", () => {
  findWinner("paper");
})
document.querySelector("#scissors").addEventListener("click", () => {
  findWinner("scissors");
})

document.querySelector(".restart").addEventListener("click", () => {
  playerScore.innerText = 0;
  computerScore.innerText = 0;
  playerImg.firstChild.remove();
  computerImg.firstChild.remove();
  computerImg.innerHTML = "<img src='imgs/rock.png' alt='rock'>";
  playerImg.innerHTML = "<img src='imgs/rock.png' alt='rock'>";
})

function findWinner(playerChoice)
{
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice == playerChoice)
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "It's a Tie";
  }
  else if (computerChoice == "rock" && playerChoice == "paper")
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "Paper beats rock";
    playerScore.innerText = Number.parseInt(playerScore.innerText) + 1;
  }
  else if (computerChoice == "rock" && playerChoice == "scissors")
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "Rock beats Scissors";
    computerScore.innerText = Number.parseInt(computerScore.innerText) + 1;
  }
  else if (computerChoice == "paper" && playerChoice == "rock")
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "Paper beats rock";
    computerScore.innerText = Number.parseInt(computerScore.innerText) + 1;
  }
  else if (computerChoice == "paper" && playerChoice == "scissors")
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "Scissors beats paper";
    playerScore.innerText = Number.parseInt(playerScore.innerText) + 1;
  }
  else if (computerChoice == "scissors" && playerChoice == "rock")
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "Rock beats scissors";
    playerScore.innerText = Number.parseInt(playerScore.innerText) + 1;
  }
  else
  {
    loadImgs(playerChoice, computerChoice);
    roundWinner.innerText = "Scissors beats paper";
    computerScore.innerText = Number.parseInt(computerScore.innerText) + 1;
  }

}

function loadImgs(playerChoice, computerChoice)
{
  playerImg.firstChild.remove();
  computerImg.firstChild.remove();
  playerImg.innerHTML = `<img src='imgs/${playerChoice}.png' alt='${playerChoice}'>`;
  computerImg.innerHTML = `<img src='imgs/${computerChoice}.png' alt='${computerChoice}'>`;
}