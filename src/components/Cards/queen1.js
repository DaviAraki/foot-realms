import scorePlayerGoal from "../../actions/scorePlayerGoal";
import basicCard from "./basicCard";

export default class queen1 extends basicCard {
  constructor() {
    super({
      name: "Queen1",
      cards: 0,
      coin: 0,
      cost: 2,
      chuteira: 0,
      position: "1",
      power(G, ctx) {
        while (G.players[ctx.currentPlayer].hand.length > 0) {
          G.players[ctx.currentPlayer].deck.unshift(
            G.players[ctx.currentPlayer].hand.shift()
          );
        }
      },
      powerText: "Return all card to your deck",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new queen1());
    }
    return cards;
  }
}
