var action = "";
var todos = new Array();

function printTodos() {
    console.log("**********")
    if (todos.length === 0) {
        console.log("There are no items in your todo list");
    } else {
        for (var i = 0; i < todos.length; i++) {
            console.log("[" + i + "]: " + todos[i]);
        }
    }
}

// This is necessary to allow the html to load before
// the loop begins
window.setTimeout(function(){
    while (action !== "quit") {
        action = prompt("What would you like to do?").toLowerCase();
    
        if (action === "new") {
            var newItem = prompt("Enter new item:");
            todos.push(newItem);
            console.log(newItem + " added!");
        } else if (action === "list") {
            printTodos();
        } else if (action === "delete") {
            if (todos.length === 0) {
                console.log("No items to delete");
            } else if (todos.length === 1) {
                var item = todos.pop();
                console.log(item + " deleted!");
            } else {
                var idx = Number(prompt("Enter an index to delete:"));

                if (idx >= 0 && idx < todos.length - 1) {
                    
                    var item = todos[idx];
                    todos = todos.filter(function(element){
                        return element !== item;
                    });
                    console.log("Removed: " + item);

                } else {
                    console.log("Please enter a valid index");
                }
            }
            
        } else if (action !== "quit") {
            console.log("Please enter a valid input");
        }
    }

    console.log("Exited todos");
}, 500);
