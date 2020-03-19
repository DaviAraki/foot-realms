import commonFoward from "../components/Cards/commonFoward";
import { draw } from "../App";
import { ctx } from "boardgame.io/dist/cjs/reducer-e77ac889";
//FIXME Isso tá com cara de estar bem errado...


it ("When i draw, the top card of my deck goes to my hand", ()=>{
    const G = {
        players:[
            {
               name: "Player A",
               hand:[],
               deck:[new commonFoward()],
               admZone:[],
               playZone:[],
               money:1,
               score:0,
               points:0
             }
        ]
    };
    draw(G, {currentPlayer:"0"},0);
    expect(G).toEqual({ 
        players:[
        {
           name: "Player A",
           hand:[],
           deck:[],
           admZone: [new commonFoward()],
           playZone:[],
           money:1,
           score:0,
           points:0
         }
    ]}
    )
})