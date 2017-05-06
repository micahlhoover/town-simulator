// ------------------ utilities ----------------------------

guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// ------------------ establishments -----------------------
createWheatField = function() {
    return {
        "ID": guid(),
        "Name":"Wheat Field",
        "Color":"Blue",
        "Cost":1,
        "ActivationNumbers": [ 1 ],
        "Type":"Primary Industry",
        "SubType":"Wheat",
        "Yield":1
    };
};
createRanch = function() {
    return {
        "ID": guid(),
        "Name":"Ranch",
        "Color":"Blue",
        "Cost":1,
        "ActivationNumbers": [ 2 ],
        "Type":"Primary Industry",
        "SubType":"Cow",
        "Yield":1
    };
};
createBakery = function() {
    return {
        "ID": guid(),
        "Name":"Bakery",
        "Color":"Green",
        "Cost":1,
        "ActivationNumbers": [ 2,3 ],
        "Type":"Secondary Industry",
        "SubType":"Shop",
        "Yield":1
    };
};
createCafe = function() {
    return {
        "ID": guid(),
        "Name":"Cafe",
        "Color":"Red",
        "Cost":2,
        "ActivationNumbers": [ 3 ],
        "Type":"Restaurants",
        "SubType":"Cup",
        "Yield":1
    };
};
createConvenienceStore = function() {
    return {
        "ID": guid(),
        "Name":"Convenience Store",
        "Color":"Green",
        "Cost":2,
        "ActivationNumbers": [ 4 ],
        "Type":"Secondary Industry",
        "SubType":"Shop",
        "Yield":3
    };
};
createForest = function() {
    return {
        "ID": guid(),
        "Name":"Forest",
        "Color":"Blue",
        "Cost":3,
        "ActivationNumbers": [ 5 ],
        "Type":"Primary Industry",
        "SubType":"Cog",
        "Yield":1
    };
};
createStadium = function() {
    return {
        "ID": guid(),
        "Name":"Stadium",
        "Color":"Purple",
        "Cost":6,
        "ActivationNumbers": [ 6 ],
        "Type":"Major Establishment",
        "SubType":"Tower",
        "Yield":2,
        "YieldPer":"Player"
    };
};
createTVStation = function() {
    return {
        "ID": guid(),
        "Name":"TV Station",
        "Color":"Purple",
        "Cost":7,
        "ActivationNumbers": [ 6 ],
        "Type":"Major Establishment",
        "SubType":"Tower",
        "Yield":5
    };
};
createBusinessCenter = function() {
    return {
        "ID": guid(),
        "Name":"Business Center",
        "Color":"Purple",
        "Cost":7,
        "ActivationNumbers": [ 6 ],
        "Type":"Major Establishment",
        "SubType":"Tower", 
        "Yield":5
    };
};
createCheeseFactory = function() {
    return {
        "ID": guid(),
        "Name":"Cheese Factory",
        "Color":"Green",
        "Cost":5,
        "ActivationNumbers": [ 7 ],
        "Type":"Secondary Industry",
        "SubType":"Factory",
        "Yield":3,
        "YieldPer":"Cow",
    };
};
createFurnitureFactory = function() {
    return {
        "ID": guid(),
        "Name":"Furniture Factory",
        "Color":"Green",
        "Cost":3,
        "ActivationNumbers": [ 8 ],
        "Type":"Secondary Industry",
        "SubType":"Factory",
        "Yield":3,
        "YieldPer":"Cog",
    };
};
createMine = function() {
    return {
        "ID": guid(),
        "Name":"Mine",
        "Color":"Blue",
        "Cost":6,
        "ActivationNumbers": [ 9 ],
        "Type":"Primary Industry",
        "SubType":"Cog",
        "Yield":5
    };
};
createFamilyRestaurant = function() {
    return {
        "ID": guid(),
        "Name":"Family Restaurant",
        "Color":"Red",
        "Cost":3,
        "ActivationNumbers": [ 9, 10 ],
        "Type":"Restaurants",
        "SubType":"Cup",
        "Yield":2
    };
};
createAppleOrchard = function() {
    return {
        "ID": guid(),
        "Name":"AppleOrchard",
        "Color":"Blue",
        "Cost":3,
        "ActivationNumbers": [ 10 ],
        "Type":"Primary Industry",
        "SubType":"Wheat",
        "Yield":3
    };
};
createFruitAndVegetableMarket = function() {
    return {
        "ID": guid(),
        "Name":"Fruit and Vegetable Market",
        "Color":"Green",
        "Cost":2,
        "ActivationNumbers": [ 11, 12 ],
        "Type":"Secondary Industry",
        "SubType":"Fruit",
        "Yield":2,
        "YieldPer":"Wheat",
    };
};

createEstablishmentRepeat = function( container, method, count) {
    for( var i = 0; i < count; i++) {
        container.push(method());
    }
    //return container;
}

createEstablishments = function() {
    establishments = [];
    createEstablishmentRepeat(establishments, createWheatField, 6);
    createEstablishmentRepeat(establishments, createRanch, 6);
    createEstablishmentRepeat(establishments, createBakery, 6);
    createEstablishmentRepeat(establishments, createCafe, 6);
    createEstablishmentRepeat(establishments, createConvenienceStore, 6);
    createEstablishmentRepeat(establishments, createForest, 6);
    createEstablishmentRepeat(establishments, createStadium, 4);
    createEstablishmentRepeat(establishments, createTVStation, 4);
    createEstablishmentRepeat(establishments, createCheeseFactory, 6);
    createEstablishmentRepeat(establishments, createFurnitureFactory, 6);
    createEstablishmentRepeat(establishments, createMine, 6);
    createEstablishmentRepeat(establishments, createFamilyRestaurant, 6);
    createEstablishmentRepeat(establishments, createAppleOrchard, 6);
    createEstablishmentRepeat(establishments, createFruitAndVegetableMarket, 6);

    return establishments;
}

// ------------------ player -----------------------
createPlayer = function(id, name, colorStyle, targetExpensive) {
    console.log("targetExpensive: " + targetExpensive)
    if (!colorStyle) {
        colorStyle = "Blue";
    }

    var player = {};
    player.money = 3;
    player.name = name;
    player.id = id;
    player.colorStyle = colorStyle;     // e.g. "Blue"
    player.targetExpensive = targetExpensive;   //= ((id % 2) === 1);
    console.log("creating player: " + player.name);
    player.landmarks = [
        {
            "Name":"Radio Tower",
            "Cost":22,
            "Active":false
        },
        {
            "Name":"Shopping Mall",
            "Cost":10,
            "Active":false
        },
        {
            "Name":"Train Station",
            "Cost":4,
            "Active":false
        },
        {
            "Name":"Amusement Park",
            "Cost":16,
            "Active":false
        }
    ];
    player.establishments = [];
    player.establishments.push(createWheatField());
    player.establishments.push(createBakery());

    return player;
}

hasLandMark = function(player, name) {
    //console.log("checking landmarks");
//    console.log("player " + player.id + " landmarks: " + JSON.stringify(player.landmarks));
    for( var i = 0; i < player.landmarks.length; i++) {
        var landmark = player.landmarks[i];
        //console.log("player " + player.Name + " landmarks: " + JSON.stringify(player.landmarks));
//        console.log("Is " + landmark.Name + " === " + name + " ???");
        if (landmark.Name === name) {
            if (landmark.Active) {
                return true;
            }
        }
    }
    return false;
}

getRollOneDie = function() {
    var min = Math.ceil(1);
    var max = Math.floor(6);
    return Math.floor(Math.random() * (max - min) + min);
}

getYieldPer = function(yieldAmount, yieldPer, establishments) {
    var runningTotal = 0;
    console.log("------------getting yield per: " + yieldPer);
    console.log("yieldAmount = " + yieldAmount);
    for( var e = 0; e < establishments.length; e++) {
        var establishment = establishments[e];
        if (establishment.SubType === yieldPer) {
            console.log("------------adding for : " + establishment.SubType);
            runningTotal += yieldAmount;
        }
    }
    console.log("------------result: " + runningTotal);
    return runningTotal;
}

howManySubtypesPlayerOwns = function(player, SubType) {
    var count = 0;
    for( var i = 0; i < player.establishments.length; i++ ) {
        //console.log("checking establishment: " + i);
        if (player.establishments[i].SubType === SubType) {
            count++;
        }
    }
    return count;
}

moneyForThisRollThisPlayer = function(rollNumber, thisPlayer, playerWhoRolls) {
    var moneyThisPlayer = 0;
    for(var e = 0; e < thisPlayer.establishments.length; e++) {
        var establishment = thisPlayer.establishments[e];
        for(var hi = 0; hi < establishment.ActivationNumbers.length; hi++) {
            if (establishment.ActivationNumbers[hi] === rollNumber) {
                // this card is a hit !!
                if (establishment.Type === "Primary Industry") {
                    moneyThisPlayer += establishment.Yield;
                } else if (establishment.Type === "Secondary Industry") {
                    if (thisPlayer === playerWhoRolls) {
                        var yieldAmount = establishment.Yield;
                        if (establishment.Name === "Cheese Factory") {
                            console.log("cheese factory yield tabulation");
                            var cowCount = howManySubtypesPlayerOwns(playerWhoRolls, "Cow");
                            console.log("cow count: " + cowCount);
                            yieldAmount = cowCount * establishment.Yield;
                        } else if (establishment.Name === "Furniture Factory") {
                            console.log("furniture factory yield tabulation");
                            var cogCount = howManySubtypesPlayerOwns(playerWhoRolls, "Cog");
                            console.log("cog count: " + cogCount);
                            yieldAmount = cogCount * establishment.Yield;
                        }

                        if ((establishment.SubType === "Cup") && (hasLandMark(thisPlayer, "Shopping Mall"))) {
                            console.log("}}}}}}}}} this guy has a shopping mall ... 1 bonus");
                            yieldAmount += 1;
                        }
                        console.log("----------------- found a secondary industry this player");
                        if(!establishment.YieldPer) {
                            console.log("this establishment has no yield per: " + establishment.Name);
                            moneyThisPlayer += yieldAmount;
                        } else {
                            //YieldPer
                            console.log("+++++++++++++++ found a yieldper");
                            console.log("this establishment has a yield per: " + establishment.Name);
                            console.log("yield amount is: " + yieldAmount);
                            moneyThisPlayer += getYieldPer(yieldAmount, establishment.YieldPer, thisPlayer.establishments);
                        }
                        // TODO: figure out why never finds yieldper ...
                    }
                }
            }
        }
    }
    return moneyThisPlayer;
}

rollDiceAndAllocate = function(gameObj, playerWhoRolls, fromDouble) {

    // if playerWhoRolls rolled a red card number, capture info here
    var payoutAmounts = [];
    var doneRolling = false;
    var thisPlayerMustPay = false;
    var radioTowerUsed = false;

    while(!doneRolling) {
        var isDouble = false;
        var rollNumber = getRollOneDie();
        if (hasLandMark(playerWhoRolls, "Train Station")) {
            console.log("TTTTTTTTTTTtt  Has train station ... second roll");
            var secondRoll = getRollOneDie();
            if ((rollNumber === secondRoll) && (hasLandMark(playerWhoRolls, "Amusement Park")) && !fromDouble) {
                isDouble = true;
            }
            rollNumber += secondRoll;
        } else {
            console.log("NNNNNNNNNNNNNN No train station")
        }
        console.log("roll: " + rollNumber + " for player " + playerWhoRolls.name + " and has $ " + playerWhoRolls.money);

        // iterate through all the players to process red and purple
        for(var pi = 0; pi < gameObj.players.length; pi++) {
            // iterate through all their establishments
            for(var e = 0; e < gameObj.players[pi].establishments.length; e++) {
                //console.log("this player has $ " + gameObj.players[pi].money );
                var establishment = gameObj.players[pi].establishments[e];
                for(var hi = 0; hi < establishment.ActivationNumbers.length; hi++) {
                    if (establishment.ActivationNumbers[hi] === rollNumber) {
                        // this card is a hit !!
                        if (establishment.Type === "Restaurants") {
                            // TODO: handle restaurants
                            if (gameObj.players[pi].name !== playerWhoRolls.name) {
                                thisPlayerMustPay = true;
                                console.log("@@@@@@@@@@@ this player gets $ " + establishment.Yield + " from the person who rolls: " + gameObj.players[pi].name);
                                var amountYield = establishment.Yield;
                                if ((establishment.SubType === "Cup") && (hasLandMark(gameObj.players[pi], "Shopping Mall"))) {
                                    console.log("{{{{{{{{{{{{ this guy has a shopping mall ... 1 bonus");
                                    amountYield += 1;
                                }
                                payoutAmounts.push( { toPlayer: gameObj.players[pi].id, fromPlayer: playerWhoRolls.id, amount: amountYield});
                            }
                        } else {
                            // TODO: handle purple
                            if (establishment.Name === "Stadium") {
                                // get 2 from each (other) player
                                for(var p2 = 0; p2 < gameObj.players.length; p2++) {
                                    var p2player = gameObj.players[p2];
                                    if (p2player.id !== playerWhoRolls.id) {
                                        console.log("|||||||||| this player " + playerWhoRolls.id + " gets $ " + establishment.Yield + " from: " + gameObj.players[pi].name);
                                        payoutAmounts.push( { toPlayer: playerWhoRolls.id, fromPlayer: p2player.id, amount: establishment.Yield});
                                    }
                                }
                            } else if (establishment.Name === "Business Center") {
                                // switch establishments (TODO: hone in on the most advantageous thing to take instead of the last one)
                                for(var pt = 0; pt < gameObj.players.length; pt++) {
                                    console.log("!!!!!!!!!!! switching last establishment from " + gameObj.players[pt].name);
                                    if ((pt !== playerWhoRolls.id) && (gameObj.players[pt].establishments.length > 0)) {
                                        console.log("!!!!!!!!!!! switching last establishment from " + gameObj.players[pt].name);

                                        var stolenEstablishment = gameObj.players[pt].establishments.splice(gameObj.players[pt].establishments.length -1, 1);

                                        playerWhoRolls.establishments.push(stolenEstablishment);
                                        break;
                                    }
                                }
                            } else if (establishment.Name === "TV Station") {
                                // look for player with the most money and take 5
                                var mostMoney = -1;
                                var richestPlayerID = -1;
                                console.log("+=+=+=+=+=+=+=+=+=+=+= TV station!");
                                for(var p2 = 0; p2 < gameObj.players.length; p2++) {
                                    console.log("is player " + p2 + " the richest ?");
                                    var p2player = gameObj.players[p2];
                                    console.log("vvvvvvvvvvvvvv " + JSON.stringify(p2player));
                                    console.log("$ " + p2player.money);
                                    if (p2player.id !== playerWhoRolls.id) {
                                        if (p2player.money > mostMoney) {
                                            mostMoney = p2player.money;
                                            richestPlayerID = p2player.id;
                                        }
                                    }
                                }
                                if (mostMoney > establishment.Yield) {
                                    mostMoney = establishment.Yield;
                                }
                                console.log("********* this player " + playerWhoRolls.id + " gets $ " + mostMoney + " from person : " + richestPlayerID);
                                if (richestPlayerID > 0) {
                                    payoutAmounts.push( { toPlayer: playerWhoRolls.id, fromPlayer: richestPlayerID, amount: mostMoney});
                                }
                            }
                        }
                    }
                }
            }
        }

        // TODO: roll over if you have the roll over landmark if roll return is 0 or negative
        console.log("this player must pay: " + thisPlayerMustPay + " and he gets: " + moneyForThisRollThisPlayer(rollNumber, playerWhoRolls, playerWhoRolls));
        if (!radioTowerUsed && hasLandMark(playerWhoRolls, "Radio Tower") && (thisPlayerMustPay || (moneyForThisRollThisPlayer(rollNumber, playerWhoRolls, playerWhoRolls) <= 2))) {
            doneRolling = false;
            radioTowerUsed = true;
            console.log("not done rolling!");
        } else {
            doneRolling = true;
            console.log("done rolling");
        }
    }

    // payout the payouts
    var payoutAmount = null;
    while(payoutAmounts.length > 0) {
        payoutAmount = payoutAmounts.pop();
        for(var p = 0; p < gameObj.players.length; p++) {
            if (payoutAmount.toPlayer === gameObj.players[p].id) {
                var checkedAmount = payoutAmount.amount;
                if (checkedAmount > playerWhoRolls.money) {
                    checkedAmount = playerWhoRolls.money;
                }
                if (checkedAmount < 0) {
                    checkedAmount = 0;
                }
                if (isNaN(checkedAmount)) {
                    throw "bad amount";
                }
                console.log("SSSSSSSSSSSSSS  Paying out $" + checkedAmount + " from player " + payoutAmount.toPlayer
                    + " to player " + payoutAmount.toPlayer);
                gameObj.players[payoutAmount.fromPlayer].money -= checkedAmount;
                gameObj.players[payoutAmount.toPlayer].money += checkedAmount;
                
            }
        }
    }

    // iterate through all the players to process green and blue
    for(var pi = 0; pi < gameObj.players.length; pi++) {
        // iterate through all their establishments
        var addThis = moneyForThisRollThisPlayer(rollNumber, gameObj.players[pi], playerWhoRolls);
        if (isNaN(addThis)) {
            throw "bad amount";
        }
        gameObj.players[pi].money += addThis;

    }
    console.log("Was it a double? " + isDouble);
    return isDouble;
}

createDesiredCardList = function(gameObj, playerWhoRolls) {
    var tempList = [];  
    //console.log("targetExpensive " + playerWhoRolls.targetExpensive);
    if (playerWhoRolls.targetExpensive === true) {
        // go for most expensive       
        for(var i = 0; i < gameObj.establishments.length;i++) {
            var temp = {};
            temp.ID = gameObj.establishments[i].ID;
            temp.cost = gameObj.establishments[i].Cost;
            temp.color = (gameObj.establishments[i].Color === playerWhoRolls.colorStyle) ? 7 : 2;
            temp.Color = gameObj.establishments[i].Color[0];
            tempList.push(temp);
        }
        tempList.sort(function(a,b){
            return (a.cost - b.cost) + (a.color - b.color);
        });
        //console.log("********* expensive player most desired item cost:" + tempList[0].cost);
    } else {
        // go for cheapest 
        for(var i = 0; i < gameObj.establishments.length;i++) {
            var temp = {};
            temp.ID = gameObj.establishments[i].ID;
            temp.cost = gameObj.establishments[i].Cost;
            temp.color = (gameObj.establishments[i].Color === playerWhoRolls.colorStyle) ? 7 : 2;
            temp.Color = gameObj.establishments[i].Color[0];
            tempList.push(temp);
        }
        tempList.sort(function(a,b){
            return (a.cost - b.cost) + (a.color - b.color);
        });
        tempList.reverse();
        //console.log("********* cheap player most desired item cost:" + tempList[0].cost);
    }
    // console.log("TTTTTTTTTTT templist:");
    // for(var i = 0; i < tempList.length; i++) {
    //     console.log( tempList[i].color + "-" + tempList[i].Color + "-" + playerWhoRolls.colorStyle[0] + " ");
    // }
    //throw;
    return tempList;
}

makePurchases = function(gameObj, playerWhoRolls) {
  //  console.log("player " + playerWhoRolls.name + " making purchases with $" + playerWhoRolls.money);
  //  console.log("landmark count: " + playerWhoRolls.landmarks.length);
    // check to see if any landmarks can be purchased
    for( var i = 0; i < playerWhoRolls.landmarks.length; i++) {
        
        var landmark = playerWhoRolls.landmarks[i];
  //      console.log("checking to buy landmark: " + landmark.Name);
        if (!landmark.Active) {
  //          console.log("can buy this one landmark");
            if (landmark.Cost <= playerWhoRolls.money) {
  //              console.log("player has enough money");
                playerWhoRolls.money -= landmark.Cost;
                landmark.Active = true;
                console.log("bought a landmark: " + landmark.Name);
                return;     // can only buy 1 thing
            }
        }
    }

    // nothing purchased yet ... check establishments
    //console.log("establishment count: " + gameObj.establishments.length);
    var desiredCardList = createDesiredCardList(gameObj, playerWhoRolls);
    var purchasedCard;
    for(var c = 0; c < desiredCardList.length; c++) {
        if (desiredCardList[c].cost < playerWhoRolls.money) {
            purchasedCard = desiredCardList[c];
        }
    }
    if (purchasedCard) {
        for( var e = 0; e < gameObj.establishments.length; e++) {
            if (gameObj.establishments[e].ID == purchasedCard.ID) {
                playerWhoRolls.money -= gameObj.establishments[e].Cost;
                playerWhoRolls.establishments.push(gameObj.establishments[e]);
                console.log("bought an establishment: " + gameObj.establishments[e].Name + " and spender = " + playerWhoRolls.targetExpensive);
                gameObj.establishments.splice(e, 1);            
                return;
            }
        }
    }

    // can't buy anything if here
    //console.log("can't buy anything!");
}

checkForWin = function(gameObj, playerWhoRolls) {
    //console.log("checking for win from player whose turn it is ...");
    var activeLMCount = 0;
    console.log("FFFFFFFFFFFFFFF    player landmarks: " + JSON.stringify(playerWhoRolls.landmarks));
    for( var l = 0; l < playerWhoRolls.landmarks.length; l++) {
        var landmark = playerWhoRolls.landmarks[l];
        if (landmark.Active == false) {
            return false;
        } else {
            activeLMCount++;
        }
    }
    return true;
}

runGame = function(playerCount, players) {
    console.log("creating game ...");

    var gameObj = {};
    gameObj.players = [];
    //console.log("total players:" + players.length);

    for( var i = 0; i < playerCount; i++) {
        if (players && (players.length >= i)) {
            console.log("spendingStyle: " + players[i].spendingStyle);
            gameObj.players.push(createPlayer(i, i, players[i].colorStyle, (players[i].spendingStyle === "Aggressive")));
        } else {
            console.log("spendingStyle: " + (i % 2 === 0));
            gameObj.players.push(createPlayer(i, i, "Blue", (i % 2 === 0)));
        }
    }

    gameObj.establishments = createEstablishments();

    gameObj.rounds = 0;
    done = false;

    while(!done) {
        for( var i = 0; i < gameObj.players.length; i++) {
            //console.log("player's turn: " + gameObj.players[i].name);
            //gameObj.players[i].money += Math.floor((Math.random() * 10) + 1);
            var rolledDouble = rollDiceAndAllocate(gameObj, gameObj.players[i], false);
            makePurchases(gameObj, gameObj.players[i]);
            if (rolledDouble) {
                // let them go again if they got a double and have an amusement park
                console.log("AAAAAAAAAAAA   player " + gameObj.players[i].name + " is going again");
                rollDiceAndAllocate(gameObj, gameObj.players[i], true);
                makePurchases(gameObj, gameObj.players[i]);
            }
            var won = checkForWin(gameObj, gameObj.players[i]);

            if ( won ) {
                console.log("Found a winner!");
                done = true;
                break;
            }
        }
        gameObj.rounds++;
    }
    //return this;
    return gameObj;
}

module.exports.runGame = runGame;