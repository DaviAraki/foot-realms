export default function updateStrenghtSchedule(G, ctx) {
    if (ctx.turn === 0 || ctx.turn>28) {
        return
    }
    const teams = [...G.players, ...G.board.dummies];
    const round = Math.floor((ctx.turn - 1) / 4)
    for (let j = 0; j < G.board.schedule[round].length; j++) {
        let match = G.board.schedule[round][j];
        match.a.strength = teams[match.a.id].strength
        match.b.strength = teams[match.b.id].strength
    }
}