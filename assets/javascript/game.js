//Crystal Collector Game
//Global Variables

var playerScore = 0;
var randNum = 0;
var endOfGame = false;
var playerLoses = false;
var wins = 0;
var loses = 0;

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


$(document).ready(function(){

	$("#red").append("<img src =" + crystal.red.image + ">");


	$("#blue").append("<img src=" + crystal.blue.image + ">");


	$("#yellow").append("<img src=" + crystal.yellow.image + ">");

	$("#green").append("<img src=" + crystal.green.image + ">");



	function startGame() {
		endOfGame = false;
		playerLoses = 0;
		playerScore = 0;
		randNum = Math.round(Math.random() * (120 - 19)) + 19;

		crystal.red.power = Math.round(Math.random() * (12-1)) + 1;
		crystal.blue.power = Math.round(Math.random() * (12-1)) + 1;
		crystal.yellow.power = Math.round(Math.random() * (12-1)) + 1;
		crystal.green.power = Math.round(Math.random() * (12-1)) + 1;

		console.log(randNum);
		console.log(crystal.red.power);
		console.log(crystal.blue.power);
		console.log(crystal.yellow.power);
		console.log(crystal.green.power);





	}



startGame();





});


	