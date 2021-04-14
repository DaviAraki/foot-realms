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
function setDesafio(G, ctx) {
    G.offer.desafio = G.offer.turn * 2;
}

function defineWinner(G, ctx) {
    if (G.players[ctx.currentPlayer].score > G.offer.desafio) {
        G.players[ctx.currentPlayer].points =
            G.players[ctx.currentPlayer].points + 3;
    } else if (G.players[ctx.currentPlayer].score === G.offer.desafio) {
        G.players[ctx.currentPlayer].points =
            G.players[ctx.currentPlayer].points + 1;
    }
    G.players[ctx.currentPlayer].score = 0;
    G.offer.desafio = 0;
}

function shuffle(G, ctx) {
    G.players[ctx.currentPlayer].deck.sort(() => Math.random() - 0.5);
}
function shuffleOffer(G) {
    G.offer.deck.sort(() => Math.random() - 0.5);
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
    G.offer.offerZone.splice(0, 2);
    while (G.offer.offerZone.length < 5) {
        if (G.offer.deck.length > 0) {
            G.offer.offerZone.push(G.offer.deck.pop());
        }
    }
}


export {
    draw,
    setDesafio,
    defineWinner,
    shuffle,
    shuffleOffer,
    cleanUp,
    drawHand,
    giveOffer,
}