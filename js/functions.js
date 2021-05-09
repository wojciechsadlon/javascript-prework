let paper = 'papier';
let rock = 'kamień';
let scissors = 'nożyczki';
let playerResult = 0;
let computerResult = 0;
let gameWins = Number(prompt('Do ilu wygranych gramy?'));
let gameCount = 0;
let winCount = 0;

function printMessage(message){
	let div = document.createElement('div');
	div.innerHTML = message;
	document.getElementById('messages').appendChild(div);
}

function printScore(computerResult, playerResult){
	let resultsWrapper = document.createElement('div');
	let resultsHeader = document.createElement('h3');
	resultsWrapper.innerHTML = 'CPU ' + computerResult + ' - ' + playerResult + ' TY';
	resultsHeader.innerHTML = 'WYNIK GRY (do ' + gameWins + ' wygranych)';
	document.getElementById('result').appendChild(resultsHeader);
	document.getElementById('result').appendChild(resultsWrapper);
}

function roundEnd(){
	let roundHeader = document.createElement('h3');
	let winner = '';

	if(playerResult === gameWins){
		winner = 'Brawo! Wygrałeś!!!'
	} else if(computerResult === gameWins){
		winner = 'Przegrałeś, spróbuj ponownie!'
	}

	roundHeader.innerHTML = 'Gra zakończona ' + gameWins + ' zwycięstwami! ' + winner;
	document.getElementById('result').appendChild(roundHeader);
}

function clearStats(){
	clearMessages()
	playerResult = 0;
	computerResult = 0;
	gameCount = 0;
	winCount = 0;
	gameWins = Number(prompt('Do ilu wygranych gramy?'));
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
		gameCount++;
		winCount++;
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

function playGame(playerInput){
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
	} 
	
	if(playerResult > gameWins || computerResult > gameWins){
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

