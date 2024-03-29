import setup from './utils/setup';
import buyCard from './moves/buyCard';
import pass from './moves/pass';
import playCard from './moves/playCard';
import drawHand from './actions/drawHand';
import giveOffer from './actions/giveOffer';
import updateStrenghtSchedule from './actions/updateStrengthSchedule';
import regularBot from './AI/Bots/regularBot';
import smartBot from './AI/Bots/smartBot';
import registerPoints from './actions/registerPoints';

const FootRealms = {
  name: 'FootRealms',
  setup: () => setup,
  moves: {},

  endIf: (G, ctx) => {
    if (ctx.turn > 28) {
      console.log('ENDGAME');
      const teams = [
        ...G.players.map((team) => ({ name: team.name, points: team.points })),
        ...G.board.dummies.map((team) => ({
          name: team.name,
          points: team.points + Math.random(),
        })),
      ];
      teams.sort((b, a) => a.points - b.points);
      console.log(teams);
      return { winner: teams[0], final: teams };
    }
  },

  phases: {
    playPhase: {
      moves: { pass, playCard, buyCard },
      onBegin: (G, ctx) => {
        drawHand(G, ctx);
        giveOffer(G, ctx);
        updateStrenghtSchedule(G, { turn: ctx.turn + 1 });
      },
      start: true,
      next: 'playPhase',
    },
  },

  ai: {
    enumerate: smartBot,
  },
};

export { FootRealms };
