export default class BasicCard {
    constructor(data) {
        this.name = data.name;
        this.points = data.points || 0;
        this.cards = data.cards || 0;
        this.coin = data.coin || 0;
        this.cost = data.cost || 0;
        this.chuteira = data.chuteira || 0;
    }

    static buy(G, ctx, cardName) { 
        if(G.players[ctx.currentPlayer].buys > 0){
            if ( G.offer[cardName][0].cost <= G.players[ctx.currentPlayer].money) {
                G.players[ctx.currentPlayer].points = G.players[ctx.currentPlayer].points + G.offer[cardName][0].points;
                G.players[ctx.currentPlayer].discard.push(
                    G.offer[cardName][G.offer[cardName].length-1]
                );
                G.players[ctx.currentPlayer].money = G.players[ctx.currentPlayer].money -  G.offer[cardName][0].cost;
                G.offer[cardName] = G.offer[cardName].slice(0,-1);
            }
        }
    }
    
}