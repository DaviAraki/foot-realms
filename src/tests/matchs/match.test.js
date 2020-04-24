import { Game } from 'boardgame.io/core';
import { playCard, pass, drawHand,buyCard, draw, selectCard,setChuteira ,setDesafio,shuffle, defineWinner, giveOffer, discardCard  } from '../../App';
import { RandomBot, MCTSBot } from 'boardgame.io/ai';
import ActionList from '../../actions/ActionList';
import { InitializeGame, CreateGameReducer } from 'boardgame.io/core/initialize';
import commonFoward from "../../components/Cards/commonFoward";
import bigManager from "../../components/Cards/bigManager";
import commonCaptain from "../../components//Cards/commonCaptain"
import commonManager from "../../components/Cards/commonCaptain"
import manager2 from "../../components/Cards/manager2"
import superStar from "../../components/Cards/superStar"
import GameBoard from "../../components/GameBoard";
import generateUniqueId from "../../utils/generateUniqueId";
import { Simulate } from 'boardgame.io/ai'

for (let i = 0; i < 1; i++) {
    it('should run', () => {
        const FootRealms = {
            setup: () => ({
                players: [
                    {
                        id: generateUniqueId(),
                        name: "Player A",
                        hand: [],
                        deck: [].concat(commonFoward.create(7), commonManager.create(3)),
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
                    deck: [].concat(commonFoward.create(5), bigManager.create(5), commonManager.create(5), commonCaptain.create(5), manager2.create(5), superStar.create(5)),
                    turn: 0,
                    desafio: 0,
                },
            }),
            // moves: {
            //   playCard,
            //   buyCard,
            //   pass,
            //   selectCard,
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
                    next: "inicio",
                    start: true,
                },
                inicio: {
                    moves: { selectCard, pass },
                    onBegin: (G, ctx) => {
                        drawHand(G, ctx);
                        giveOffer(G, ctx);
                        setDesafio(G, ctx);
                    },
                    onEnd: (G, ctx) => {
                        console.log("disputa")
                    },
                    next: "disputa",
                },
                disputa: {
                    moves: { pass },
                    onBegin: (G, ctx) => {
                        setChuteira(G, ctx);
                        defineWinner(G, ctx);
                    },
                    onEnd: (G, ctx) => {
                        console.log("administracao")
                    },
                    next: "administracao",
                },
                administracao: {
                    moves: { playCard, pass, buyCard, discardCard },
                    next: "classificacao",
                    onEnd: (G, ctx) => {
                        console.log("classificação")
                    }
                },
                classificacao: {
                    moves: { pass },
                    // onBegin: (G,ctx) =>{
                    //   pass(G,ctx)
                    // },
                    onEnd: (G, ctx) => {
                        G.offer.turn++;
                        cleanUp(G, ctx);
                        console.log("inicio")
                    },
                    next: "inicio",
                },
            },

            ai: {
                enumerate: (G, ctx) => {
                    let moves = [{ move: 'pass', args: null }];

                    if (ctx.phase === 'administracao') {
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
                        console.log(moves.length)
                        console.log(ctx.phase)
                    }
                    if (ctx.phase === 'inicio') {
                        for (let i = 0; i < G.players[ctx.currentPlayer].hand.length; i++) {
                            moves.push({ move: 'selectCard', args: [i] });
                        }
                        console.log(moves.length)
                        console.log(ctx.phase)
                    }


                    return moves;
                }
            }
        };
        // expect(typeof RandomBot).toBe('function');

        let rnd = new MCTSBot({ 'seed': 'test', enumerate: ActionList, game: FootRealms, playerID: '0', iterations: 200 });
        expect(typeof Simulate).toBe('function');
        const state = InitializeGame({ game: FootRealms });
        const { state: endState } = Simulate({ game: FootRealms, bots: [rnd], state, depth: 1000 });
        expect(endState.ctx.gameover).not.toBeUndefined();

        // var data = JSON.stringify(endState);
        // fs.writeFile("../dblab/src/results/testedaspartidas.txt", data, (err) => {
        //     if (err) throw err;
        // });


    });
}