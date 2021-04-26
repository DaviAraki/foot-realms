import basicCard from "./basicCard";

export default class butterfly1 extends basicCard {
  constructor() {
    super({
      name: "butterfly1",
      cards: 0,
      coin: 4,
      cost: 3,
      position: "1",
      role: "Staff",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new butterfly1());
    }
    return cards;
  }
}
