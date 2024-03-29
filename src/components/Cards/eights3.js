import basicCard from "./basicCard";

export default class eights3 extends basicCard {
  constructor() {
    super({
      name: "eights3",
      cost: 3,
      chuteira: 3,
      coin: 2,
      position: "3",
      role: "Player",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new eights3());
    }
    return cards;
  }
}
