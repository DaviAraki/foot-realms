import React from "react";
import GameCard from "../GameCard";
import GamePlayerBoard from "../GamePlayerBoard";
import "./styles.css";

export default class GameBoard extends React.Component {
  render() {
    let cards = this.props.G.offer.offerZone.map((card) => (
      <GameCard card={card} key={card.id}/>
    ));
    let players = this.props.G.players.map((player,k) => (
      <GamePlayerBoard player={player} key={`player${k}`}/>
    ));
    return (
      <div className="game-board">
        <div className="card-offer">
          <h1>Offer:</h1>
          <div className="card-offer-cards">{cards}</div>
        </div>
        <div className="player-boards">
          <h1>Players:</h1>
          <div className="player-areas">{players}</div>
        </div>
      </div>
    );
  }
}
