import basicCard from "./basicCard";

export default class nine3 extends basicCard {
  constructor() {
    super({
      name: "nine3",
      cost: 3,
      chuteira: 0,
      position: "3",
      role: "Player",
      power(G, ctx) {
        if (G.board.attacking === "A") {
          G.players[ctx.currentPlayer].strength =
            G.players[ctx.currentPlayer].strength + 5;
        }
      },
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new nine3());
    }
    return cards;
  }
}
