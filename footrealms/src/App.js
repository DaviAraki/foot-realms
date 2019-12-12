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
                playZone:[],
                deck:[]
            }
        }
    ),
    moves:{
        playCard,
        buyCard,
        pass,
    },
    
   
    stages:{
        inicio:{
            moves:{selectCard,pass},
            next:'disputa'
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
                    }
                }
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
      G.players[ctx.currentPlayer].hand.push(G.players[ctx.currentPlayer].deck.pop());
}
export function shuffle(G, ctx){
    G.players[ctx.currentPlayer].deck = ctx.random.Shuffle(G.players[ctx.currentPlayer].deck);
}
export function pass(G, ctx) {
    ctx.events.endTurn();    
}
export function playCard(G, ctx, cardIndex) {
      G.players[ctx.currentPlayer].money = G.players[ctx.currentPlayer].money + G.players[ctx.currentPlayer].hand[cardIndex].coin;
      for (var i = 0; i < G.players[ctx.currentPlayer].hand[cardIndex].cards; i++) {
        draw(G, ctx);
      }
      G.players[ctx.currentPlayer].discard.push(G.players[ctx.currentPlayer].hand[cardIndex]);
      G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);

}
export function selectCard(G,ctx,cardIndex) {
    G.players[ctx.currentPlayer].admZone.push(G.players[ctx.currentPlayer].hand[cardIndex]);
    G.players[ctx.currentPlayer].hand.splice(cardIndex,1);   
}
export function countMoney(G, ctx) {
    for (var i = 0; i < G.players[ctx.currentPlayer].hand.length; i++) {
      G.players[ctx.currentPlayer].money = G.players[ctx.currentPlayer].money + G.players[ctx.currentPlayer].hand[i].coin;
    }
  }
const App = Client({game: FootRealms});

export default App;
