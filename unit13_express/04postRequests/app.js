var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.friends = ["Deep", "Ashton", "Erik", "Michael", "Jennifer"];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: app.friends});
})

app.post("/addfriend", function(req, res){
    var newFriend = req.body.name;
    app.friends.push(newFriend);
    res.redirect("/friends");
})

app.listen(3000, function(){
    console.log("Listening on port: 3000");
});