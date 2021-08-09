import React from "react";
import GameCard from "../GameCard";
import GamePlayerBoard from "../GamePlayerBoard";
import GameSchedule from "../GameSchedule";
import ScoreTrack from "../ScoreTrack";
import "./styles.css";
import ScatterPlot from "../Charts/TrendlineChart";
import "c3/c3.css";
import PointChart from "../Charts/poinstsScoreChart";

export default function GameBoard({ G, ctx, moves, events }) {
  function buyCardHandler(k) {
    console.log(`buyCardHandler`, k);
    moves.buyCard(k);
  }
  // function callPlayerHandler(k) {
  //   console.log(`callPlayerHandler`, k);
  //   moves.callPlayer(k);
  // }
  function playCardHandler(k) {
    console.log(`playCardHandler`, k);
    moves.playCard(k);
  }
  function discardCardHandler(k) {
    console.log(`discardCardHandler`, k);
    moves.discardCard(k);
  }
  function clickPassPhase() {
    console.log(`passPhase`);
    moves.pass();
    console.log(G.players[ctx.currentPlayer].strengthPerTurn);
  }

  let cards = G.board.offerZone.map((card, k) => (
    <GameCard
      card={card}
      key={card.id}
      onClickBuyCard={() => {
        buyCardHandler(k);
      }}
    />
  ));
  let players = G.players.map((player, k) => (
    <GamePlayerBoard
      ctx={ctx}
      player={player}
      key={`player${k}`}
      clickPassPhase={clickPassPhase.bind(this)}
      // callPlayerHandler={callPlayerHandler.bind(this)}
      discardCardHandler={discardCardHandler.bind(this)}
      playCardHandler={playCardHandler.bind(this)}
    />
  ));
  // let schedule = G.players.map((player, k) =>(
  //   <GameSchedule
  //     player={player}
  //     turn={}
  // )
  // let playersAdm = G.players.map((player,k) =>(
  //   <GamePlayerBoard player={player} key={`player${k}`} />
  // ));

  return (
    <div className="game-board">
      <ScoreTrack G={G} />
      <GameSchedule G={G} />
      <div className="card-offer">
        <h1>
          Phase:{ctx.phase} Round:{~~((ctx.turn - 1) / 4) + 1} Quarter:
          {((ctx.turn - 1) % 4) + 1} Is Attacking: {G.board.attacking}
        </h1>
        <h1>Offer:</h1>
        <h1>Challenge: {G.board.desafio}</h1>
        <div className="card-offer-cards">{cards}</div>
      </div>
      <div className="player-boards">
        <h1>Players:</h1>
        <div className="player-areas">{players}</div>
      </div>
      <div className="charts">
        {/* <GameSchedule
          player={G.players[0]}
          turn={ctx.turn}
          bots={G.board.dummies}
        /> */}
        <div>
          <ScatterPlot
            data={G.players[ctx.currentPlayer].strengthPerTurn2}
            data2={G.board.dummies[0].strengthPerTurn}
            data3={G.board.dummies[1].strengthPerTurn}
            data4={G.board.dummies[2].strengthPerTurn}
            data5={G.board.dummies[3].strengthPerTurn}
            data6={G.board.dummies[4].strengthPerTurn}
            data7={G.board.dummies[5].strengthPerTurn}
            data8={G.board.dummies[6].strengthPerTurn}
          />
        </div>
        <div>
          <PointChart
            data={G.players[ctx.currentPlayer].pointsPerTurn}
            data2={G.board.dummies[0].pointsPerTurn}
            data3={G.board.dummies[1].pointsPerTurn}
            data4={G.board.dummies[2].pointsPerTurn}
            data5={G.board.dummies[3].pointsPerTurn}
            data6={G.board.dummies[4].pointsPerTurn}
            data7={G.board.dummies[5].pointsPerTurn}
            data8={G.board.dummies[6].pointsPerTurn}
          />
        </div>
      </div>
    </div>
  );
}
