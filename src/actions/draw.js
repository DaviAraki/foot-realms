import shuffle from './shuffle'

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
export default draw