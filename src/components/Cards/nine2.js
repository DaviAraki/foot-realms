import basicCard from "./basicCard";

export default class nine2 extends basicCard {
  constructor() {
    super({
      name: "nine2",
      cost: 3,
      chuteira: 0,
      position: "2",
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
      cards.push(new nine2());
    }
    return cards;
  }
}
