import basicCard from "./basicCard";

export default class butterfly2 extends basicCard {
  constructor() {
    super({
      name: "butterfly2",
      cards: 0,
      coin: 4,
      cost: 3,
      position: "2",
      role: "Staff",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new butterfly2());
    }
    return cards;
  }
}
