import addQuarterGoals from "../actions/addQuarterGoals";
import cleanUp from "../actions/cleanUp";
import dealPowerToDummies from "../actions/dealPowerToDummies";
import setRoundWinners from "../actions/setRoundWinners";

export default function pass(G, ctx) {
    addQuarterGoals(G, ctx);
    if (Math.floor(ctx.turn % 4) === 0) {
      console.log(ctx.turn % 4)
      setRoundWinners(G,ctx)   
      dealPowerToDummies(G, ctx);
    }
    cleanUp(G, ctx);
    ctx.events.endPhase();
}

