import addQuarterGoals from "../actions/addQuarterGoals";
import changeAttacker from "../actions/changeAttacker";
import cleanUp from "../actions/cleanUp";
import dealPowerToDummies from "../actions/dealPowerToDummies";
import registerPoints from "../actions/registerPoints";
import registerStrength from "../actions/registerStrength";
import registerMoney from "../actions/registerMoney";
import registerStrength2 from "../actions/registerStrength2";
import setGoalsDiference from "../actions/setGoalsDiference";
import setRoundWinners from "../actions/setRoundWinners";

export default function pass(G, ctx) {

  changeAttacker(G, ctx);
  addQuarterGoals(G, ctx);
  registerStrength(G, ctx);
  registerStrength2(G, ctx);
  registerMoney(G,ctx);
  if (Math.floor(ctx.turn % 4) === 0) {
    console.log(ctx.turn % 4);
    setRoundWinners(G, ctx);
    dealPowerToDummies(G, ctx);
    setGoalsDiference(G, ctx);
  }
  registerPoints(G, ctx);
  cleanUp(G, ctx);
  ctx.events.endPhase();
}
