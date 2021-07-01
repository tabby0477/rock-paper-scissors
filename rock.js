const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
     return userInput;
    } else {
      return ('you had three choices!')
    }
  };
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie you both win!";
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return "Computer Wins!";
      } else {
        return "Human Wins!";
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return "Computer Wins!";
      } else {
        return "Human Wins!";  
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return "Computer Wins!"
      } else {
        return "Human Wins!";
      }
    }
    if (userChoice === 'bomb'){
      return "Boom! You Win!"
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The Computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  