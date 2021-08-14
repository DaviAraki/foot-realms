import scorePlayerGoal from "../../actions/scorePlayerGoal";
import basicCard from "./basicCard";

export default class ace0 extends basicCard {
  constructor() {
    super({
      name: "Ace0",
      cards: 0,
      coin: 0,
      cost: 8,
      chuteira: 5,
      position: "0",
      // power(G, ctx) {
      //   scorePlayerGoal(G, ctx);
      // },
      powerText: "Score a Goal",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new ace0());
    }
    return cards;
  }
}
