export default function defineWinner(G, ctx) {
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