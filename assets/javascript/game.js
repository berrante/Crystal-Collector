// runs jQuery at page load
$(document).ready(function (){

// track wins/loss
var wins = 0;
var losses = 0;

// values for random number and each crystal
var randomNumber = getNumber(19,120);

var blue = getNumber(1,12);
var yellow = getNumber(1,12);
var green = getNumber(1,12);
var red = getNumber(1,12);

// beginning game value
var totalNumber = 0;

// est a first click for certain resets
var firstClick = true;

// begin game
getValues();
$("#number2").text(totalNumber);

	
// computer generates random Numbers
	function getNumber(min,max){
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function getValues(){
	// display random number
		$("#number1").text(randomNumber);
	
	// assign click events that add the value of each crystal to totalNumber
		$("#blue-crystal").on("click", function(){
			totalNumber += blue;
			$("#number2").text(totalNumber);
			gamePlay();
		})
	
		$("#yellow-crystal").on("click", function(){
		totalNumber += yellow;
			$("#number2").text(totalNumber);
			gamePlay();
		})
		
		$("#green-crystal").on("click", function(){
		totalNumber += green;
			$("#number2").text(totalNumber);
			gamePlay();
		})
		
		$("#red-crystal").on("click", function(){
		totalNumber += red;
			$("#number2").text(totalNumber);
			gamePlay();
		})
	}

	function resetGame(){
// 		generate new random numbers
		getNumber();
		getValues();
// 		reset the random number
		randomNumber = getNumber(19,120);
		$("#number1").text(randomNumber);
// 		reset total number
		totalNumber = 0;
		$("#number2").text(totalNumber);
// 		make firstClick active
		firstClick === true;
	}
	
	function gamePlay(){
// 		if first click of game, reset win/loss message
		if (firstClick === true){
			firstClick === false;
			$("#loseText").text("");
			$("#winText").text("");
		}
// 		if player matches the random number
		if (totalNumber === randomNumber){
// 			increase wins
			wins++;
// 			add win message
			$("#winText").text("You won!");
// 			display win count
			$("#win").text("WINS: " + wins);
// 			restart game
			resetGame();
		}
// 		if player goes over random number
		else if (totalNumber > randomNumber){
// 			increase losses
			losses++;
// 			display lose message
			$("#loseText").text("You lost!");
// 			display loss count
			$("#lose").text("LOSSES: " + losses);
// 			restart game
			resetGame();
		}
		
	}

})
	
