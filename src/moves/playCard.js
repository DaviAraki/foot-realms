import { draw } from '../actions/gameActions'

export default function playCard(G, ctx, cardIndex) {
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
