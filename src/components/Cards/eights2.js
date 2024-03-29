import basicCard from "./basicCard";

export default class eights2 extends basicCard {
  constructor() {
    super({
      name: "eights2",
      cost: 3,
      chuteira: 3,
      coin: 2,
      position: "2",
      role: "Player",
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new eights2());
    }
    return cards;
  }
}
