export default function cleanUp(G, ctx) {
  const player = G.players[ctx.currentPlayer];
  player.strength = 0;
  player.money = 0;
  while (player.playZone.length > 0) {
    player.discardZone.unshift(player.playZone[0]);
    player.playZone.splice(0, 1);
  }
  while (player.hand.length > 0) {
    player.discardZone.unshift(player.hand.shift());
  }
}
