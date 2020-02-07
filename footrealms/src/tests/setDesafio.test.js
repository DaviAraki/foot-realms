import commonFoward from "../components/Cards/commonFoward";
import {setDesafio} from "../App";
import superStar from "../components/Cards/superStar";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost",()=>{
    const G = {
       offer:{
           offerZone:[new commonFoward(), new superStar],
           turn:1,
           desafio:0
       }
       };
       setDesafio(G,{ currentPlayer: "0" });
       expect (G.offer.desafio).toEqual(7);
       
   });