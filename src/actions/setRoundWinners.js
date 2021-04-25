export default function setRoundWinners(G, ctx) {
    const teams = [...G.players, ...G.board.dummies];
    const round = Math.floor((ctx.turn - 1) / 4)
    for (let i = 0; i < G.board.schedule[round].length; i++) {
        let match = G.board.schedule[round][i];
        if (teams[match.a.id].goals > teams[match.b.id].goals) {
            teams[match.a.id].points = teams[match.a.id].points + 3
        }
        else if (teams[match.a.id].goals < teams[match.b.id].goals) {
            teams[match.b.id].points = teams[match.b.id].points + 3
        }
        else {
            teams[match.b.id].points = teams[match.b.id].points + 1
            teams[match.a.id].points = teams[match.a.id].points + 1
        }
    }
    G.players[ctx.currentPlayer].strength = 0;
}