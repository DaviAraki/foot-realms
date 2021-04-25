
export default function shuffleOffer(G) {
    G.board.deck.sort(() => Math.random() - 0.5);
}