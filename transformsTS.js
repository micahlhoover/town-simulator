"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LandMark = (function () {
    function LandMark() {
    }
    return LandMark;
}());
var Establishment = (function () {
    function Establishment() {
    }
    return Establishment;
}());
var Purchase = (function () {
    function Purchase() {
    }
    return Purchase;
}());
var Player = (function () {
    function Player() {
        var purchases = [];
        var landmarks = [];
    }
    return Player;
}());
var Output = (function () {
    function Output() {
    }
    return Output;
}());
var OutputSummary = (function () {
    function OutputSummary() {
        this.loserColorRedCount = 0;
        this.loserColorGreenCount = 0;
        this.loserColorBlueCount = 0;
        this.loserThriftyCount = 0;
        this.loserAggressiveCount = 0;
    }
    return OutputSummary;
}());
var Transforms = (function () {
    function Transforms() {
    }
    Transforms.prototype.contructor = function () {
        var output = new Output();
    };
    Transforms.prototype.displayOutput = function (completedGame) {
        var output = new Output();
        output.rounds = completedGame.rounds;
        // get players info
        output.players = [];
        for (var pi = 0; pi < completedGame.players.length; pi++) {
            var thisPlayer = new Player();
            var thisPlayerFromGame = completedGame.players[pi];
            thisPlayer.money = thisPlayerFromGame.money;
            thisPlayer.targetExpensive = thisPlayerFromGame.targetExpensive;
            // sum purchased establishments
            //var purchases = {};
            var map = {};
            for (var e = 0; e < thisPlayerFromGame.establishments.length; e++) {
                var thisEstablishmentName = thisPlayerFromGame.establishments[e].Name;
                if (!map[thisEstablishmentName]) {
                    map[thisEstablishmentName] = 1;
                }
                else {
                    map[thisEstablishmentName] = map[thisEstablishmentName] + 1;
                }
            }
            thisPlayer.purchases = map;
            // sum purchased landmarks
            var landmarks = [];
            for (var l = 0; l < thisPlayerFromGame.landmarks.length; l++) {
                if (thisPlayerFromGame.landmarks[l].Active) {
                    landmarks.push(thisPlayerFromGame.landmarks[l].Name);
                }
            }
            thisPlayer.landmarks = landmarks;
            output.players.push(thisPlayer);
        }
        console.log("%%%%%%%%%%%%%%1 TS complete.");
        return output;
    };
    // ----------------------------------------------------------------------------------- // 
    Transforms.prototype.getBuiltLandmarkCount = function (player) {
        var count = 0;
        console.log("player posture: " + player.targetExpensive);
        for (var i = 0; i < player.landmarks.length; i++) {
            console.log("active:" + player.landmarks[i].Active);
            if (player.landmarks[i].Active) {
                count++;
            }
        }
        console.log("active landmark count:" + count);
        return count;
    };
    Transforms.prototype.formatResultDetails = function (completedGame) {
        var output = new OutputSummary();
        output.rounds = completedGame.rounds;
        for (var pi = 0; pi < completedGame.players.length; pi++) {
            var activeLandmarkCount = this.getBuiltLandmarkCount(completedGame.players[pi]);
            console.log("active landmark count: " + activeLandmarkCount);
            if (activeLandmarkCount === 4) {
                // the winner
                var winnerExternal = completedGame.players[pi];
                console.log("winner id:" + winnerExternal.name);
                console.log("winner is aggressive: " + winnerExternal.targetExpensive);
                output.winner = new Player();
                output.winner.spendingStyle = (winnerExternal.targetExpensive ? "Aggressive" : "Thrifty");
                output.winner.colorStyle = winnerExternal.colorStyle;
            }
            else {
                // a loser
                if (completedGame.players[pi].colorStyle == "Red") {
                    output.loserColorRedCount++;
                }
                else if (completedGame.players[pi].colorStyle == "Green") {
                    output.loserColorGreenCount++;
                }
                else if (completedGame.players[pi].colorStyle == "Blue") {
                    output.loserColorBlueCount++;
                }
                if (completedGame.players[pi].targetExpensive) {
                    output.loserAggressiveCount++;
                }
                else {
                    output.loserThriftyCount;
                }
            }
        }
        console.log("%%%%%%%%%%%%%% TS complete.");
        return output;
    };
    return Transforms;
}());
exports.Transforms = Transforms;
//module.exports.Transforms = Transforms;
//module.exports.formatResultDetails = formatResultDetails;
//module.exports.displayOutput = displayOutput;
