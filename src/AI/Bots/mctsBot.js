import { MCTSBot } from 'boardgame.io/ai';
import { InitializeGame, CreateGameReducer } from 'boardgame.io/dist/core';


export function Simulate({ game, bots, state, depth }) {
    if (depth === undefined) depth = 10000;
    const reducer = CreateGameReducer({ game, numPlayers: state.ctx.numPlayers });

    let metadata = null;
    let iter = 0;
    while (
        state.ctx.gameover === undefined &&
        state.ctx.actionPlayers.length > 0 &&
        iter < depth
    ) {
        const playerID = state.ctx.actionPlayers[0];
        const bot = bots instanceof MCTSBot ? bots : bots[playerID];
        const t = bot.play(state, playerID);

        if (!t.action) {
            break;
        }

        metadata = t.metadata;
        state = reducer(state, t.action);
        iter++;
    }

    return { state, metadata };
}