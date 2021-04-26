import scoreOpponentGoal from "../../actions/scoreOpponentGoal";
import basicCard from "./basicCard";

export default class joker0 extends basicCard {
  constructor() {
    super({
      name: "joker0",
      cards: 0,
      coin: 5,
      cost: 8,
      chuteira: 5,
      position: "0",
      onDraw(G, ctx) {
        scoreOpponentGoal(G, ctx);
      },
      powerText: "When Draw, score a goal",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new joker0());
    }
    return cards;
  }
}
