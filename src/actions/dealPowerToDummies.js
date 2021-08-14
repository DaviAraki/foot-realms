export default function dealPowerToDummies(G, ctx) {
  const dummies = G.board.dummies;
  if (ctx.turn === 0) {
    return;
  }
  for (let i = 0; i < G.board.dummies.length; i++) {
    dummies[i].strength =
      dummies[i].strength + Math.floor(Math.random() * 3) + 3;
  }
}

