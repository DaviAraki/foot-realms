import commonFoward from "../components/Cards/commonFoward";
import { buyCard } from "../App";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost",()=>{
    const mockId = "abcdef";
    const f1 = new commonFoward();
    f1.id = mockId;
    const f2 = new commonFoward();
    f2.id = mockId;
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
        offerZone:[f1]
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
               playZone:[f2],
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
 