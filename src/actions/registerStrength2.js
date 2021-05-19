export default function registerStrength2(G, ctx) {
  const player = G.players[ctx.currentPlayer];
  const dummies = G.board.dummies;
  player.strengthPerTurn2[ctx.turn - 1] = [ctx.turn, player.strength];
  for (let i = 0; i < G.board.dummies.length; i++) {
    dummies[i].strengthPerTurn[ctx.turn - 1] = [ctx.turn, dummies[i].strength];
  }
}
