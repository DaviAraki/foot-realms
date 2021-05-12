export default function registerStrength2(G, ctx) {
  const player = G.players[ctx.currentPlayer];
  player.strengthPerTurn2[ctx.turn - 1] = [ctx.turn, player.strength];
}
