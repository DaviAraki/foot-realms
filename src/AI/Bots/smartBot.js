export default function smartBot(G, ctx) {
  let moves = [];
  //moves.push({ move: "pass", args: null });
  if (G.players[ctx.currentPlayer].hand.length > 0) {
    moves.push({ move: 'playCard', args: 0 });
  } else {
    // { move: 'pass', args: null },
    G.board.offerZone.forEach((card, index) => {
      if (
        card.cost <= G.players[ctx.currentPlayer].money &&
        card.powerText !== '' &&
        !card.name.includes('Queen')
      ) {
        moves.push({ move: 'buyCard', args: [index] });
      }
    });
  }
  if (moves.length === 0) {
    moves.push({ move: 'pass', args: null });
  }
  return moves;
}
