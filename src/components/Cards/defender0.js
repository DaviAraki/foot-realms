import basicCard from "./basicCard";

export default class defender0 extends basicCard {
  constructor() {
    super({
      name: "defender0",
      cost: 0,
      chuteira: 1,
      position: "0",
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
      cards.push(new defender0());
    }
    return cards;
  }
}
