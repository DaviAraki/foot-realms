function draw(G, ctx) {
    if (G.players[ctx.currentPlayer].deck.length === 0) {
        G.players[ctx.currentPlayer].deck =
            G.players[ctx.currentPlayer].discardZone;
        G.players[ctx.currentPlayer].discardZone = [];
        shuffle(G, ctx);
    }
    if (G.players[ctx.currentPlayer].deck.length > 0) {
        G.players[ctx.currentPlayer].hand.push(
            G.players[ctx.currentPlayer].deck.shift()
        );
    }
}
// function setDesafio(G, ctx) {
//     if (ctx.turn < 7) {
//         G.board.desafio = G.board.dummies[ctx.turn].strength;
//     }
// }

function defineWinner(G, ctx) {
    if (G.players[ctx.currentPlayer].strength > G.board.desafio) {
        G.players[ctx.currentPlayer].points =
            G.players[ctx.currentPlayer].points + 3;
    } else if (G.players[ctx.currentPlayer].strength === G.board.desafio) {
        G.players[ctx.currentPlayer].points =
            G.players[ctx.currentPlayer].points + 1;
    }
    G.players[ctx.currentPlayer].strength = 0;
    G.board.desafio = 0;
}

function shuffle(G, ctx) {
    G.players[ctx.currentPlayer].deck.sort(() => Math.random() - 0.5);
}
function shuffleOffer(G) {
    G.board.deck.sort(() => Math.random() - 0.5);
}



function cleanUp(G, ctx) {
    console.log("CLEAN UP")
    G.players[ctx.currentPlayer].strength = 0;
    while (G.players[ctx.currentPlayer].playZone.length > 0) {
        console.log("CLEAN UP", G.players[ctx.currentPlayer].playZone.length)
        G.players[ctx.currentPlayer].discardZone.push(
            G.players[ctx.currentPlayer].playZone[0]
        );
        G.players[ctx.currentPlayer].playZone.splice(0, 1);
    }
    console.log("CLEAN UP END")
}


function drawHand(G, ctx) {
    console.log("DRAW ")
    while (
        G.players[ctx.currentPlayer].hand.length < 5 &&
        (G.players[ctx.currentPlayer].deck.length > 0 ||
            G.players[ctx.currentPlayer].discardZone.length > 0)
    ) {
        draw(G, ctx, 1);
    }
    console.log("DRAW END")
}
function giveOffer(G, ctx) {
    G.board.offerZone.splice(0, 2);
    while (G.board.offerZone.length < 5 && G.board.deck.length > 0 ) { 
            G.board.offerZone.push(G.board.deck.pop());          
    }
}
function dealPowerToDummies(G, ctx) {
    console.log("DEALPOWERTO DUMMIES",ctx.turn)
    if (ctx.turn === 0 ) {
        return
    }
    const round = Math.floor((ctx.turn - 1) / 4)
    for (let i = 0; i < G.board.dummies.length; i++) {
        G.board.dummies[i].strength = G.board.dummies[i].strength + Math.floor(Math.random() * 3) + 1
    }
    console.log("TESTE", round, ctx.turn)
}
function updateStrenghtSchedule(G, ctx) {
    console.log("UPDATESTRENGHTSCHEDULE",ctx.turn)
    if (ctx.turn === 0 || ctx.turn>27) {
        return
    }
    const teams = [...G.players, ...G.board.dummies];
    const round = Math.floor((ctx.turn - 1) / 4)
    console.log("TESTE", round, ctx.turn)
    for (let j = 0; j < G.board.schedule[round].length; j++) {
        let match = G.board.schedule[round][j];
        match.a.strength = teams[match.a.id].strength
        match.b.strength = teams[match.b.id].strength
    }
}
function addQuarterGoals(G, ctx) {
    console.log("ADGOAL",ctx.turn)
    const teams = [...G.players, ...G.board.dummies];
    const round = Math.floor((ctx.turn - 1) / 4)
    console.log("TESTE", round, ctx.turn)
    for (let i = 0; i < G.board.schedule[round].length; i++) {
        let match = G.board.schedule[round][i];
        match.a.goals = (match.a.goals === '-') ? 0 : match.a.goals;
        match.b.goals = (match.b.goals === '-') ? 0 : match.b.goals;
        if (teams[match.a.id].strength > teams[match.b.id].strength) {
            match.a.goals = match.a.goals + 1
        }
        else if (teams[match.a.id].strength < teams[match.b.id].strength) {
            match.b.goals = match.b.goals + 1
        }
    };
    console.log("FINAL GOAL", round, ctx.turn)
}
function setRoundWinners(G, ctx) {
    console.log("SetROUNDWINNERS",ctx.turn)
    const teams = [...G.players, ...G.board.dummies];
    const round = Math.floor((ctx.turn - 1) / 4)
    console.log("TESTE", round, ctx.turn)
    for (let i = 0; i < G.board.schedule[round].length; i++) {
        let match = G.board.schedule[round][i];
        if (teams[match.a.id].strength > teams[match.b.id].strength) {
            teams[match.a.id].points = teams[match.a.id].points + 3
        }
        else if (teams[match.a.id].strength < teams[match.b.id].strength) {
            teams[match.b.id].points = teams[match.b.id].points + 3
        }
        else {
            teams[match.b.id].points = teams[match.b.id].points + 1
            teams[match.a.id].points = teams[match.a.id].points + 1
        }
    }
    G.players[ctx.currentPlayer].strength = 0;
}


export {
    draw,
    defineWinner,
    shuffle,
    shuffleOffer,
    cleanUp,
    drawHand,
    giveOffer,
    dealPowerToDummies ,
    updateStrenghtSchedule,
    addQuarterGoals ,
    setRoundWinners
}