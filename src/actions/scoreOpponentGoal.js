import { scoreGoalteamB } from "./addQuarterGoals";

export default function scoreOpponentGoal(G, ctx) {
  const teams = [...G.players, ...G.board.dummies];
  const round = ~~((ctx.turn - 1) / 4);
  const match = G.board.schedule[round].find(
    (match) =>
      match.a.id === ctx.currentPlayer * 1 ||
      match.b.id === ctx.currentPlayer * 1
  );
  if (match) {
    scoreGoalteamB(teams[match.a.id], teams[match.b.id], match);
  }
}
