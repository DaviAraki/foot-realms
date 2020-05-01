import commonFoward from "../components/Cards/commonFoward";
import {setChuteira } from "../App";
import superStar from "../components/Cards/superStar";

it ("the socre number should be equal the added value of all chuteiras in cards in hand", ()=>{
    const G = {
        players:[
            {
               name: "Player A",
               hand:[new commonFoward(),new superStar()],
               deck:[],
               admZone:[],
               discardZone:[],
               playZone:[],
               money:1,
               score:0,
               points:0,
             }
        ]
    };
    let ctx={currentPlayer:"0"}
    setChuteira(G,ctx)
    expect (G.players[ctx.currentPlayer].score).toEqual(7);
})