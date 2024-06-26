const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }
    else{
        console.log("Please enter a valid action: rock, paper, or scissors.");
    }
}

const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice == computerChoice){
        return "It's a tie!";
    }

    else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return "Too bad! The computer wins!";
        }
        else{
            return "Yay! You win!";
        }
    }

    else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return "Too bad! The computer wins!";
        }
        else{
            return "Yay! You win!";
        }
    }

    else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return "Too bad! The computer wins!";
        }
        else{
            return "Yay You win!";
        }
    }

    else if(userChoice === 'bomb'){
        return "You won! Bomb always wins!";
    }
}


const playGame = () => {
    const userChoice = getUserChoice('BOMB');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice} \nComputer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));

}

playGame();


