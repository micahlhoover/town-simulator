displayOutput = function(completedGame) {
  var output = {};

  output.rounds = completedGame.rounds;

  // get players info
  output.players = [];
  for( var pi = 0; pi < completedGame.players.length; pi++) {
    var thisPlayer = {};
    var thisPlayerFromGame = completedGame.players[pi];
    thisPlayer.money = thisPlayerFromGame.money;
    thisPlayer.targetExpensive = thisPlayerFromGame.targetExpensive;
    
    // sum purchased establishments
    var purchases = {};
    for( var e = 0; e < thisPlayerFromGame.establishments.length; e++) {
      var thisEstablishmentName = thisPlayerFromGame.establishments[e].Name;
      if (!purchases[thisEstablishmentName]) {
        purchases[thisEstablishmentName] = 1;
      } else {
        purchases[thisEstablishmentName] = purchases[thisEstablishmentName] + 1;
      }
    }
    thisPlayer.purchases = purchases;
    
    // sum purchased landmarks
    var landmarks = [];
    for( var l = 0; l < thisPlayerFromGame.landmarks.length; l++) {
      if (thisPlayerFromGame.landmarks[l].Active) {
        landmarks.push(thisPlayerFromGame.landmarks[l].Name);
      }
    }
    thisPlayer.purchasedLandmarks = landmarks;

    output.players.push(thisPlayer);
  }
  return output;
}

module.exports.displayOutput = displayOutput;

// ----------------------------------------------------------------------------------- // 

getBuiltLandmarkCount = function(player) {
    var count = 0;
    console.log("player posture: " + player.targetExpensive);
    for( var i = 0; i < player.landmarks.length; i++) {        
        console.log("active:" + player.landmarks[i].Active);
        if (player.landmarks[i].Active) {
            count++;
        }
    }
    console.log("active landmark count:" + count);
    return count;
}


formatResultDetails = function(completedGame) {
  var output = {};
  output.winner = {};
  output.loserColorRedCount = 0;
  output.loserColorGreenCount = 0;
  output.loserColorBlueCount = 0;
  output.loserThriftyCount = 0;
  output.loserAggressiveCount = 0;

  output.rounds = completedGame.rounds;

  for( var pi = 0; pi < completedGame.players.length; pi++) {
      var activeLandmarkCount = getBuiltLandmarkCount(completedGame.players[pi]);
      console.log("active landmark count: " + activeLandmarkCount);
      if (activeLandmarkCount === 4) {
          // the winner
          var winner = completedGame.players[pi];
          console.log("winner id:" + winner.name)
          console.log("winner is aggressive: " + winner.targetExpensive);
          output.winner.spendingStyle = (winner.targetExpensive ? "Aggressive" : "Thrifty");
          output.winner.colorStyle = winner.colorStyle;
      } else {
          // a loser
          if (completedGame.players[pi].colorStyle == "Red") {
              output.loserColorRedCount++;
          } else if (completedGame.players[pi].colorStyle == "Green") {
              output.loserColorGreenCount++;
          } else if (completedGame.players[pi].colorStyle == "Blue") {
              output.loserColorBlueCount++;
          }

          if (completedGame.players[pi].targetExpensive) {
              output.loserAggressiveCount++;
          } else {
              output.loserThriftyCount;
          }
      }
  }
  return output;
}

module.exports.formatResultDetails = formatResultDetails;

