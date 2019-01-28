const getUserChoice = UserInput => {
  UserInput = UserInput.toLowerCase()
  if (UserInput === 'rock') {
    return 'rock';
  } else if (UserInput === 'paper') {
    return 'paper';
  } else if (UserInput === 'scissors') {
    return 'scossors';
  } else {
    return false;
  }
}

console.log(getUserChoice('paper'))

function getComputerChoice() {
  return Math.floor(Math.random() * 2)
}
//console.log(getComputerChoice())
let getComputerAnswer = getComputerChoice()
//console.log(getComputerAnswer);
function setComputerAnswer(getComputerAnswer) {
  if (getComputerAnswer === 0) {
    return 'rock';
  } else if (getComputerAnswer === 1) {
    return 'paper';
  } else if (getComputerAnswer === 2) {
    return 'scissors';
  } else {
    return false;
  }
}
let determineAnswer = setComputerAnswer(getComputerAnswer);

console.log(determineAnswer);


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Game was a tie'
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Win';
    } else {
      return 'You Won !';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You Won !';
    } else {
      return 'Computer Wins';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You Won !';
    } else {
      return 'Computer Wins ! ~~~~ Yahud ke dua';
    }
  }
}

console.log(determineWinner(getUserChoice('paper'), setComputerAnswer(getComputerAnswer)))
//console.log(determineWinner(getComputerChoice(),getUserChoice('paper')))
/*function playGame(){
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('Computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}*/