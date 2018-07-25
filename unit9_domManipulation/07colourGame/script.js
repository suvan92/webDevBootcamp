var colors = [];
var pickedColor;
var darkBackgroundColor = "#232323";
var difficulty = 6

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("targetRGB");
var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName("h1")[0];
var resetButton = document.getElementById("reset");
var difficultyButtons = document.querySelectorAll(".difficultyBtn");

init();

function init() {
    resetGame();

    resetButton.addEventListener("click", resetGame);

    for (var i = 0; i < difficultyButtons.length; i++) {
        difficultyButtons[i].addEventListener("click", switchDifficulty);
    }
}

function resetGame() {
    colors = generateRandomColors(difficulty);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    setupSquares();
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
};

function switchDifficulty() {
    for (var i = 0; i < difficultyButtons.length; i++) {
        difficultyButtons[i].classList.toggle("selected");
    }

    if (difficulty === 6) {
        difficulty = 3;
    } else {
        difficulty = 6;
    }

    resetGame();
}

function generateRandomColors(num) {

    arr = [];

    for (var i = 0; i < num; i++) {
        var red = generateRandomRGBValue();
        var green = generateRandomRGBValue();
        var blue = generateRandomRGBValue();

        var color = "rgb(" + red + ", " + green + ", " + blue + ")";
        arr.push(color);
    }

    return arr;
}

function generateRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function guessedRight() {
    messageDisplay.textContent = "Correct!";
    h1.style.backgroundColor = pickedColor;
    resetButton.textContent = "Play again?";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }

    var seletedItems = document.querySelectorAll(".selected")

    console.log("Selected items: " + seletedItems.length);

    for (var i = 0; i < seletedItems.length; i++) {
        seletedItems[i].style.backgroundColor = pickColor;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

            squares[i].addEventListener("click", function () {
                if (!(this.style.backgroundColor === pickedColor)) {
                    this.style.backgroundColor = darkBackgroundColor;
                    messageDisplay.textContent = "Try again!";
                } else {
                    guessedRight();
                }
            })
        } else {
            squares[i].style.backgroundColor = darkBackgroundColor;
            squares[i].style.display = "none";
        }

    }
}