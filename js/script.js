function playGame(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

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
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
