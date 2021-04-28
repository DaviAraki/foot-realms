export default function registerStrength(G, ctx) {
  const player = G.players[ctx.currentPlayer];
  player.strengthPerTurn[ctx.turn] = player.strength;
}
