//These are the declarations of the variables used in the code
//Computer choice is the random choice made by the computer
//User choice is the selection of the game player
//Panel display is the sentence displayed based on the results
let computerChoice = ""
let userChoice = ""
let panelDisplay = document.querySelector(".result-panel");
let rock = ""
let paper = ""
let scissors = ""
let userPoint = 0
let computerPoint = 0
let result = ""
let userChoicePanel = document.getElementById("user-choice-panel")
let computerChoicePanel = document.getElementById("computer-choice-panel")
let pickMoveBar = document.querySelector(".pick-move-bar")
let userScore = document.querySelector(".user-score")
let compScore = document.querySelector(".comp-score")

userScore.textContent = userPoint
compScore.textContent = computerPoint


function playGame(playerChoice) {
	userChoice = playerChoice

	//Let's create a random selection for the computer
	function renderChoice() {
		//This is old code which I commented out
		// let randomNo  = Math.floor(Math.random() * 3)
		// console.log("random number: " + randomNo)
		// if(randomNo == 0){
		// 	computerChoice = "rock"
		// }
		// else if (randomNo == 1){
		// 	computerChoice = "paper"
		// }
		// else if(randomNo == 2){
		// 	computerChoice = "scissors"
		// }

		//Note that I used a new method for the random selection of objects.
		//This can be done by putting all the elements in an array, 
		//and randomizing the index of the array.

		let choiceArray = ["rock", "paper", "scissors"]
		let randomChoice = choiceArray[Math.floor(Math.random() * 3)]
		computerChoice = randomChoice
	}
	renderChoice()

	console.log("Computer choice: " + computerChoice)


	function compareChoice() {

		if (userChoice === computerChoice) {
			panelDisplay.innerHTML = "That's a draw,<br> No point!😅"
			userChoicePanel.textContent = `Your choice: ${userChoice}`
			computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
			result = "tie"
		}

		//Wow!!😅😅, so apparently I learnt that I should be using switch cases instead of multiple
		// if-else statements, Let's try it!!

		//So apparently, for an object, one of the remaining two makes you win, and the other makes you lose
		//That's the logic used in the switch cases

		//rock, scissors, paper
		//paper, rock, scissors
		//scissors, paper, rock

		else {
			switch (userChoice) {
				case "rock":
					panelDisplay.innerHTML = (computerChoice === "scissors") ? "Rock pounds scissors,<br> YOU WIN!😆🎉🎉" : "Paper wraps rock,<br> YOU LOSE!😞😓";
					result = (computerChoice === "scissors") ? "win" : "lose"
					break;

				case "paper":
					panelDisplay.innerHTML = (computerChoice === "rock") ? "Paper wraps rock,<br> YOU WIN!😆😊" : "Scissor cuts paper,<br> YOU LOSE!😞😓";
					result = (computerChoice === "rock") ? "win" : "lose"
					break;

				case "scissors":
					panelDisplay.innerHTML = (computerChoice === "paper") ? "Scissor cuts paper,<br> YOU WIN!😊🙌" : "Rock pounds scissor,<br> YOU LOSE!😢😭";
					result = (computerChoice === "paper") ? "win" : "lose"
					break;
			}
			userChoicePanel.textContent = `Your choice: ${userChoice}`
			computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		}

		//This is another switch case to give points to either the user or computer

		//The break statement is really important
		//It terminates each case
		switch (result) {
			case "win":
				userPoint++
				userScore.textContent = userPoint
				break;

			case "lose":
				computerPoint++
				compScore.textContent = computerPoint
				break;

			case "game-end":
				userPoint
				userScore.textContent = userPoint
				computerPoint
				compScore.textContent = computerPoint
		}
		//This is my old code which I commented out
		//Look how many lines I actually used😂😂😂

		// if (userChoice === "rock" && computerChoice === "paper") {
		// 	panelDisplay.innerHTML = "Paper wraps rock,<br> YOU LOSE!😞😓"
		// 	computerPoint++
		// 	compScore.textContent = computerPoint
		// 	userChoicePanel.textContent = `Your choice: ${userChoice}`
		// 	computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		// }
		// if (userChoice === "rock" && computerChoice === "scissors") {
		// 	panelDisplay.innerHTML = "Rock pounds scissors,<br> YOU WIN!😆🎉🎉"
		// 	userPoint++
		// 	userScore.textContent = userPoint
		// 	userChoicePanel.textContent = `Your choice: ${userChoice}`
		// 	computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		// }
		// if (userChoice === "paper" && computerChoice === "rock") {
		// 	panelDisplay.innerHTML = "Paper wraps rock,<br> YOU WIN!😆😊"
		// 	userPoint++
		// 	userScore.textContent = userPoint
		// 	userChoicePanel.textContent = `Your choice: ${userChoice}`
		// 	computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		// }
		// if (userChoice === "paper" && computerChoice === "scissors") {
		// 	panelDisplay.innerHTML = "Scissor cuts paper,<br> YOU LOSE!😞😓"
		// 	computerPoint++
		// 	compScore.textContent = computerPoint
		// 	userChoicePanel.textContent = `Your choice: ${userChoice}`
		// 	computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		// }
		// if (userChoice === "scissors" && computerChoice === "paper") {
		// 	panelDisplay.innerHTML = "Scissor cuts paper,<br> YOU WIN!😊🙌"
		// 	userPoint++
		// 	userScore.textContent = userPoint
		// 	userChoicePanel.textContent = `Your choice: ${userChoice}`
		// 	computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		// }
		// if (userChoice === "scissors" && computerChoice === "rock") {
		// 	panelDisplay.innerHTML = "Rock pounds scissor,<br> YOU LOSE!😢😭"
		// 	computerPoint++
		// 	compScore.textContent = computerPoint
		// 	userChoicePanel.textContent = `Your choice: ${userChoice}`
		// 	computerChoicePanel.textContent = `Computer choice: ${computerChoice}`
		// }
	}
	compareChoice()

	if (userPoint == 10 || computerPoint == 10) {	
		//These functions are called when the user or computer reaches 10 points
		askToRestart()
		endGame()
	}
}

//The endGame function displays the final winner of the game round
function endGame() {
	if (userPoint == 10) {
		panelDisplay.innerHTML = "Game over!!, <br> YOU WIN🤩🤩🎉🙌🎉🙌"
	}
	else if (computerPoint == 10) {
		panelDisplay.innerHTML = "Game over!!, <br> YOU LOSE😭😭😢😥"
	}
}

//This prompts the user to restart the game
function askToRestart() {
	pickMoveBar.innerHTML =
		`<div type="button" class="button-holders" id="rock-button-holder" onclick="endGame()">
		  <p class="wide-paragraph">Want to restart game?</p>
		</div>`
		document.getElementById("restart-button").classList.add("ask-to-restart")
}

//The restart game function restarts the game 
function restartGame() {
	userPoint = computerPoint = 0
	userScore.textContent = compScore.textContent = 0
	panelDisplay.textContent = "Good luck👍👍👍"
	userChoicePanel.textContent = ""
	computerChoicePanel.textContent = ""
	pickMoveBar.innerHTML = `
		<div type="button" class="button-holders" id="rock-button-holder" onclick="playGame('rock')">
		<img src="Images/rock.png" class="buttons" alt="">
		<p>Rock</p>
		</div>
		<div type="button" class="button-holders" id="paper-button-holder" onclick="playGame('paper')">
		<img src="Images/paper.png" class="buttons" alt="">
		<p>Paper</p>
		</div>
		<div type="button" class="button-holders" id="scissors-button-holder" onclick="playGame('scissors')">
		<img src="Images/scissors.png" class="buttons" alt="">
		<p>Scissors</p>
		</div>`
	document.getElementById("restart-button").classList.remove("ask-to-restart")
}








