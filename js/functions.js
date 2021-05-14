{
const paper = 'papier';
const rock = 'kamień';
const scissors = 'nożyczki';
let playerResult = 0;
let computerResult = 0;
let howManyWins = Number(prompt('Do ilu wygranych gramy?'));
let winCount = 0;
let isGameFinished = false;

const printMessage = function(message){
	const div = document.createElement('div');
	div.innerHTML = message;
	document.getElementById('messages').appendChild(div);
}

const printScore = function(computerResult, playerResult){
	const resultsWrapper = document.createElement('div');
	const resultsHeader = document.createElement('h3');
	resultsWrapper.innerHTML = 'CPU ' + computerResult + ' - ' + playerResult + ' TY';
	resultsHeader.innerHTML = 'WYNIK GRY (do ' + howManyWins + ' wygranych)';
	document.getElementById('result').appendChild(resultsHeader);
	document.getElementById('result').appendChild(resultsWrapper);
}

const endRound = function(){
	const roundHeader = document.createElement('h3');
	let endRoundText = '';

	if(playerResult === howManyWins){
		endRoundText = 'Brawo! Wygrałeś!!!'
	} else if(computerResult === howManyWins){
		endRoundText = 'Przegrałeś, spróbuj ponownie!'
	}

	roundHeader.innerHTML = 'Gra zakończona ' + howManyWins + ' zwycięstwami! ' + endRoundText;
	document.getElementById('result').appendChild(roundHeader);

	isGameFinished = true;
	howManyWins = null;
}

const resetGame = function(){
	clearMessages()
	playerResult = 0;
	computerResult = 0;
	winCount = 0;
	howManyWins = Number(prompt('Do ilu wygranych gramy?'));
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
} 

const getMoveName = function(moveId){
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

const saveScore = function(winner){
	if(winner === 1){
		playerResult++;
		winCount++;
	} else{
		computerResult++;
		winCount++;
	}
}

const displayResult = function(argComputerMove, argPlayerMove){
	if(
		argComputerMove === rock && argPlayerMove === paper ||
		argComputerMove === paper && argPlayerMove === scissors ||
		argComputerMove === scissors && argPlayerMove === rock
	){
		printMessage('Ty wygrywasz!');
		saveScore(1);
	} else if(
		argComputerMove === rock && argPlayerMove === scissors ||
		argComputerMove === scissors && argPlayerMove === paper ||
		argComputerMove === paper && argPlayerMove === rock
	){
		printMessage('Ty przegrywasz!');
		saveScore(0);
	} else if(argComputerMove === argPlayerMove){
		printMessage('Jest remis!');
	} else{
		printMessage('Nie wybrałeś poprawnie swojego ruchu');
	}
}

var playGame = function(playerInput){
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
	const playerMove = getMoveName(playerInput);

    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
	printScore(computerResult, playerResult);

		
	if(isGameFinished && !howManyWins){
		resetGame();
	}
	
	if(playerResult === howManyWins || computerResult === howManyWins){
		endRound();
	}
}
}



//	CHEAT
// function playGame(playerInput){
//     clearMessages();

//     let randomNumber = Math.floor(Math.random() * 3 + 1);
//     let computerMove = getMoveName(randomNumber);
// 	let playerMove = getMoveName(playerInput);

// 	if(
// 		((computerResult / gameCount) > 0.25) &&
// 		(playerMove === rock)
// 	){
// 		computerMove = scissors;
// 	} else if (
// 		((computerResult / gameCount) > 0.25) &&
// 		(playerMove === paper)
// 	){
// 		computerMove = rock;
// 	} else if (
// 		((computerResult / gameCount) > 0.25) &&
// 		(playerMove === scissors)
// 	){
// 		computerMove = paper;
// 	}


//     printMessage('Mój ruch to: ' + computerMove);
//     printMessage('Twój ruch to: ' + playerMove);

//     displayResult(computerMove, playerMove);
// 	printScore(computerResult, playerResult);
// }

//ZMIANA BUTTONOW NA JEDEN RESTARTUJACY

// document.getElementById('buttons').innerHTML = '';
// let button = document.createElement('button');
// button.innerHTML = 'RESTART GRY';
// document.getElementById('buttons').appendChild(button);
// document.getElementById('buttons').addEventListener('click', function(){
// 	clearStats();
// })


//playerResult > howManyWins || computerResult > howManyWins