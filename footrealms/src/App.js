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
                    discardZone:[],
                    money:0,
                    score:0,
                    points:0
                  },
            ],
            offer:{
                offerZone:[],
                deck:[],
                turn:0,
                desafio:0
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
            return G.players[0].points;
        }
    },
   
    phases:{
        inicio:{
            moves:{selectCard,pass},
            onBegin:(G,ctx)=>{
                drawHand(G,ctx);
                setDesafio(G,ctx);
            },
            next:'disputa',
            start: true,
        },
        disputa:{
            moves:{pass},
            onBegin:(G,ctx)=>{
                setChuteira(G,ctx);
                defineWinner(G,ctx);
            },
            next:'administracao'
                
        },
        administracao:{
            moves:{playCard,pass,buyCard,discardCard},
            next: 'classificacao',

        },
        classificacao:{
            moves:{pass},
            onEnd: (G,ctx)=>{
                G.offer.turn ++;
            },
            next:'inicio',
        }
    },

}

export function draw(G, ctx, destiny){
    if (G.players[ctx.currentPlayer].deck.length === 0) {
        G.players[ctx.currentPlayer].deck = G.players[ctx.currentPlayer].discard;
        shuffle(G, ctx);
        G.players[ctx.currentPlayer].discard = [];
    }
    let destino = destiny
    if(destino == 1){
        G.players[ctx.currentPlayer].hand.push(G.players[ctx.currentPlayer].deck.pop());
    }
    else 
        G.players[ctx.currentPlayer].admZone.push(G.players[ctx.currentPlayer].deck.pop());  
    
}
export function setChuteira(G,ctx) {
    for(let i = 0; i<G.players[ctx.currentPlayer].hand.length; i++){
        G.players[ctx.currentPlayer].score = G.players[ctx.currentPlayer].score + G.players[ctx.currentPlayer].hand[i].chuteira;
    }
}
export function setDesafio(G, ctx) {
    if(G.offer.turn<2){
        for(let i = 0; i<2; i++){
            G.offer.desafio = G.offer.desafio +  G.offer.offerZone[i].chuteira
        }
    }else if(G.offer.turn<4){
            for(let i = 0; i>3; i++){
                G.offer.desafio = G.offer.desafio +  G.offer.offerZone[i].chuteira
            }
        } else if(G.offer.turn<6){
            for(let i = 0; i>4; i++){
                G.offer.desafio = G.offer.desafio +  G.offer.offerZone[i].chuteira
            }
        }else if(G.offer.turn<8){
            for(let i = 0; i>5; i++){
                G.offer.desafio = G.offer.desafio +  G.offer.offerZone[i].chuteira
            }
        }
        
}
export function defineWinner(G,ctx) {
    if(G.players[ctx.currentPlayer].chuteira > G.offer.desafio){
        G.players.points = G.players.points + 3;
    }
    G.players.chuteira = 0;
    G.offer.desafio = 0;
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
export function discardCard(G,ctx,cardIndex) {
    G.players[ctx.currentPlayer].discardZone.push(G.players[ctx.currentPlayer].admZone[cardIndex]);
    G.players[ctx.currentPlayer].admZone.splice(cardIndex,1);   
}
export function buyCard(G,ctx,cardIndex) {
    if(G.players[ctx.currentPlayer].money>=G.offer.offerZone[cardIndex].cost){
        var cost = G.offer.offerZone[cardIndex].cost;
        G.players[ctx.currentPlayer].playZone.push(G.offer.offerZone[cardIndex]);
        G.players[ctx.currentPlayer].money= G.players[ctx.currentPlayer].money - cost;
        G.offer.offerZone.splice(cardIndex,1); 
    }    
}
export function drawHand(G,ctx) {
    while(G.players[ctx.currentPlayer].hand.length<5){
        draw(G,ctx,1);
    }
    
}
const App = Client({game: FootRealms});

export default App;
