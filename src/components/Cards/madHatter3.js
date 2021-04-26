import basicCard from "./basicCard";

export default class madHatter3 extends basicCard {
  constructor() {
    super({
      name: "madHatter3",
      cards: 4,
      cost: 0,
      chuteira: 0,
      position: "3",
      role: "Player",
      powerText: "Draw 4 Cards",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new madHatter3());
    }
    return cards;
  }
}
