import basicCard from "./basicCard";

export default class madHatter1 extends basicCard {
  constructor() {
    super({
      name: "madHatter1",
      cards: 4,
      cost: 0,
      chuteira: 0,
      position: "1",
      role: "Player",
      powerText: "Draw 4 Cards",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new madHatter1());
    }
    return cards;
  }
}
