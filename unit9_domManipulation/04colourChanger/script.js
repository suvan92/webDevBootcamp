// MY SOLUTION

// var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isPurple = false;

// button.addEventListener("click", changeColour)

// function changeColour() {
//     if (isPurple) {
//         body.style.background = "white";
//     } else {
//         body.style.background = "purple";
//     }

//     isPurple = !isPurple
// }


// *****************************

// ALTERNATIVE SOLUTION

var button = document.querySelector("button");

button.addEventListener("click", function(){
    // 'purple' class was defined in style tag of index.html
    document.body.classList.toggle("purple");
});