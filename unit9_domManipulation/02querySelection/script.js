// 4 ways to select the first p tag

var fP = document.getElementById("first");
fP = document.getElementsByTagName("p")[0];
fP = document.querySelector("#first");
fP = document.getElementsByClassName("special")[0];
fP = document.querySelector(".special");
