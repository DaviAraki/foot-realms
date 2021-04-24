import setup from './utils/setup'
import { shuffle, cleanUp, drawHand, giveOffer, dealPowerToDummies, addQuarterGoals, updateStrenghtSchedule, setRoundWinners } from './actions/gameActions'
import buyCard from './moves/buyCard'
import pass from './moves/pass'
import playCard from './moves/playCard'
import generateSchedule from './utils/generateSchedule'

const FootRealms = {
  name: "FootRealms",
  setup: () => setup,
  moves: {},

  endIf: (G, ctx) => {
    if (ctx.turn  > (28)) {
      console.log("ENDGAME")
      const teams = [...G.players.map(team => ({ name: team.name, points: team.points })), ...G.board.dummies.map(team => ({ name: team.name, points: team.points + Math.random()}))]
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
        updateStrenghtSchedule(G, {turn:ctx.turn+1})

      },
      start: true,
      next: "playPhase",
    },
  },
};

export { FootRealms }