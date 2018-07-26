var express = require('express');
var app = express();

app.notFound = "Sorry, page not found... what are you doing with your life?";

app.get("/", function(req, res){
    res.send("Hello, welcome to my assignment");
})

app.get("/speak/:animal", function(req, res){

    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof woof!"
    };

    var animal = req.params.animal;

    var sound = sounds[animal];

    if(sound === undefined) {
        sound = "..."
    }
    
    res.send("The " + animal + " says " + "\"" + sound + "\"");
});

app.get("/repeat/:value/:count", function(req, res){
    var value = req.params.value;
    var count = Number(req.params.count);

    if(count === NaN) {
        res.send(app.notFound);
    } else {
        var resStr = "";

        for(var i = 0; i < count; i++) {
            resStr += value + " ";
        }

        res.send(resStr);
    }
});

app.get("*", function(req, res){
    res.send(app.notFound);
});

app.listen(3000, function() {
    console.log("Listening on port: 3000");
});