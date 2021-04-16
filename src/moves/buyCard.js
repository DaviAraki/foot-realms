export default function buyCard(G, ctx, cardIndex) {
    if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[cardIndex].cost) {
        G.players[ctx.currentPlayer].playZone.push(G.offer.offerZone[cardIndex]);
        G.players[ctx.currentPlayer].money =
            G.players[ctx.currentPlayer].money - G.offer.offerZone[cardIndex].cost;
        G.offer.offerZone.splice(cardIndex, 1);
    }
}
