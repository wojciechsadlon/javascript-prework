let paper = 'papier';
let rock = 'kamień';
let scissors = 'nożyczki';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(resultAi,resultMe){
	let div = document.createElement('div');
	let h2 = document.createElement('h3');
	div.innerHTML = 'CPU ' + resultAi + ' - ' + resultMe + ' TY';
	h2.innerHTML = 'WYNIK GRY';
	document.getElementById('result').appendChild(h2);
	document.getElementById('result').appendChild(div);
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

let resultMe = 0;
let resultAi = 0;

function displayResult(argComputerMove,argPlayerMove){
	if(argComputerMove === rock && argPlayerMove === paper || argComputerMove === paper && argPlayerMove === scissors || argComputerMove === scissors && argPlayerMove === rock){
		printMessage('Ty wygrywasz!');
		resultMe++;
	} else if(argComputerMove === rock && argPlayerMove === scissors || argComputerMove === scissors && argPlayerMove === paper || argComputerMove === paper && argPlayerMove === rock){
		printMessage('Ty przegrywasz!');
		resultAi++;
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

    displayResult(computerMove,playerMove);
	printResult(resultAi,resultMe);
}

