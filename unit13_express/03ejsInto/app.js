var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("This is the homepage");
})

app.get("/fellinlovewith/:subject", function(req, res){
    var subject = req.params.subject;
    res.render("love.ejs", {subject: subject});
});

app.listen(3000, function(){
    console.log("Listening on port: 3000");
})