export default function ActionListAvailableActions(G, ctx) {
    let currentPlayer = G.players[ctx.currentPlayer];
    let moves = [{ move: 'pass', args: null }];

    for (let i = 0; i < currentPlayer.hand.length; i++) {
            moves.push({ move: 'playCard', args: [i] });
        
    }
    for (let i = 0; i<offerZone.length; i++) {       
            if (currentPlayer.money >= G.offerZone[i].cost) {
                moves.push({ move: 'buyCard', args: [i] });
            }
    }
    for(let i= 0; i<hand.length; i++){
            moves.push({ move: 'selectCard', args: [i] });
    }
    for(let i= 0; i<hand.length; i++){
        moves.push({ move: 'discardCard', args: [i] });
    }
        
    return moves;
}