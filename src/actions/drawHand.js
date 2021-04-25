import draw from "./draw";

export default function drawHand(G, ctx) {
    while (
        G.players[ctx.currentPlayer].hand.length < 5 &&
        (G.players[ctx.currentPlayer].deck.length > 0 ||
            G.players[ctx.currentPlayer].discardZone.length > 0)
    ) {
        draw(G, ctx, 1);
    }
}