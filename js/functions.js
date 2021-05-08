let paper = 'papier';
let rock = 'kamień';
let scissors = 'nożyczki';
let playerResult = 0;
let computerResult = 0;

function printMessage(message){
	let div = document.createElement('div');
	div.innerHTML = message;
	document.getElementById('messages').appendChild(div);
}

function printScore(computerResult, playerResult){
	let resultsWrapper = document.createElement('div');
	let resultsHeader = document.createElement('h3');
	resultsWrapper.innerHTML = 'CPU ' + computerResult + ' - ' + playerResult + ' TY';
	resultsHeader.innerHTML = 'WYNIK GRY';
	document.getElementById('result').appendChild(resultsHeader);
	document.getElementById('result').appendChild(resultsWrapper);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
} 

function getMoveName(moveId){
	if(moveId === 1){
		return rock;
	} else if(moveId === 2){
		return paper;
	} else if(moveId === 3){
		return scissors;
	} else {
		return 'nieznany ruch'
	}
}

function displayResult(argComputerMove, argPlayerMove){
	if(
		argComputerMove === rock && argPlayerMove === paper ||
		argComputerMove === paper && argPlayerMove === scissors ||
		argComputerMove === scissors && argPlayerMove === rock
		){
		printMessage('Ty wygrywasz!');
		playerResult++;
	} else if(
		argComputerMove === rock && argPlayerMove === scissors ||
		argComputerMove === scissors && argPlayerMove === paper ||
		argComputerMove === paper && argPlayerMove === rock
		){
		printMessage('Ty przegrywasz!');
		computerResult++;
	} else if(argComputerMove === argPlayerMove){
		printMessage('Jest remis!');
	} else{
		printMessage('Nie wybrałeś poprawnie swojego ruchu');
	}
}

function playGame(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
	printScore(computerResult, playerResult);
}

