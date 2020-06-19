import { Game } from "boardgame.io/core";
import { Client } from "boardgame.io/react";
import "./App.css";
import commonFoward from "./components/Cards/commonFoward";
import bigManager from "./components/Cards/bigManager";
import commonCaptain from "./components/Cards/commonCaptain"
import commonManager from "./components/Cards/commonManager"
import manager2 from "./components/Cards/manager2"
import superStar from "./components/Cards/superStar"
import GameBoard from "./components/GameBoard";
import generateUniqueId from "./utils/generateUniqueId";



export const FootRealms = {
  setup: () => ({
    players: [
      {
        id: generateUniqueId(),
        name: "Player A",
        hand: [],
        deck: [].concat(commonFoward.create(7),commonManager.create(3)),
        admZone: [],
        playZone: [],
        discardZone: [],
        money: 0,
        score: 0,
        points: 0,
      },
    ],
    offer: {
      offerZone: [],
      deck: [].concat(commonFoward.create(5), bigManager.create(5), commonManager.create(5), commonCaptain.create(5), manager2.create(5), superStar.create(5)),
      turn: 0,
      desafio: 0,
    },
  }),
  // moves: {
  //   playCard,
  //   buyCard,
  //   pass,
  //   callPlayer,
  //   discardCard,
  // },

  endIf: (G, ctx) => {
    if (G.offer.turn === 8) {
      return G.players[ctx.currentPlayer].points;
    }
  },

  phases: {
    setUpPhase:{
      onBegin:(G,ctx) => {
        shuffleOffer(G);  
        shuffle(G,ctx);      
        pass(G,ctx);
      },
      next:"begin",
      start : true,    
    },
    begin: {
      moves: { callPlayer, pass },
      onBegin: (G, ctx) => {
        drawHand(G, ctx);
        giveOffer(G, ctx);
        setDesafio(G, ctx);
      }, 
      onEnd: (G, ctx) => {
        endMatch(G, ctx);
        defineWinner(G, ctx);
        cleanUp (G,ctx);
        console.log("admnistration")
      },
      next: "admnistration",
    },
    admnistration: {
      moves: { playCard, pass, buyCard, discardCard },
      next: "begin",
      onEnd: (G,ctx) =>{
        G.offer.turn++;
        cleanUp (G,ctx);
        console.log("begin")
      }
    },
    
  },

  ai: {
    enumerate:(G,ctx)=>{
      let moves = [{ move: 'pass', args: null }];

      if(ctx.phase === 'admnistration'){
        for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++) {
          moves.push({ move: 'playCard', args: [i] });

        }
        for (let i = 0; i < G.players[ctx.currentPlayer].admZone.length; i++) {
          moves.push({ move: 'discardCard', args: [i] });
        }
        for (let i = 0; i < G.offer.offerZone.length; i++) {
          if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[i].cost) {
            moves.push({ move: 'buyCard', args: [i] });
          }
        }
        console.log(moves.length)
        console.log(ctx.phase)
      }
      if(ctx.phase === 'begin'){
        for (let i = 0; i < G.players[ctx.currentPlayer].hand.length; i++) {
          moves.push({ move: 'callPlayer', args: [i] });
        }
        console.log(moves.length)
        console.log(ctx.phase)
      }


      return moves;
    }
  }
};

export function draw(G, ctx, destiny) {
  if (G.players[ctx.currentPlayer].deck.length === 0) {
    G.players[ctx.currentPlayer].deck = G.players[ctx.currentPlayer].discardZone;
    G.players[ctx.currentPlayer].discardZone = [];
    shuffle(G, ctx);
  }
  if(G.players[ctx.currentPlayer].deck.length>0){
    let destino = destiny;
    if (destino === 1) {
      G.players[ctx.currentPlayer].hand.push(
        G.players[ctx.currentPlayer].deck.pop()
      );
    } else
      G.players[ctx.currentPlayer].admZone.push(
        G.players[ctx.currentPlayer].deck.pop()
      );
  }
}
export function endMatch(G, ctx) {
  while (G.players[ctx.currentPlayer].hand.length > 0) {
    G.players[ctx.currentPlayer].admZone.push(
      G.players[ctx.currentPlayer].hand[0]
    );
    G.players[ctx.currentPlayer].hand.splice(0, 1);
  }
}
export function setDesafio(G, ctx) {
  if(G.offer.offerZone.length > 0){
    if (G.offer.turn < 2 ) {
      for (let i = 0; i < 2; i++) {
        G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
      }
    } else if (G.offer.turn < 4 ) {
      for (let i = 0; i < 3; i++) {
        G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
      }
    } else if (G.offer.turn < 6) {
      for (let i = 0; i < 4; i++) {
        G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
      }
    } else if (G.offer.turn > 6) {
      for (let i = 0; i < 5; i++) {
        G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
      }
    }
  }
}
export function defineWinner(G, ctx) {
  if (G.players[ctx.currentPlayer].score > G.offer.desafio) {
    G.players[ctx.currentPlayer].points =
      G.players[ctx.currentPlayer].points + 3;
  }
  else if (G.players[ctx.currentPlayer].score === G.offer.desafio) {
    G.players[ctx.currentPlayer].points =
      G.players[ctx.currentPlayer].points + 1;
  }
  G.players[ctx.currentPlayer].score = 0;
  G.offer.desafio = 0;
}
// export function shuffle(G, ctx) {
//   G.players[ctx.currentPlayer].deck = ctx.random.Shuffle(G.players[ctx.currentPlayer].deck);
// }
export function shuffle(G,ctx){
    G.players[ctx.currentPlayer].deck.sort(() => Math.random() - 0.5);
} 
export function shuffleOffer(G) {
  G.offer.deck.sort(() => Math.random() - 0.5);
}
export function pass(G, ctx) {
  ctx.events.endPhase();
}
export function playCard(G, ctx, cardIndex) {
  G.players[ctx.currentPlayer].money =
    G.players[ctx.currentPlayer].money +
    G.players[ctx.currentPlayer].admZone[cardIndex].coin;
  for (
    var i = 0;
    i < G.players[ctx.currentPlayer].admZone[cardIndex].cards;
    i++
  ) {
    draw(G, ctx);
  }
  G.players[ctx.currentPlayer].playZone.push(
    G.players[ctx.currentPlayer].admZone[cardIndex]
  );
  G.players[ctx.currentPlayer].admZone.splice(cardIndex, 1);
}
export function callPlayer(G, ctx, cardIndex) {
  if(cardIndex<G.players[ctx.currentPlayer].hand.length){
    G.players[ctx.currentPlayer].score = G.players[ctx.currentPlayer].score + G.players[ctx.currentPlayer].hand[cardIndex].chuteira;
    G.players[ctx.currentPlayer].playZone.push(      
      G.players[ctx.currentPlayer].hand[cardIndex]      
    );
    G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);
  }
}
export function cleanUp(G, ctx){
  while(G.players[ctx.currentPlayer].playZone.length > 0){
    G.players[ctx.currentPlayer].discardZone.push(
      G.players[ctx.currentPlayer].playZone[0]
    )
    G.players[ctx.currentPlayer].playZone.splice(0, 1);
  }
  
}
export function discardCard(G, ctx, cardIndex) {
  G.players[ctx.currentPlayer].discardZone.push(
    G.players[ctx.currentPlayer].admZone[cardIndex]
  );
  G.players[ctx.currentPlayer].admZone.splice(cardIndex, 1);
}
export function buyCard(G, ctx, cardIndex) {
  if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[cardIndex].cost) {
    var cost = G.offer.offerZone[cardIndex].cost;
    G.players[ctx.currentPlayer].playZone.push(G.offer.offerZone[cardIndex]);
    G.players[ctx.currentPlayer].money =
      G.players[ctx.currentPlayer].money - cost;
    G.offer.offerZone.splice(cardIndex, 1);
  }
}
export function drawHand(G, ctx) {
  while ((G.players[ctx.currentPlayer].hand.length < 5) && ((G.players[ctx.currentPlayer].deck.length > 0) || (G.players[ctx.currentPlayer].discardZone.length > 0))){   
        draw(G, ctx, 1);
    }
}
export function giveOffer(G, ctx) {
  G.offer.offerZone.splice(0,2)
  while (G.offer.offerZone.length < 5) {
    if (G.offer.deck.length > 0) {
      G.offer.offerZone.push(
        G.offer.deck.pop()
      );
    }
  }
}