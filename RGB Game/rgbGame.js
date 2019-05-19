// Query elements
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

// Initial game mode
var numSquares = 6;
var	colors = [];
var	pickedColor;
init();

function init() {
	initModBtns();
	initSquares();
	initResetBtn();
	reset();
}

function initModBtns() {
	for(var i = 0; i < modes.length; i++) {
		modes[i].addEventListener("click", function() {
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function initSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeToColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				messageDisplay.textContent = "Try again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function initResetBtn() {
	resetButton.addEventListener("click", function() {
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
}

function generateRandomColors(size) {
	var colors = [];

	for(var i = 0; i < size; i++) {
		colors.push(randomColor());
	}

	return colors;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeToColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}