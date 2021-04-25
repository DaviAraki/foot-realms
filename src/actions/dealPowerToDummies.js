export default function dealPowerToDummies(G, ctx) {
    if (ctx.turn === 0 ) {
        return
    }
    for (let i = 0; i < G.board.dummies.length; i++) {
        G.board.dummies[i].strength = G.board.dummies[i].strength + Math.floor(Math.random() * 3) + 1
    }
}