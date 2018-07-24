var p1Button = document.getElementById("player1");
var p2Button = document.getElementById("player2");
var resetButton = document.getElementById("reset");
var p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
var p2ScoreDisplay = document.getElementById("p2ScoreDisplay");
var playingToField = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var player1Score = 0;
var player2Score = 0;

var playingTo = 5;

p1Button.addEventListener("click", function(){
    player1Score += 1;
    p1ScoreDisplay.textContent = player1Score;
    checkGameEnd();
});

p2Button.addEventListener("click", function(){
    player2Score += 1;
    p2ScoreDisplay.textContent = player2Score;
    checkGameEnd();
});

resetButton.addEventListener("click", resetGame);

playingToField.addEventListener("change", function(){
    var newTarget = Number(this.value);

    if (newTarget >= 1) {
        playingTo = newTarget;
        winningScoreDisplay.textContent = newTarget;
        resetGame();
    }
});

function checkGameEnd() {
    if (player1Score === playingTo) {
        p1ScoreDisplay.style.color = "green";
        disableScoreButtons();
    } else if (player2Score === playingTo) {
        p2ScoreDisplay.style.color = "green";
        disableScoreButtons();
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;

    p1ScoreDisplay.textContent = player1Score;
    p2ScoreDisplay.textContent = player2Score;

    p1ScoreDisplay.style.color = "black";
    p2ScoreDisplay.style.color = "black";
    enableScoreButtons();
}

function enableScoreButtons() {
    p1Button.disabled = false;
    p2Button.disabled = false;
}

function disableScoreButtons() {
    p1Button.disabled = true;
    p2Button.disabled = true;
}

