export default function registerPoints(G, ctx) {
  const player = G.players[ctx.currentPlayer];
  const dummies = G.board.dummies;
  player.pointsPerTurn[ctx.turn - 1] = [ctx.turn, player.points];
  for (let i = 0; i < G.board.dummies.length; i++) {
    dummies[i].pointsPerTurn[ctx.turn - 1] = [ctx.turn, dummies[i].points];
  }
}
