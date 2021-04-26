import basicCard from "./basicCard";

export default class goalKeeper0 extends basicCard {
  constructor() {
    super({
      name: "goalKeeper0",
      cost: 3,
      chuteira: 0,
      position: "0",
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
      cards.push(new goalKeeper0());
    }
    return cards;
  }
}
