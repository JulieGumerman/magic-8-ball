/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0; 
activePlayer = 0;





document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function() {
	var dice = Math.floor(Math.random() * 6) +1;

	//display result
	
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	//update round score if rolled number is not a 0
	if (dice !== 1){
		//add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}
	else {
		nextPlayer();

		}
});



document.querySelector('.btn-hold').addEventListener('click', function() {
	//add CURRENT score to GLOBAL score
	scores[activePlayer] += roundScore;

	//update UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	
	nextPlayer();

	//Check if player won the game
}


function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent ='0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';

		
}







