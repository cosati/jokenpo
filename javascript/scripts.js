let playerPoints = 0;
let computerPoints = 0;

function reset() {
  playerPoints = 0;
  computerPoints = 0;
  document.getElementById("bottom").innerHTML = "Player " + playerPoints + " Vs " + computerPoints + " Computer";
}

function computerPlay() {
  let n = Math.floor((Math.random() * 3) + 1);
  //1=Rock;2=Scissors;3=Paper
  console.log("Computer play: " + n);
  return n;
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  switch (playerSelection) {
    case 1:
      switch (computerSelection) {
        case 1:
          console.log("It's Draw");
          document.getElementById("result").innerHTML = "It's Draw!";
          break;
        case 2:
          console.log("Win");
          playerPoints++;
          document.getElementById("result").innerHTML = "You win! Rock beats scissors!";
          break;
        case 3:
          console.log("Lose");
          computerPoints++;
          document.getElementById("result").innerHTML = "You lose! Paper beats rock!";
          break;
      }
      break;
    case 2:
      switch (computerSelection) {
        case 1:
          console.log("Lose");
          computerPoints++;
          document.getElementById("result").innerHTML = "You lose! rock beats scissors!";
          break;
        case 2:
          console.log("Draw");
          document.getElementById("result").innerHTML = "It's Draw!";
          break;
        case 3:
          console.log("Win");
          playerPoints++;
          document.getElementById("result").innerHTML = "You win! Scissors beats paper!";
          break;
      }
      break;
    case 3: //Paper
      switch (computerSelection) {
        case 1: //Rock
          console.log("Win");
          playerPoints++;
          document.getElementById("result").innerHTML = "You win! Paper beats rock!";
          break;
        case 2:
          console.log("Lose");
          computerPoints++;
          document.getElementById("result").innerHTML = "You lose! Scissors beats paper!";
          break;
        case 3:
          console.log("Draw");
          document.getElementById("result").innerHTML = "It's Draw!";
          break;
      }
      break;
  }
  document.getElementById("bottom").innerHTML = "Player " + playerPoints + " Vs " + computerPoints + " Computer";
}
