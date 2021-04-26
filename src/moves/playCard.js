import draw from "../actions/draw";

export default function playCard(G, ctx, cardIndex) {
  if (cardIndex < G.players[ctx.currentPlayer].hand.length) {
    const card = G.players[ctx.currentPlayer].hand[cardIndex];

    G.players[ctx.currentPlayer].playZone.push(card);
    G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);

    G.players[ctx.currentPlayer].strength += card.chuteira;
    G.players[ctx.currentPlayer].money += card.coin;

    for (var i = 0; i < card.cards; i++) {
      draw(G, ctx);
    }
    if (card.power) {
      card.power(G, ctx);
    }
  }
}
