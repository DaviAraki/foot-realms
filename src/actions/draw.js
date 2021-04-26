import shuffle from "./shuffle";

function draw(G, ctx) {
  if (G.players[ctx.currentPlayer].deck.length === 0) {
    G.players[ctx.currentPlayer].deck =
      G.players[ctx.currentPlayer].discardZone;
    G.players[ctx.currentPlayer].discardZone = [];
    shuffle(G, ctx);
  }
  if (G.players[ctx.currentPlayer].deck.length > 0) {
    const drawnCard = G.players[ctx.currentPlayer].deck.shift();
    G.players[ctx.currentPlayer].hand.push(drawnCard);
    if (drawnCard.onDraw) {
      drawnCard.onDraw(G, ctx);
      console.log("CARTA COMPRADA COM PODER");
    }
  }
}
export default draw;
