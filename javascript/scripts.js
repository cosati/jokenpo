let playerPoints = 0;
let computerPoints = 0;

function game() {
  while (1) {

  }
}

function computerPlay() {
  let n = Math.floor((Math.random() * 3) + 1);
  //1=Rock;2=Scissors;3=Paper
  console.log("Computer play: " + n);
  return n;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 1:
      switch (computerPlay) {
        case 1:
          console.log("It's Draw");
          return "It's Draw!";
        case 2:
          console.log("Win");
          playerPoints++;
          return "You win! Rock beats scissors!"
        case 3:
          console.log("Lose");
          computerPoints++;
          return "You lose! Paper beats rock!"
      }
      break;
    case 2:
      switch (computerPlay) {
        case 1:
          console.log("Lose");
          computerPoints++;
          return "You lose! rock beats scissors!"
        case 2:
          console.log("Draw");
          return "It's Draw!";
        case 3:
          console.log("Win");
          playerPoints++;
          return "You win! Scissors beats paper!";
      }
      break;
    case 3: //Paper
      switch (computerPlay) {
        case 1: //Rock
          console.log("Win");
          playerPoints++;
          return "You win! Paper beats rock!";
        case 2:
          console.log("Lose");
          computerPoints++;
          return "You lose! Scissors beats paper!";
        case 3:
          console.log("Draw");
          return "It's Draw!";
      }
      break;
  }
}
