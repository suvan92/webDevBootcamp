var action = "";
var todos = new Array();

// This is necessary to allow the html to load before
// the loop begins
window.setTimeout(function(){
    while (action !== "quit") {
        action = prompt("What would you like to do?");
    
        if (action === "new") {
            var newItem = prompt("Enter new item:");
            todos.push(newItem);
            console.log(newItem + " added!");
        } else if (action === "list") {
            console.log(todos);
        } else if (action !== "quit") {
            console.log("Please enter a valid input");
        }
    }
}, 500);

