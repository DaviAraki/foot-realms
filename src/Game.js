import setup from './utils/setup'
import { shuffle, cleanUp, drawHand, giveOffer, dealPowerToDummies, addQuarterGoals } from './actions/gameActions'
import buyCard from './moves/buyCard'
import pass from './moves/pass'
import playCard from './moves/playCard'
import generateSchedule from './utils/generateSchedule'

const FootRealms = {
  name: "FootRealms",
  setup: () => setup,
  moves: {},

  endIf: (G, ctx) => {
    if (ctx.turn + 2 === (G.players.length + G.board.dummies.length - 1) * 4) {
      console.log("ENDGAME")
      const teams = [G.players.map(team => ({ name: team.name, points: team.points })), ...G.board.dummies.map(team => ({ name: team.name, points: team.points }))]
      teams.sort((b, a) => (a.points - b.points))
      console.log(teams)

      return { final: teams }

    }
  },

  phases: {
    playPhase: {
      moves: { pass, playCard, buyCard },
      onBegin: (G, ctx) => {
        shuffle(G, ctx);
        drawHand(G, ctx);
        giveOffer(G, ctx);

      },
      onEnd: (G, ctx) => {
        cleanUp(G, ctx);
        addQuarterGoals(G, ctx);
        if (Math.floor(ctx.turn % 4) === 0) {
          dealPowerToDummies(G, ctx);
        }
      },
      start: true,
      next: "playPhase",
    },
  },
};

export { FootRealms }