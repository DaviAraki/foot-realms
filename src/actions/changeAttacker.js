export default function changeAttacker(G, ctx) {
  if (G.board.attacking === "A") {
    G.board.attacking = "D";
  } else {
    G.board.attacking = "A";
  }
}
