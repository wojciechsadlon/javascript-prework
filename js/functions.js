function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
} 

function getMoveName(moveId){
	if(moveId == '1'){
	return 'kamień';
	} else if(moveId == '2'){
		return 'papier';
	} else if(moveId == '3'){
		return 'nożyce';
	} else {
		return 'nieznany ruch'
	}
}

function playGame(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);

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

