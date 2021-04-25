export default function shuffle(G, ctx) {
    G.players[ctx.currentPlayer].deck.sort(() => Math.random() - 0.5);
}