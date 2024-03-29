import bigManager from "./components/Cards/bigManager";
import commonCaptain0 from "./components/Cards/commonCaptain0";
import commonCaptain1 from "./components/Cards/commonCaptain1";
import commonCaptain2 from "./components/Cards/commonCaptain2";
import commonCaptain3 from "./components/Cards/commonCaptain3";
import smallCaterpillar0 from "./components/Cards/smallCaterpillar0";
import smallCaterpillar1 from "./components/Cards/smallCaterpillar1";
import smallCaterpillar2 from "./components/Cards/smallCaterpillar2";
import smallCaterpillar3 from "./components/Cards/smallCaterpillar3";
import goodManager0 from "./components/Cards/goodManager0";
import goodManager1 from "./components/Cards/goodManager1";
import goodManager2 from "./components/Cards/goodManager2";
import goodManager3 from "./components/Cards/goodManager3";
import starManager0 from "./components/Cards/starManager0";
import starManager1 from "./components/Cards/starManager1";
import starManager2 from "./components/Cards/starManager2";
import starManager3 from "./components/Cards/starManager3";
import goodCaptain0 from "./components/Cards/goodCaptain0";
import goodCaptain1 from "./components/Cards/goodCaptain1";
import goodCaptain2 from "./components/Cards/goodCaptain2";
import goodCaptain3 from "./components/Cards/goodCaptain3";
import starCaptain0 from "./components/Cards/starCaptain0";
import starCaptain1 from "./components/Cards/starCaptain1";
import starCaptain2 from "./components/Cards/starCaptain2";
import starCaptain3 from "./components/Cards/starCaptain3";
import generateUniqueId from "./utils/generateUniqueId";
const fs = require('browserify-fs');

var matchData = String;

const FootRealms = {
  name: "FootRealms",
  setup: () => ({
    players: [
      {
        id: generateUniqueId(),
        name: "Player A",
        hand: [],
        deck: [].concat(commonCaptain0.create(2), commonCaptain1.create(2), commonCaptain2.create(2), commonCaptain3.create(2), smallCaterpillar0.create(2), smallCaterpillar1.create(2), smallCaterpillar2.create(2), smallCaterpillar3.create(2)),
        playZone: [],
        discardZone: [],
        money: 0,
        score: 0,
        points: 0,
        positions:[false,false,false,false]
      },
      {
        id: generateUniqueId(),
        name: "Player B",
        hand: [],
        deck: [].concat(commonCaptain0.create(2), commonCaptain1.create(2), commonCaptain2.create(2), commonCaptain3.create(2), smallCaterpillar0.create(2), smallCaterpillar1.create(2), smallCaterpillar2.create(2), smallCaterpillar3.create(2)),
        playZone: [],
        discardZone: [],
        money: 0,
        score: 0,
        points: 0,
        positions: [false, false, false, false]
      }
    ],
    offer: {
      offerZone: [],
      deck: [].concat(
        bigManager.create(5),
        smallCaterpillar0.create(3),
        smallCaterpillar1.create(3),
        smallCaterpillar2.create(3),
        smallCaterpillar3.create(3),
        goodManager0.create(2),
        goodManager1.create(2),
        goodManager2.create(2),
        goodManager3.create(2),
        starManager0.create(1),
        starManager1.create(1),
        starManager2.create(1),
        starManager3.create(1),
        commonCaptain0.create(3),
        commonCaptain1.create(3),
        commonCaptain2.create(3),
        commonCaptain3.create(3),
        goodCaptain0.create(2),
        goodCaptain1.create(2),
        goodCaptain2.create(2),
        goodCaptain3.create(2),
        starCaptain0.create(1),
        starCaptain1.create(1),
        starCaptain2.create(1),
        starCaptain3.create(1),
      ),
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
      if(ctx.currentPlayer.points >= 15){
        return {winner: ctx.currentPlayer}
      }
      matchData = matchData + `CREATE(:Points { Total: '${G.players[ctx.currentPlayer].points}' });`
      fs.mkdir('/home', function () {
        fs.writeFile('/home/hello-world.txt', matchData, function () {
          fs.readFile('/home/hello-world.txt', 'utf-8', function (err, data) {
            console.log(data);
          });
        });
      });
      return G.players[ctx.currentPlayer].points;
    }
  },

  phases: {
    setUpPhase: {
      onBegin: (G, ctx) => {
        writeCypherSetup();
        shuffleOffer(G);
        shuffle(G, ctx);
        pass(G, ctx);
      },
      next: "playPhase",
      start: true,
    },
    playPhase: {
      moves: {pass, playCard, buyCard},
      onBegin: (G, ctx) => {
        drawHand(G, ctx);
        giveOffer(G, ctx);
        setDesafio(G, ctx);
      },
      onEnd: (G, ctx) => {
        defineWinner(G, ctx);
        cleanUp(G, ctx);
        G.offer.turn++;
      },
      next: "playPhase",
    },
  },

  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      if (ctx.phase === "playPhase") {
        moves.push({ move: "pass", args: null })
        for (let i = 0; i < G.offer.offerZone.length; i++) {
          if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[i].cost) {
            moves.push({ move: "buyCard", args: [i] });
          }
        }
        for (let i = 0; i < G.players[ctx.currentPlayer].hand.length; i++) {
          moves.push({ move: "callPlayer", args: [i] });
        }
      }
      return moves;
    },
  },
};
function writeCypherSetup(){
  const idk = new Date().getTime()
  matchData = `CREATE
    (:Game {id:${idk}})-[:FIRST_TURN]->(:Turn { Number: '1' })-[:NEXT_TURN]->
    (:Turn { Number: '2' })-[:NEXT_TURN]->
    (:Turn { Number: '3' })-[:NEXT_TURN]->
    (:Turn { Number: '4' })-[:NEXT_TURN]->
    (:Turn { Number: '5' })-[:NEXT_TURN]->
    (:Turn { Number: '6' })-[:NEXT_TURN]->
    (:Turn { Number: '7' })-[:NEXT_TURN]->
    (:Turn { Number: '8' }),
    (:Card { Name: 'smallCaterpillar0' }),
    (:Card { Name: 'smallCaterpillar1' }),
    (:Card { Name: 'smallCaterpillar2' }),
    (:Card { Name: 'smallCaterpillar3' }),
    (:Card { Name: 'goodManager0' }),
    (:Card { Name: 'goodManager1' }),
    (:Card { Name: 'goodManager2' }),
    (:Card { Name: 'goodManager3' }),
    (:Card { Name: 'starManager0' }),
    (:Card { Name: 'starManager1' }),
    (:Card { Name: 'starManager2' }),
    (:Card { Name: 'starManager3' }),
    (:Card { Name: 'commonCaptain0' }),
    (:Card { Name: 'commonCaptain1' }),
    (:Card { Name: 'commonCaptain2' }),
    (:Card { Name: 'commonCaptain3' }),
    (:Card { Name: 'goodCaptain0' }),
    (:Card { Name: 'goodCaptain1' }),
    (:Card { Name: 'goodCaptain2' }),
    (:Card { Name: 'goodCaptain3' }),
    (:Card { Name: 'starCaptain0' }),
    (:Card { Name: 'starCaptain1' }),
    (:Card { Name: 'starCaptain2' }),
    (:Card { Name: 'starCaptain3' }),;`
  }

function draw(G, ctx) {
  if (G.players[ctx.currentPlayer].deck.length === 0) {
    G.players[ctx.currentPlayer].deck =
      G.players[ctx.currentPlayer].discardZone;
    G.players[ctx.currentPlayer].discardZone = [];
    shuffle(G, ctx);
  }
  if (G.players[ctx.currentPlayer].deck.length > 0) {
      matchData= matchData + `MATCH (c:Card)
      WHERE c.Name = '${G.players[ctx.currentPlayer].deck[0].name}'
      MATCH (t:Turn)
      WHERE t.Number = '${G.offer.turn + 1}'
      CREATE (c)-[:In_Hand]->(t);`
      G.players[ctx.currentPlayer].hand.push(
        G.players[ctx.currentPlayer].deck.shift()
      );
  }
}
function setDesafio(G, ctx) {
  G.offer.desafio = G.offer.turn *2;
}
// function setDesafio(G, ctx) {
//   if (G.offer.offerZone.length > 0) {
//     if (G.offer.turn < 2) {
//       for (let i = 0; i < 2; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     } else if (G.offer.turn < 4) {
//       for (let i = 0; i < 3; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     } else if (G.offer.turn < 6) {
//       for (let i = 0; i < 4; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     } else if (G.offer.turn >= 6) {
//       for (let i = 0; i < 5; i++) {
//         G.offer.desafio = G.offer.desafio + G.offer.offerZone[i].chuteira;
//       }
//     }
//   }
// }
function defineWinner(G, ctx) {
  if (G.players[ctx.currentPlayer].score > G.offer.desafio) {
    G.players[ctx.currentPlayer].points =
      G.players[ctx.currentPlayer].points + 3;
  } else if (G.players[ctx.currentPlayer].score === G.offer.desafio) {
    G.players[ctx.currentPlayer].points =
      G.players[ctx.currentPlayer].points + 1;
  }
  G.players[ctx.currentPlayer].score = 0;
  G.offer.desafio = 0;
}
// function shuffle(G, ctx) {
//   G.players[ctx.currentPlayer].deck = ctx.random.Shuffle(G.players[ctx.currentPlayer].deck);
// }
function shuffle(G, ctx) {
  G.players[ctx.currentPlayer].deck.sort(() => Math.random() - 0.5);
}
function shuffleOffer(G) {
  G.offer.deck.sort(() => Math.random() - 0.5);
}
function pass(G, ctx) {
  ctx.events.endPhase();
}

function playCard(G, ctx, cardIndex) {
  if(G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position]===true){
    if(G.players[ctx.currentPlayer].hand[cardIndex].role==="Player"){
      G.players[ctx.currentPlayer].score =
        G.players[ctx.currentPlayer].score + 2
    } else {
      G.players[ctx.currentPlayer].money =
      G.players[ctx.currentPlayer].money + 2 
    }
  } else{
    G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position] = true
    for(let i = 0; i<G.players[ctx.currentPlayer].playZone.length - 1; i++){
      if(G.players[ctx.currentPlayer].playZone[i].position === G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position]||G.players[ctx.currentPlayer].playZone[i].role==="Player"){
        G.players[ctx.currentPlayer].score =
          G.players[ctx.currentPlayer].score + 2
      }
      if(G.players[ctx.currentPlayer].playZone[i].position === G.players[ctx.currentPlayer].positions[G.players[ctx.currentPlayer].hand[cardIndex].position]||G.players[ctx.currentPlayer].playZone[i].role==="Staff"){
        G.players[ctx.currentPlayer].money =
          G.players[ctx.currentPlayer].money + 2
      }   
    } 
  }
  if(G.players[ctx.currentPlayer].hand[cardIndex].role==="Player"){
    if (cardIndex < G.players[ctx.currentPlayer].hand.length) {  
      matchData= matchData + `MATCH (c:Card)
      WHERE c.Name = '${G.players[ctx.currentPlayer].hand[cardIndex].name}'
      MATCH (t:Turn)
      WHERE t.Number = '${G.offer.turn + 1}'
      CREATE (c)-[:Was_Selected]->(t);`
      G.players[ctx.currentPlayer].score =
        G.players[ctx.currentPlayer].score +
        G.players[ctx.currentPlayer].hand[cardIndex].chuteira;
      G.players[ctx.currentPlayer].playZone.push(
        G.players[ctx.currentPlayer].hand[cardIndex]
      );
      G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);
    }
  }else  if (G.players[ctx.currentPlayer].hand[cardIndex].role === "Staff") {
    matchData= matchData + `MATCH (c:Card)
    WHERE c.Name = '${G.players[ctx.currentPlayer].hand[cardIndex].name}'
    MATCH (t:Turn)
    WHERE t.Number = '${G.offer.turn + 1}'
    CREATE (c)-[:Was_Played]->(t);`
    G.players[ctx.currentPlayer].money =
      G.players[ctx.currentPlayer].money +
      G.players[ctx.currentPlayer].hand[cardIndex].coin;
    for (
      var i = 0;
      i < G.players[ctx.currentPlayer].hand[cardIndex].cards;
      i++
    ) {
      draw(G, ctx);
    }
    G.players[ctx.currentPlayer].playZone.push(
      G.players[ctx.currentPlayer].hand[cardIndex]
    );
    G.players[ctx.currentPlayer].hand.splice(cardIndex, 1);
  }
}
function cleanUp(G, ctx) {
  while (G.players[ctx.currentPlayer].playZone.length > 0) {
    G.players[ctx.currentPlayer].discardZone.push(
      G.players[ctx.currentPlayer].playZone[0]
    );
    G.players[ctx.currentPlayer].playZone.splice(0, 1);
  }
}
// function discardCard(G, ctx, cardIndex) {
//   G.players[ctx.currentPlayer].discardZone.push(
//     G.players[ctx.currentPlayer].admZone[cardIndex]
//   );
//   G.players[ctx.currentPlayer].admZone.splice(cardIndex, 1);
// }
function buyCard(G, ctx, cardIndex) {
  if (G.players[ctx.currentPlayer].money >= G.offer.offerZone[cardIndex].cost) {
    G.players[ctx.currentPlayer].playZone.push(G.offer.offerZone[cardIndex]);
    G.players[ctx.currentPlayer].money =
      G.players[ctx.currentPlayer].money - G.offer.offerZone[cardIndex].cost;
    matchData= matchData + `MATCH (c:Card)
    WHERE c.Name = '${ G.offer.offerZone[cardIndex].name}'
    MATCH (t:Turn)
    WHERE t.Number = '${G.offer.turn + 1}'
    CREATE (c)-[:Was_Bought]->(t);`  
    G.offer.offerZone.splice(cardIndex, 1);
  }
}
function drawHand(G, ctx) {
  while (
    G.players[ctx.currentPlayer].hand.length < 5 &&
    (G.players[ctx.currentPlayer].deck.length > 0 ||
      G.players[ctx.currentPlayer].discardZone.length > 0)
  ) {
    draw(G, ctx, 1);
  }
}
function giveOffer(G, ctx) {
  G.offer.offerZone.splice(0, 2);
  while (G.offer.offerZone.length < 5) {
    if (G.offer.deck.length > 0) {
      G.offer.offerZone.push(G.offer.deck.pop());
    }
  }
}


export {
  FootRealms,
  draw,
  setDesafio,
  defineWinner,
  shuffle,
  shuffleOffer,
  pass,
  playCard,
  cleanUp,
  buyCard,
  drawHand,
  giveOffer,
};
