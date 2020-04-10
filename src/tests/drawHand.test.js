import commonFoward from "../components/Cards/commonFoward";
import { draw, drawHand } from "../App";

it ("When the turn begins i draw until i have 5 cards", ()=>{
    const G = {
        players:[
            {
               name: "Player A",
               hand:[],
               deck:[new commonFoward(),new commonFoward(),new commonFoward(),new commonFoward(),new commonFoward()],
               admZone:[],
               playZone:[],
               money:1,
               score:0,
               points:0
             }
        ]
    };
    drawHand(G, {currentPlayer:"0"} ,1);
    expect(G.players[0].hand.length).toEqual(5);
    expect(G.players[0].deck.length).toEqual(0);
});