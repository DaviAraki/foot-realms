import { Game } from 'boardgame.io/core';
import { drawHand, shuffleOffer, cleanUp, draw, callPlayer, endMatch, setDesafio, shuffle, defineWinner, giveOffer, discardCard } from '../../actions/gameActions';
import { pass, playCard, buyCard, } from '../../moves/moves'
import { RandomBot, MCTSBot } from 'boardgame.io/ai';
import { InitializeGame, CreateGameReducer } from 'boardgame.io/dist/cjs/internal';
import commonCaptain0 from "../../components/Cards/commonCaptain0";
import bigManager from "../../components/Cards/bigManager";
import commonCaptain1 from "../../components/Cards/commonCaptain1"
import commonManager0 from "../../components/Cards/commonManager0"
import manager2 from "../../components/Cards/manager2"
import superStar from "../../components/Cards/superStar"
import GameBoard from "../../components/GameBoard";
import generateUniqueId from "../../utils/generateUniqueId";
import { Simulate } from 'boardgame.io/ai'
import { ProcessGameConfig } from 'boardgame.io/dist/cjs/internal'
const fs = require('fs');

const FootRealms = ProcessGameConfig({
  setup: () => ({
    players: [
      {
        id: generateUniqueId(),
        name: "Player A",
        hand: [],
        deck: [].concat(commonCaptain0.create(7), commonManager0.create(3)),
        admZone: [],
        playZone: [],
        discardZone: [],
        money: 0,
        score: 0,
        points: 0,
      },
    ],
    offer: {
      offerZone: [],
      deck: [].concat(commonCaptain0.create(5), bigManager.create(5), commonManager0.create(5), commonCaptain1.create(5), manager2.create(5), superStar.create(5)),
      turn: 0,
      desafio: 0,
    },
  }),
  // moves: {
  //   playCard,
  //   buyCard,
  //   pass,
  //   callPlayer,
  //   discardCard,
  // },

  endIf: (G, ctx) => {
    if (G.offer.turn === 8) {
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
      next: "begin",
      start: true,
    },
    begin: {
      moves: { callPlayer, pass },
      onBegin: (G, ctx) => {
        drawHand(G, ctx);
        giveOffer(G, ctx);
        setDesafio(G, ctx);
      },
      onEnd: (G, ctx) => {
        endMatch(G, ctx);
        defineWinner(G, ctx);
        cleanUp(G, ctx);
        //   console.log("admnistration")
      },
      next: "admnistration",
    },
    admnistration: {
      moves: { playCard, pass, buyCard, discardCard },
      next: "begin",
      onEnd: (G, ctx) => {
        G.offer.turn++;
        cleanUp(G, ctx);
        //   console.log("begin")
      }
    },

  },

  ai: {
    enumerate: (G, ctx) => {
      let moves = [{ move: 'pass', args: null }];

      if (ctx.phase === 'admnistration') {
        for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++) {
          moves.push({ move: 'playCard', args: [i] });

        }
        for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++) {
          moves.push({ move: 'discardCard', args: [i] });
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
    }
  }
}
);
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
}

it('should run', async () => {
  const bot = new RandomBot({ 'seed': 'test', game: FootRealms, enumerate, playerID: '0', iterations: 200 });
  expect(typeof Simulate).toBe('function');
  const state = InitializeGame({ game: FootRealms, numPlayers: 1 });
  const { state: endState } = await Simulate({ game: FootRealms, bots: bot, state });
  expect(endState.ctx.gameover).not.toBeUndefined();

  var data = await JSON.stringify(endState);
  fs.writeFile("./public/teste.json", data, (err) => {
    if (err) throw err;
  });
  expect(data).not.toBeUndefined
});
