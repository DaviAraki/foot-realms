export default function giveOffer(G, ctx) {
    G.board.offerZone.splice(0, 2);
    while (G.board.offerZone.length < 5 && G.board.deck.length > 0 ) { 
            G.board.offerZone.push(G.board.deck.pop());          
    }
}