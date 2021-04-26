import basicCard from "./basicCard";

export default class attacker3 extends basicCard {
  constructor() {
    super({
      name: "attacker3",
      cost: 0,
      chuteira: 1,
      position: "3",
      role: "Player",
      power(G, ctx) {
        if (G.board.attacking === "A") {
          G.players[ctx.currentPlayer].strength =
            G.players[ctx.currentPlayer].strength + 2;
        }
      },
    });
  }

  static create(qty) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      cards.push(new attacker3());
    }
    return cards;
  }
}
