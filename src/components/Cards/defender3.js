import basicCard from "./basicCard";

export default class defender3 extends basicCard {
  constructor() {
    super({
      name: "defender3",
      cost: 0,
      chuteira: 1,
      position: "3",
      role: "Player",
      power(G, ctx) {
        if (G.board.attacking === "D") {
          G.players[ctx.currentPlayer].strength =
            G.players[ctx.currentPlayer].strength + 2;
        }
      },
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new defender3());
    }
    return cards;
  }
}
