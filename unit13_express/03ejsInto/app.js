var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/fellinlovewith/:subject", function(req, res){
    var subject = req.params.subject;
    res.render("love", {subject: subject});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post1", author: "Ashton"},
        {title: "Pet bunnies", author: "Jennifer"},
        {title: "USD", author: "Deep"},
    ]
    res.render("posts", {posts: posts});
})

app.listen(3000, function(){
    console.log("Listening on port: 3000");
})