import basicCard from "./basicCard";

export default class madHatter0 extends basicCard {
  constructor() {
    super({
      name: "madHatter0",
      cards: 4,
      cost: 0,
      chuteira: 0,
      position: "0",
      role: "Player",
      powerText: "Draw 4 Cards",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new madHatter0());
    }
    return cards;
  }
}
