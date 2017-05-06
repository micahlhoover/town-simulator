var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fs = require("fs");

var gameContainer = require("./game.js");
var transformsHelper = require("./transforms.js");

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

// displayOutput = function(completedGame) {
//   var output = {};

//   output.rounds = completedGame.rounds;

//   // get players info
//   output.players = [];
//   for( var pi = 0; pi < completedGame.players.length; pi++) {
//     var thisPlayer = {};
//     var thisPlayerFromGame = completedGame.players[pi];
//     thisPlayer.money = thisPlayerFromGame.money;
//     thisPlayer.targetExpensive = thisPlayerFromGame.targetExpensive;
    
//     // sum purchased establishments
//     var purchases = {};
//     for( var e = 0; e < thisPlayerFromGame.establishments.length; e++) {
//       var thisEstablishmentName = thisPlayerFromGame.establishments[e].Name;
//       if (!purchases[thisEstablishmentName]) {
//         purchases[thisEstablishmentName] = 1;
//       } else {
//         purchases[thisEstablishmentName] = purchases[thisEstablishmentName] + 1;
//       }
//     }
//     thisPlayer.purchases = purchases;
    
//     // sum purchased landmarks
//     var landmarks = [];
//     for( var l = 0; l < thisPlayerFromGame.landmarks.length; l++) {
//       if (thisPlayerFromGame.landmarks[l].Active) {
//         landmarks.push(thisPlayerFromGame.landmarks[l].Name);
//       }
//     }
//     thisPlayer.purchasedLandmarks = landmarks;

//     output.players.push(thisPlayer);
//   }
//   return output;
// }

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
   console.log("Game complete.");

   res.end( JSON.stringify(transformsHelper.displayOutput(completedGame), null, "\t"));
});

app.get('/api/runGameVerbose', function (req, res) {
   console.log("Loading ...");
   var completedGame = gameContainer.runGame(4);
   console.log("Game complete.");

   res.end( JSON.stringify(completedGame, null, "\t"));
});

// app.post('/runGameParams', jsonParser, function (req, res) {
//   //if (!req.body) return res.sendStatus(400)
//   // create user in req.body
//   console.log("Got it.");
//   res.end("test");
// });

app.post('/api/runGameWithSomeResults', function (req, res) {
    var players = req.body.players;
    console.log("player count: " + players.length);
    var playerCount = players.length;
    
   console.log("Loading ...");
   var completedGame = gameContainer.runGame(playerCount);
   console.log("Game complete.");

   //res.end( JSON.stringify(displayOutput(completedGame), null, "\t"));
   res.end( JSON.stringify(completedGame, null, "\t"));
});

app.post('/api/runGameForFinalResults', function (req, res) {
    var players = req.body.players;
    console.log("player count: " + players.length);
    var playerCount = players.length;
    
   console.log("Loading ...");
   var completedGame = gameContainer.runGame(playerCount, players);
   console.log("Game complete.");

   res.end( JSON.stringify(transformsHelper.formatResultDetails(completedGame, null, "\t")));
});


var server = app.listen(8081, function () {

  var host = "127.0.0.1"  //server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})