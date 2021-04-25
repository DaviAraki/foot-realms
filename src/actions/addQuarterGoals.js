export default function addQuarterGoals(G, ctx) {
    const teams = [...G.players, ...G.board.dummies];
    const round = Math.floor((ctx.turn - 1) / 4)
    for (let i = 0; i < G.board.schedule[round].length; i++) {
        let match = G.board.schedule[round][i];
        match.a.goals = (match.a.goals === '-') ? 0 : match.a.goals;
        match.b.goals = (match.b.goals === '-') ? 0 : match.b.goals;
        if(ctx.turn % 2 === 0){
            if (teams[match.a.id].strength >= teams[match.b.id].strength) {
                match.a.goals = match.a.goals + 1
                teams[match.a.id].goals = teams[match.a.id].goals +1
            }
        }
        else {
            if (teams[match.a.id].strength <= teams[match.b.id].strength) {
                match.b.goals = match.b.goals + 1
                teams[match.b.id].goals = teams[match.b.id].goals +1
        }
        };
    }
}