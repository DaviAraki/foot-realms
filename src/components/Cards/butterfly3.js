import basicCard from "./basicCard";

export default class butterfly3 extends basicCard {
  constructor() {
    super({
      name: "butterfly3",
      cards: 0,
      coin: 4,
      cost: 3,
      position: "3",
      role: "Staff",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new butterfly3());
    }
    return cards;
  }
}
