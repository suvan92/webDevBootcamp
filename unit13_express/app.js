var express = require('express');
var app = express();

// ORDER OF ROUTES MATTERS
// First route that matches a given request is the only route that will be run

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!!!");
});

// route parameters
app.get("/r/:name", function(req, res){
    var name = req.params.name;
    res.send("Welcome to r/" + name);
});

app.get("*", function(req, res){
    res.status(404);
    res.send("Not found :(");
})

app.listen(3000);