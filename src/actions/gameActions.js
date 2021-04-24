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
//     if (G.board.turn < 7) {
//         G.board.desafio = G.board.dummies[G.board.turn].strength;
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
    while (G.players[ctx.currentPlayer].playZone.length > 0) {
        G.players[ctx.currentPlayer].discardZone.push(
            G.players[ctx.currentPlayer].playZone[0]
        );
        G.players[ctx.currentPlayer].playZone.splice(0, 1);
    }
}


function drawHand(G, ctx) {
    while (
        G.players[ctx.currentPlayer].hand.length < 5 &&
        (G.players[ctx.currentPlayer].deck.length > 0 ||
            G.players[ctx.currentPlayer].discardZone.length > 0)
    ) {
        draw(G, ctx, 1);
    }
}
function giveOffer(G, ctx) {
    G.board.offerZone.splice(0, 2);
    while (G.board.offerZone.length < 5) {
        if (G.board.deck.length > 0) {
            G.board.offerZone.push(G.board.deck.pop());
        }
    }
}
function dealPower(G) {
    for (let i = 0; i < G.board.dummies.length; i++) {
        G.board.dummies[i].strength = G.board.dummies[i].strength + Math.floor(Math.random() * 3) + 1
    }
}
function setMatchWinners(G, ctx) {
    const teams = [G.players[0], ...G.board.dummies];
    for (let i = 0; i < G.board.schedule[G.board.turn].length; i++) {
        let match = G.board.schedule[G.board.turn][i]
        if (teams[match[0]].strength > teams[match[1]].strength) {
            teams[match[0]].points = teams[match[0]].points + 3
        }
        else if (teams[match[0]].strength < teams[match[1]].strength) {
            teams[match[1]].points = teams[match[1]].points + 3
        }
        else {
            teams[match[1]].points = teams[match[1]].points + 1
            teams[match[0]].points = teams[match[0]].points + 1
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
    dealPower,
    setMatchWinners
}