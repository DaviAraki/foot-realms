import React from "react";
import GameCard from "../GameCard";
import GamePlayerBoard from "../GamePlayerBoard";
import GameSchedule from "../GameSchedule";
import ScoreTrack from "../ScoreTrack";
import "./styles.css";

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
      <div className="schedule">
        <GameSchedule
          player={G.players[0]}
          turn={ctx.turn}
          bots={G.board.dummies}
        />
      </div>
    </div>
  );
}
