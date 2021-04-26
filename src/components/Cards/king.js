import scoreOpponentGoal from "../../actions/scoreOpponentGoal";
import basicCard from "./basicCard";

export default class king extends basicCard {
  constructor() {
    super({
      name: "king",
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
      cards.push(new king());
    }
    return cards;
  }
}
