import commonFoward from "../components/Cards/commonFoward";
import {selectCard } from "../App";

it ("When i select a card the card goes from my hand to my adm zone", ()=>{
    const f = new commonFoward();
    const G = {
        players:[
            {
               name: "Player A",
               hand:[f],
               deck:[],
               admZone:[],
               playZone:[],
               money:1,
               score:0,
               points:0
             }
        ]
    };
    selectCard(G, {currentPlayer:"0"} ,0);
    expect(G.players[0].admZone.length).toEqual(1);
    expect(G.players[0].admZone[0]).toEqual(f)
    expect(G.players[0].hand.length).toEqual(0); 

});