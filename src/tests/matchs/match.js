import { Game } from 'boardgame.io/core';
import { drawHand, giveOffer } from '../../actions/gameActions';
import { pass, playCard, buyCard } from '../../moves/moves';
import { RandomBot } from 'boardgame.io/ai';
import { InitializeGame } from 'boardgame.io/dist/cjs/internal';
import setup from '../../utils/setup';
import updateStrenghtSchedule from '../../actions/updateStrengthSchedule';
import { Simulate } from 'boardgame.io/ai';
import { ProcessGameConfig } from 'boardgame.io/dist/cjs/internal';
const fs = require('fs');

const FootRealms = ProcessGameConfig({
  setup: () => setup,
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
});
const enumerate = (G, ctx, playerID) => {
  let moves = [{ move: 'pass', args: null }];

  if (ctx.phase === 'admnistration') {
    for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++) {
      moves.push({ move: 'playCard', args: [i] });
    }
    for (let i = 0; i < G.offer.offerZone.length; i++) {
      if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[i].cost) {
        moves.push({ move: 'buyCard', args: [i] });
      }
    }
    //   console.log(moves.length)
    //   console.log(ctx.phase)
  }
  if (ctx.phase === 'begin') {
    for (let i = 0; i < G.players[ctx.currentPlayer].hand.length; i++) {
      moves.push({ move: 'callPlayer', args: [i] });
    }
    //   console.log(moves.length)
    //   console.log(ctx.phase)
  }

  return moves;
};

it('should run', async () => {
  const bot = new RandomBot({
    seed: 'test',
    game: FootRealms,
    enumerate,
    playerID: '0',
    iterations: 200,
  });
  expect(typeof Simulate).toBe('function');
  const state = InitializeGame({ game: FootRealms, numPlayers: 1 });
  const { state: endState } = await Simulate({
    game: FootRealms,
    bots: bot,
    state,
  });
  expect(endState.ctx.gameover).not.toBeUndefined();

  var data = await JSON.stringify(endState);
  fs.writeFile('./public/teste.json', data, (err) => {
    if (err) throw err;
  });
  expect(data).not.toBeUndefined;
});
