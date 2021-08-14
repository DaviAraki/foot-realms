import { scoreGoalteamA } from "./addQuarterGoals";

export default function scorePlayerGoal(G, ctx) {
  const teams = [...G.players, ...G.board.dummies];
  const round = ~~((ctx.turn - 1) / 4);
  const match = G.board.schedule[round].find(
    (match) =>
      match.a.id === ctx.currentPlayer || match.b.id === ctx.currentPlayer
  );
  if (match) {
    scoreGoalteamA(teams[match.a.id], teams[match.b.id], match);
  }
}
