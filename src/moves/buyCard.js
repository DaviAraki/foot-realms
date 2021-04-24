export default function buyCard(G, ctx, cardIndex) {
    if (G.players[ctx.currentPlayer].money >= G.board.offerZone[cardIndex].cost) {
        G.players[ctx.currentPlayer].playZone.push(G.board.offerZone[cardIndex]);
        G.players[ctx.currentPlayer].money =
            G.players[ctx.currentPlayer].money - G.board.offerZone[cardIndex].cost;
        G.board.offerZone.splice(cardIndex, 1);
    }
}