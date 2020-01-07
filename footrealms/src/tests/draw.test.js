import commonFoward from "../components/Cards/commonFoward";
import { draw } from "../App";

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
    draw(G, {currentPlayer:"0"} ,1);
    expect(G).toEqual({ 
        players:[
        {
           name: "Player A",
           hand:[new commonFoward()],
           deck:[],
           admZone:[],
           playZone:[],
           money:1,
           score:0,
           points:0
         }
    ]}
    )
})