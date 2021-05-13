
const paper = 'papier';
const rock = 'kamień';
const scissors = 'nożyczki';
let playerResult = 0;
let computerResult = 0;
let gameWins = Number(prompt('Do ilu wygranych gramy?'));
let gameCount = 0;
let winCount = 0;
let roundFlague = false;
let roundCount = 0;

const printMessage = function(message){
	const div = document.createElement('div');
	div.innerHTML = message;
	document.getElementById('messages').appendChild(div);
}

const printScore = function(computerResult, playerResult){
	const resultsWrapper = document.createElement('div');
	const resultsHeader = document.createElement('h3');
	resultsWrapper.innerHTML = 'CPU ' + computerResult + ' - ' + playerResult + ' TY';
	resultsHeader.innerHTML = 'WYNIK GRY (do ' + gameWins + ' wygranych)';
	document.getElementById('result').appendChild(resultsHeader);
	document.getElementById('result').appendChild(resultsWrapper);
}

const roundEnd = function(){
	const roundHeader = document.createElement('h3');
	let winner = '';

	if(playerResult === gameWins){
		winner = 'Brawo! Wygrałeś!!!'
	} else if(computerResult === gameWins){
		winner = 'Przegrałeś, spróbuj ponownie!'
	}

	roundHeader.innerHTML = 'Gra zakończona ' + gameWins + ' zwycięstwami! ' + winner;
	document.getElementById('result').appendChild(roundHeader);

	roundFlague = true;
}

const clearStats = function(){
	clearMessages()
	playerResult = 0;
	computerResult = 0;
	gameCount = 0;
	winCount = 0;
	gameWins = Number(prompt('Do ilu wygranych gramy?'));
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

const displayResult = function(argComputerMove, argPlayerMove){
	if(
		argComputerMove === rock && argPlayerMove === paper ||
		argComputerMove === paper && argPlayerMove === scissors ||
		argComputerMove === scissors && argPlayerMove === rock
	){
		printMessage('Ty wygrywasz!');
		playerResult++;
		winCount++;
		gameCount++;
	} else if(
		argComputerMove === rock && argPlayerMove === scissors ||
		argComputerMove === scissors && argPlayerMove === paper ||
		argComputerMove === paper && argPlayerMove === rock
	){
		printMessage('Ty przegrywasz!');
		computerResult++;
		winCount++;
		gameCount++;
	} else if(argComputerMove === argPlayerMove){
		printMessage('Jest remis!');
		gameCount++;
	} else{
		printMessage('Nie wybrałeś poprawnie swojego ruchu');
	}
}

const playGame = function(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);

    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
	printScore(computerResult, playerResult);
	
	if(playerResult === gameWins || computerResult === gameWins){
		roundEnd();
		gameWins = -1;
		roundCount = gameCount;
	}
	
	if(roundFlague === true && gameCount > roundCount){
		clearStats();
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


//playerResult > gameWins || computerResult > gameWins