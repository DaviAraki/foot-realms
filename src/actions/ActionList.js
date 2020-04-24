export default function ActionList(G, ctx) {
    let currentPlayer = G.players[ctx.currentPlayer];
    let moves = [{ move: 'pass', args: null }];

    for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++) {
            moves.push({ move: 'playCard', args: [i] });
        
    }
    for (let i = 0; i > G.players[ctx.currentPlayer].offerZone.length; i++) {       
        if (G.players[ctx.currentPlayer].money >= G.offerZone[i].cost) {
                moves.push({ move: 'buyCard', args: [i] });
            }
    }
    for (let i = 0; i < G.players[ctx.currentPlayer].hand.length; i++){
            moves.push({ move: 'selectCard', args: [i] });
    }
    for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++){
        moves.push({ move: 'discardCard', args: [i] });
    }
        
    return moves;
}