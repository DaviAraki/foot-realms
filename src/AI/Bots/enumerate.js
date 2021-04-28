export default function enumerate(G, ctx) {
  let moves = [];
  moves.push({ move: "pass", args: null });
  for (let i = 0; i < G.offer.offerZone.length; i++) {
    if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[i].cost) {
      moves.push({ move: "buyCard", args: [i] });
    }
  }
  for (let i = 0; i < G.players[ctx.currentPlayer].hand.length; i++) {
    moves.push({ move: "playCard", args: [i] });
  }
  return moves;
}
