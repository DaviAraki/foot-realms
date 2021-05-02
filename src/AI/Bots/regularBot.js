export default function regularBot(G, ctx) {
  let moves = [];
  //moves.push({ move: "pass", args: null });
  if (G.players[ctx.currentPlayer].hand.length > 0) {
    moves.push({ move: "playCard", args: [0] });
  } else {
    moves = [
      { move: "pass", args: null },
      ...G.board.offerZone
        .filter(
          (card, index) => card.cost <= G.players[ctx.currentPlayer].money
        )
        .map((card, index) => ({
          move: "buyCard",
          args: [index],
        })),
    ];
  }

  return moves;
}
