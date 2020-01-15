import {Game} from 'boardgame.io/core'
import {Client} from 'boardgame.io/react'
import './App.css';

const FootRealms = {
    setup:()=>(
        {
            players:[
                 {
                    name: "Player A",
                    hand:[],
                    deck:[],
                    admZone:[],
                    playZone:[],
                    money:0,
                    score:0,
                    points:0
                  },
                  {
                    name: "Player B",
                    hand:[],
                    deck:[],
                    admZone:[],
                    playZone:[],
                    money:0,
                    score:0,
                    points:0
                  },
            ],
            offer:{
                offerZone:[],
                deck:[],
                turn:0
            }
        }
    ),
    moves:{
        playCard,
        buyCard,
        pass,
    },
   
    endIf:(G, ctx)=>{
        if(G.offer.turn===8){
            let maxPoints = 0;
            let leader = G.players[0];
            for(var i=0;i < G.players.length;i++){
                if(G.players.points>maxPoints){
                    maxPoints = G.players.points
                    leader = G.players[i];
                }
                if(G.players.points===maxPoints){
                    leader = drawGame;
                }
            }
            if(leader === drawGame){
                return {draw : true}
            }
            return{winner : leader};
        }
    },
   
    phases:{
        inicio:{
            moves:{selectCard,pass},
            next:'disputa',
            start: true,
        },
        disputa:{
            next:'administracao'
                
        },
        administracao:{
            moves:{playCard,pass,buyCard},
            next: 'classificacao',

        },
        classificacao:{
            onEnd: (G,ctx)=>{
                for(i=0; i<G.players.length; i++){
                    while(G.players[i].hand.length<5){
                        draw(G,ctx);
                    };
                };
                G.offer.turn ++;
            },
            next:'inicio',
        }
    },

}

export function draw(G, ctx){
    if (G.players[ctx.currentPlayer].deck.length === 0) {
        G.players[ctx.currentPlayer].deck = G.players[ctx.currentPlayer].discard;
        shuffle(G, ctx);
        G.players[ctx.currentPlayer].discard = [];
      }
      G.players[ctx.currentPlayer].admZone.push(G.players[ctx.currentPlayer].deck.pop());
}
export function shuffle(G, ctx){
    G.players[ctx.currentPlayer].deck = ctx.random.Shuffle(G.players[ctx.currentPlayer].deck);
}
export function pass(G, ctx) {
    ctx.events.endPhase();    
}
export function playCard(G,ctx,cardIndex) {
      G.players[ctx.currentPlayer].money = G.players[ctx.currentPlayer].money + G.players[ctx.currentPlayer].admZone[cardIndex].coin;
      for (var i = 0; i < G.players[ctx.currentPlayer].admZone[cardIndex].cards; i++) {
        draw(G, ctx);
      };
      G.players[ctx.currentPlayer].playZone.push(G.players[ctx.currentPlayer].admZone[cardIndex]);
      G.players[ctx.currentPlayer].admZone.splice(cardIndex, 1);
}
export function selectCard(G,ctx,cardIndex) {
    G.players[ctx.currentPlayer].admZone.push(G.players[ctx.currentPlayer].hand[cardIndex]);
    G.players[ctx.currentPlayer].hand.splice(cardIndex,1);   
}
export function buyCard(G,ctx,cardIndex) {
    if(G.players[ctx.currentPlayer].money>=G.offer.offerZone[cardIndex].cost){
        var cost = G.offer.offerZone[cardIndex].cost;
        G.players[ctx.currentPlayer].playZone.push(G.offer.offerZone[cardIndex]);
        G.players[ctx.currentPlayer].money= G.players[ctx.currentPlayer].money - cost;
        G.offer.offerZone.splice(cardIndex,1); 
    }    
}
const App = Client({game: FootRealms});

export default App;
