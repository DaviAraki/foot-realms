import basicCard from "./basicCard";

export default class goalKeeper1 extends basicCard {
  constructor() {
    super({
      name: "goalKeeper1",
      cost: 3,
      chuteira: 0,
      position: "1",
      role: "Player",
      power(G, ctx) {
        if (G.board.attacking === "D") {
          G.players[ctx.currentPlayer].strength =
            G.players[ctx.currentPlayer].strength + 5;
        }
      },
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new goalKeeper1());
    }
    return cards;
  }
}
