let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

function getMoveName(moveID){
    if(moveID == '1'){
    return 'kamień';
    } else if(moveID == '2'){
        return 'papier';
    } else if(moveID == '3'){
        return 'nożyce';
    } else {
        return 'nieznany ruch'
    }
}

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove,argPlayerMove){
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz!');
    } else if(argComputerMove == argPlayerMove){
        printMessage('Jest remis!');
    } else{
        printMessage('Nie wybrałeś poprawnie swojego ruchu');
    }
}

displayResult(computerMove,playerMove);

