import React from "react";
import GameCard from "../GameCard";
import "./styles.css";

export default class GameBoard extends React.Component {
  render() {
    let cardsInPlay = this.props.player.playZone.map((card) => (
        <GameCard card={card} key={card.id}/>
      ));  
    let cardsHand = this.props.player.hand.map((card) => (
       <GameCard card={card} key={card.id}/>
    ));
    // let cardsDeck = this.props.player.deck.map((card) => (
    //   <GameCard card={card} key={card.id}/>
    // ));
    let cardsAdm = this.props.player.admZone.map((card) => (
       <GameCard card={card} key={card.id}/>
    ));
    let cardsDiscard = this.props.player.discardZone.map((card)=>(
       <GameCard card={card} key={card.id}/>
    ))

    return (
      <div className="player-board">
        <h1>{this.props.player.name}</h1>
        <div className="player-hand">
          <h1>In play</h1>
          <div>{cardsInPlay}</div>
        </div>
        <div className="player-hand">
          <h1>Hand</h1>
          <div>{cardsHand}</div>
        </div>
        <div className="player-admnistration">
          <h1>Administration Zone</h1>
          <div>{cardsAdm}</div>
        </div>
        {/* <div className="player-deck">
          <h1>Deck:</h1>
          <div>{cardsDeck}</div>
        </div> */}
        <div className="player-discard">
          <h1>Discard</h1>
          <div>{cardsDiscard}</div>
        </div>

      </div>
    );
  }
}
