var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", changeColour)

function changeColour() {
    if (isPurple) {
        body.style.background = "white";
    } else {
        body.style.background = "purple";
    }

    isPurple = !isPurple
}