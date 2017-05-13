"use strict";

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fs = require("fs");

var gameContainer = require("./game.js");
//var transformsHelper = require("./transforms.js");
var transformsHelper = require("./transformsTS.js");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// create application/json parser
var jsonParser = bodyParser.json()

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.use('/static', express.static('public'))

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('test.html');
});

app.get('/api/runGame', function (req, res) {
   console.log("Loading ...");
   var completedGame = gameContainer.runGame(4);
   console.log("Game complete. ^^^^^^^^^66");

   res.end( JSON.stringify(transformsHelper.displayOutput(completedGame), null, "\t"));
});

app.get('/api/runGameVerbose', function (req, res) {
   console.log("Loading ...");
   var completedGame = gameContainer.runGame(4);
   //console.log("Game complete.");

   console.log("Game complete.&.&.&.");
   res.end( JSON.stringify(completedGame, null, "\t"));
});

app.post('/api/runGameWithSomeResults', function (req, res) {
    var players = req.body.players;
    console.log("player count: " + players.length);
    var playerCount = players.length;
    
   console.log("Loading ...");
   var completedGame = gameContainer.runGame(playerCount);
   console.log("Game complete.");

   console.log("Game complete.  Ma");
   res.end( JSON.stringify(completedGame, null, "\t"));
});

app.post('/api/runGameForFinalResults', function (req, res) {
    var players = req.body.players;
    var playerCount = players.length;
    
   var completedGame = gameContainer.runGame(playerCount, players);
   console.log("Game complete");

   var formatter = transformsHelper.Transforms.prototype.formatResultDetails(completedGame, null, "\t");

   res.end( JSON.stringify(formatter));
});


var server = app.listen(process.env.PORT || 8081, function () {

  var host = "127.0.0.1"  //server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})