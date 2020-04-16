import commonFoward from "../components/Cards/commonFoward";
import {defineWinner, setChuteira, setDesafio } from "../App";
import superStar from "../components/Cards/superStar";
import manager2 from "../components/Cards/manager2"

it ("When the player have more score points than the AI the player should receive points", ()=>{
    const G = {
        players:[
            {
               name: "Player A",
               hand:[new commonFoward(),new superStar(),new manager2()],
               deck:[],
               admZone:[],
               discardZone:[],
               playZone:[],
               money:1,
               score:0,
               points:0,
             }
        ],
        offer:{
            offerZone:[new commonFoward(), new superStar()],
            turn:1,
            desafio:0
        }
        
    };
    let ctx={currentPlayer:"0"}
    setChuteira(G,ctx);
    expect(G.players[ctx.currentPlayer].score).toEqual(8);
    setDesafio(G,ctx);
    expect(G.offer.desafio).toEqual(7);
    defineWinner(G,ctx);
    expect (G.players[ctx.currentPlayer].points).toEqual(3);
    expect(G.players[ctx.currentPlayer].score).toEqual(0);
    expect(G.offer.desafio).toEqual(0);
})

it("If the player has fewer score points than the AI, the player should receive no points", () => {
    const G = {
        players: [
            {
                name: "Player A",
                hand: [new commonFoward(), new manager2()],
                deck: [],
                admZone: [],
                discardZone: [],
                playZone: [],
                money: 1,
                score: 0,
                points: 0,
            }
        ],
        offer: {
            offerZone: [new commonFoward(), new superStar()],
            turn: 1,
            desafio: 0
        }

    };
    let ctx = { currentPlayer: "0" }
    setChuteira(G, ctx);
    expect(G.players[ctx.currentPlayer].score).toEqual(3);
    setDesafio(G, ctx);
    expect(G.offer.desafio).toEqual(7);
    defineWinner(G, ctx);
    expect(G.players[ctx.currentPlayer].points).toEqual(0);
    expect(G.players[ctx.currentPlayer].score).toEqual(0);
    expect(G.offer.desafio).toEqual(0);
})