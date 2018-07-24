var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i ++) {
    lis[i].addEventListener("click", function(){
        console.log("li with text: \"" + this.textContent + "\" was clicked");
    });
}