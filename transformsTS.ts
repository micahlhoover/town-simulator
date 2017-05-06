"use strict";

class LandMark {
    name: string;
    cost: number;
    active: boolean;
}

class Establishment {
    name: string;
    cost: number;
    active: boolean;
}

class Purchase {
    name: string;
    count: number;
}

class Player {
    money: number;
    targetExpensive: boolean;
    purchasesOld: Establishment[];
    purchases: { [name: string]: number; };
    landmarks: LandMark[];
    spendingStyle:string;
    colorStyle:string;

    constructor() {
        let purchases = [];
        let landmarks = [];
    }
}

class Output {
    rounds: number;
    players: Player[];
}

class OutputSummary {
        winner: Player;
        loserColorRedCount: number;
        loserColorGreenCount: number;
        loserColorBlueCount: number;
        loserThriftyCount: number;
        loserAggressiveCount: number;

        rounds:number;  // = completedGame.rounds;

        constructor() {
            this.loserColorRedCount = 0;
            this.loserColorGreenCount = 0;
            this.loserColorBlueCount = 0;
            this.loserThriftyCount = 0;
            this.loserAggressiveCount = 0;
        }
}

export class Transforms {
    output: Output;

    contructor() {
        let output = new Output();
    }

    displayOutput (completedGame) {
        let output = new Output();

        output.rounds = completedGame.rounds;

        // get players info
        output.players = [];
        for( var pi = 0; pi < completedGame.players.length; pi++) {
            let thisPlayer = new Player();
            let thisPlayerFromGame = completedGame.players[pi];
            thisPlayer.money = thisPlayerFromGame.money;
            thisPlayer.targetExpensive = thisPlayerFromGame.targetExpensive;
            
            // sum purchased establishments
            //var purchases = {};
            var map: { [name: string]: number; } = { };

            for( var e = 0; e < thisPlayerFromGame.establishments.length; e++) {
                var thisEstablishmentName = thisPlayerFromGame.establishments[e].Name;
                if (!map[thisEstablishmentName]) {
                    map[thisEstablishmentName] = 1;
                } else {
                    map[thisEstablishmentName] = map[thisEstablishmentName] + 1;
                }
            }
            thisPlayer.purchases = map;
            
            // sum purchased landmarks
            var landmarks = [];
            for( var l = 0; l < thisPlayerFromGame.landmarks.length; l++) {
            if (thisPlayerFromGame.landmarks[l].Active) {
                landmarks.push(thisPlayerFromGame.landmarks[l].Name);
            }
            }
            thisPlayer.landmarks = landmarks;

            output.players.push(thisPlayer);
        }
        console.log("%%%%%%%%%%%%%%1 TS complete.");
        return output;
    }

    

    // ----------------------------------------------------------------------------------- // 

    getBuiltLandmarkCount(player) {
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


    formatResultDetails(completedGame) {
        var output = new OutputSummary();

        output.rounds = completedGame.rounds;

        for( var pi = 0; pi < completedGame.players.length; pi++) {
            var activeLandmarkCount = this.getBuiltLandmarkCount(completedGame.players[pi]);
            console.log("active landmark count: " + activeLandmarkCount);
            if (activeLandmarkCount === 4) {
                // the winner
                var winnerExternal = completedGame.players[pi];
                console.log("winner id:" + winnerExternal.name)
                console.log("winner is aggressive: " + winnerExternal.targetExpensive);
                output.winner = new Player();
                output.winner.spendingStyle = (winnerExternal.targetExpensive ? "Aggressive" : "Thrifty");
                output.winner.colorStyle = winnerExternal.colorStyle;
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
        console.log("%%%%%%%%%%%%%% TS complete.");
        return output;
    }
}

//module.exports.Transforms = Transforms;

//module.exports.formatResultDetails = formatResultDetails;
//module.exports.displayOutput = displayOutput;
