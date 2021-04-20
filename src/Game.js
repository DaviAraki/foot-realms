import setup from './utils/setup'
import { defineWinner, setDesafio, shuffle, shuffleOffer, cleanUp, drawHand, giveOffer, dealPower } from './actions/gameActions'
import buyCard from './moves/buyCard'
import pass from './moves/pass'
import playCard from './moves/playCard'

const FootRealms = {
  name: "FootRealms",
  setup: () => setup,
  moves: {},

  endIf: (G, ctx) => {
    if (G.offer.turn === 7) {
      if (ctx.currentPlayer.points >= 15) {
        return { winner: ctx.currentPlayer }
      }
      return G.players[ctx.currentPlayer].points;
    }
  },

  phases: {
    setUpPhase: {
      onBegin: (G, ctx) => {
        shuffleOffer(G);
        shuffle(G, ctx);
        pass(G, ctx);
      },
      next: "playPhase",
      start: true,
    },
    playPhase: {
      moves: { pass, playCard, buyCard },
      onBegin: (G, ctx) => {
        drawHand(G, ctx);
        giveOffer(G, ctx);
        dealPower(G, ctx);
        setDesafio(G, ctx);
      },
      onEnd: (G, ctx) => {
        defineWinner(G, ctx);
        cleanUp(G, ctx);
        G.offer.turn++;
      },
      next: "playPhase",
    },
  },
};

export { FootRealms }