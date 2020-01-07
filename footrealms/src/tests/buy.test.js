import commonFoward from "../components/Cards/commonFoward";
import { buyCard } from "../App";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost",()=>{
 const G = {
    players:[
        {
           name: "Player A",
           hand:[],
           deck:[],
           admZone:[],
           playZone:[],
           money:1,
           score:0,
           points:0
         }
    ],
    offer:{
        offerZone:[new commonFoward()]
    }
    };
    expect (G.offer.offerZone[0].cost).toEqual(1);
    buyCard(G, { currentPlayer: "0" }, 0); 
    expect(G).toEqual({
        players:[
            {
               name: "Player A",
               hand:[],
               deck:[],
               admZone:[],
               playZone:[new commonFoward()],
               money:0,
               score:0,
               points:0
             }
        ],
        offer:{
            offerZone:[]
        }

    });
});
 