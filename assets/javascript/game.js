//Crystal Collector Game
//Global Variables

var playerScore = 0;
var randNum = 0;
var endOfGame = false;
var playerLoses = false;
var wins = 0;
var losses = 0;
var lossSound = new Audio ("Sad-trombone.mp3");
var winSound = new Audio ("Funny-fanfare-sound.mp3");


var crystal = {

	red: {
		image: "./assets/images/red.png",
		power: 0,
	},

	blue: {
		image: "./assets/images/blue.png",
		power: 0,
	},

	yellow: {
		image: "./assets/images/yellow.png",
		power: 0,
	},

	green: {
		image: "./assets/images/green.png",
		power: 0,
	},	
};

//Begin Jquery/Javascript

$(document).ready(function(){

	$("#red").append("<img src =" + crystal.red.image + ">");
		$("#red").click(function() {
			if (endOfGame == false) {
			playerScore = playerScore + crystal.red.power;
			checkScore();
			$("#playerScore").html(playerScore);
			};
		})


	$("#blue").append("<img src=" + crystal.blue.image + ">");
		$("#blue").click(function(){
			if (endOfGame == false) {
				playerScore = playerScore + crystal.blue.power;
		        checkScore();
				$("#playerScore").html(playerScore);
			};
		})


	$("#yellow").append("<img src=" + crystal.yellow.image + ">");
		$("#yellow").click(function() {
			if (endOfGame == false) {
				playerScore = playerScore + crystal.yellow.power;
			    checkScore();
				$("#playerScore").html(playerScore);
			};
		})


	$("#green").append("<img src=" + crystal.green.image + ">");
		$("#green").click(function(){
			if (endOfGame == false) {
				playerScore = playerScore + crystal.green.power;
			    checkScore();
				$("#playerScore").html(playerScore);
			};
		})




	//Begin functions

	function checkScore() {
		$("#playerScore").html(playerScore);
			if (playerScore == randNum) {
				endOfGame = true;
				wins++;
				$("#message").text("Congratulations, you win!");
				winSound.play();
				

			} else if (playerScore > randNum) {
				playerLoses = true;
				endOfGame = true; 
				losses++;
				$("#message").text("So sorry, you lost!");
				lossSound.play();
			};

			if (endOfGame) {
				$("#wins").html(wins);
				$("#losses").html(losses);
				setTimeout(startGame, 3000);
			}


	} 








	function startGame() {
		endOfGame = false;
		playerLoses = 0;
		playerScore = 0;
		randNum = Math.round(Math.random() * (120 - 19)) + 19;

		crystal.red.power = Math.round(Math.random() * (12-1)) + 1;
		crystal.blue.power = Math.round(Math.random() * (12-1)) + 1;
		crystal.yellow.power = Math.round(Math.random() * (12-1)) + 1;
		crystal.green.power = Math.round(Math.random() * (12-1)) + 1;

		//console.log(randNum);
		//console.log(crystal.red.power);
		//console.log(crystal.blue.power);
		//console.log(crystal.yellow.power);
		//console.log(crystal.green.power);

		$("#playerScore").html(playerScore);
		$("#randNum").html(randNum);
		$("#wins").html(wins);
		$("#losses").html(losses);
		$("#message").text("New Game!");





	}



startGame();





}); //Close JQuery/Javascript


	