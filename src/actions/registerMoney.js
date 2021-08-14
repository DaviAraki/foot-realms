export default function registerMoney(G, ctx) {
  const player = G.players[ctx.currentPlayer];
  player.moneyPerTurn[ctx.turn - 1] = [ctx.turn, player.money];
}
