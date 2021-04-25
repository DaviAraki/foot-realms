import  draw  from '../actions/draw'

export default function playCard(G, ctx, cardIndex) {
     if (cardIndex < G.players[ctx.currentPlayer].hand.length) {
        G.players[ctx.currentPlayer].strength =
            G.players[ctx.currentPlayer].strength +
            G.players[ctx.currentPlayer].hand[cardIndex].chuteira;  
        G.players[ctx.currentPlayer].money =
            G.players[ctx.currentPlayer].money +
            G.players[ctx.currentPlayer].hand[cardIndex].coin;
        for (
            var i = 0;
            i < G.players[ctx.currentPlayer].hand[cardIndex].cards;
            i++
        ) {
            draw(G, ctx);
        }
        G.players[ctx.currentPlayer].playZone.push(
            G.players[ctx.currentPlayer].hand[cardIndex]
        );
        G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);
    }
 }
