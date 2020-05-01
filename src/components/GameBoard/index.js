import React from "react";
import GameCard from "../GameCard";
import GamePlayerBoard from "../GamePlayerBoard";
import "./styles.css";

export default class GameBoard extends React.Component {
  buyCardHandler(k) {
    console.log(`buyCardHandler`, k);
    this.props.moves.buyCard(k);
  }

  selectCardHandler(k) {
    console.log(`selectCardHandler`, k);
    this.props.moves.selectCard(k);
  }
  
  render() {
    let cards = this.props.G.offer.offerZone.map((card, k) => (
      <GameCard card={card} key={card.id} onClickBuyCard={()=>{this.buyCardHandler(k)}} />
    ));
    let players = this.props.G.players.map((player, k) => (
      <GamePlayerBoard player={player} key={`player${k}`}  selectCardHandler={this.selectCardHandler.bind(this)} />
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
