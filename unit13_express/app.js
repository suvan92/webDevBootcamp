var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!!!");
});

app.listen(8080);