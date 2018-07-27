var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/fellinlovewith/:subject", function(req, res){
    var subject = req.params.subject;
    res.render("love.ejs", {subject: subject});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post1", author: "Ashton"},
        {title: "Pet bunnies", author: "Jennifer"},
        {title: "USD", author: "Deep"},
    ]
    res.render("posts.ejs", {posts: posts});
})

app.listen(3000, function(){
    console.log("Listening on port: 3000");
})