function setGoalsDiference(G, ctx){
    G.players[ctx.currentPlayer].goalsDiference = G.players[ctx.currentPlayer].goalsDiference + G.players[ctx.currentPlayer].goals - G.players[ctx.currentPlayer].goalsAgainst
    G.players[ctx.currentPlayer].goals= 0;
    for(let i = 0 ; i< G.board.dummies.length; i++){
        G.board.dummies[i].goalsDiference = G.board.dummies[i].goalsDiference + G.board.dummies[i].goals - G.board.dummies[i].goalsAgainst
        G.board.dummies[i].goals = 0
    }
}
export default setGoalsDiference