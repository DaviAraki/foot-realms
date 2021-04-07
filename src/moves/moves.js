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
// function setDesafio(G, ctx) {
//   if (G.offer.offerZone.length > 0) {
//     if (G.offer.turn < 2) {
//       for (let i = 0; i < 2; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     } else if (G.offer.turn < 4) {
//       for (let i = 0; i < 3; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     } else if (G.offer.turn < 6) {
//       for (let i = 0; i < 4; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     } else if (G.offer.turn >= 6) {
//       for (let i = 0; i < 5; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     }
//   }
// }
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
// function shuffle(G, ctx) {
//   G.players[ctx.currentPlayer].deck = ctx.random.Shuffle(G.players[ctx.currentPlayer].deck);
// }
function shuffle(G, ctx) {
    G.players[ctx.currentPlayer].deck.sort(() => Math.random() - 0.5);
}
function shuffleOffer(G) {
    G.offer.deck.sort(() => Math.random() - 0.5);
}
function pass(G, ctx) {
    ctx.events.endPhase();
}

function playCard(G, ctx, cardIndex) {
    if (G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position] === true) {
        if (G.players[ctx.currentPlayer].hand[cardIndex].role === "Player") {
            G.players[ctx.currentPlayer].score =
                G.players[ctx.currentPlayer].score + 2
        } else {
            G.players[ctx.currentPlayer].money =
                G.players[ctx.currentPlayer].money + 2
        }
    } else {
        G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position] = true
        for (let i = 0; i < G.players[ctx.currentPlayer].playZone.length - 1; i++) {
            if (G.players[ctx.currentPlayer].playZone[i].position === G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position] || G.players[ctx.currentPlayer].playZone[i].role === "Player") {
                G.players[ctx.currentPlayer].score =
                    G.players[ctx.currentPlayer].score + 2
            }
            if (G.players[ctx.currentPlayer].playZone[i].position === G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position] || G.players[ctx.currentPlayer].playZone[i].role === "Staff") {
                G.players[ctx.currentPlayer].money =
                    G.players[ctx.currentPlayer].money + 2
            }
        }
    }
    if (G.players[ctx.currentPlayer].hand[cardIndex].role === "Player") {
        if (cardIndex < G.players[ctx.currentPlayer].hand.length) {
            G.players[ctx.currentPlayer].score =
                G.players[ctx.currentPlayer].score +
                G.players[ctx.currentPlayer].hand[cardIndex].chuteira;
            G.players[ctx.currentPlayer].playZone.push(
                G.players[ctx.currentPlayer].hand[cardIndex]
            );
            G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);
        }
    } else if (G.players[ctx.currentPlayer].hand[cardIndex].role === "Staff") {
        G.players[ctx.currentPlayer].money =
            G.players[ctx.currentPlayer].money +
            G.players[ctx.currentPlayer].hand[cardIndex].coin;
        for (
            var i = 0;
            i < G.players[ctx.currentPlayer].hand[cardIndex].cards;
            i++
        ) {
            draw(G, ctx);
        }
        G.players[ctx.currentPlayer].playZone.push(
            G.players[ctx.currentPlayer].hand[cardIndex]
        );
        G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);
    }
}
function cleanUp(G, ctx) {
    while (G.players[ctx.currentPlayer].playZone.length > 0) {
        G.players[ctx.currentPlayer].discardZone.push(
            G.players[ctx.currentPlayer].playZone[0]
        );
        G.players[ctx.currentPlayer].playZone.splice(0, 1);
    }
}
// function discardCard(G, ctx, cardIndex) {
//   G.players[ctx.currentPlayer].discardZone.push(
//     G.players[ctx.currentPlayer].admZone[cardIndex]
//   );
//   G.players[ctx.currentPlayer].admZone.splice(cardIndex, 1);
// }
function buyCard(G, ctx, cardIndex) {
    if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[cardIndex].cost) {
        G.players[ctx.currentPlayer].playZone.push(G.offer.offerZone[cardIndex]);
        G.players[ctx.currentPlayer].money =
            G.players[ctx.currentPlayer].money - G.offer.offerZone[cardIndex].cost;
        G.offer.offerZone.splice(cardIndex, 1);
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
    pass,
    playCard,
    cleanUp,
    buyCard,
    drawHand,
    giveOffer,
}