export default function cleanUp(G, ctx) {
    G.players[ctx.currentPlayer].strength = 0;
    G.players[ctx.currentPlayer].money= 0;
    while (G.players[ctx.currentPlayer].playZone.length > 0) {
        G.players[ctx.currentPlayer].discardZone.push(
            G.players[ctx.currentPlayer].playZone[0]
        );
        G.players[ctx.currentPlayer].playZone.splice(0, 1);
    }
}
