import scorePlayerGoal from "../../actions/scorePlayerGoal";
import basicCard from "./basicCard";

export default class ace1 extends basicCard {
  constructor() {
    super({
      name: "Ace1",
      cards: 0,
      coin: 0,
      cost: 8,
      chuteira: 5,
      position: "1",
      // power(G, ctx) {
      //   scorePlayerGoal(G, ctx);
      // },
      powerText: "Score a Goal",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new ace1());
    }
    return cards;
  }
}
