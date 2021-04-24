import React from "react";
import GameCard from "../GameCard";
import "./styles.css";

export default class GameBoard extends React.Component {
  // callPlayerHandler(k){
  //   this.props.callPlayerHandler(k);
  // }
  discardCardHandler(k) {
    this.props.discardCardHandler(k);
  }
  playCardHandler(k) {
    this.props.playCardHandler(k);
  }
  clickPassPhase() {
    console.log('Pass');
    this.props.clickPassPhase();
  }

  setChallenge() {

  }
  render() {
    let cardsInPlay = this.props.player.playZone.map((card) => (
      <GameCard card={card} key={card.id} />
    ));
    let cardsHand = this.props.player.hand.map((card, k) => (
      <GameCard card={card} key={card.id} onClickPlayCard={() => { this.playCardHandler(k) }} />
    ));
    // let cardsDeck = this.props.player.deck.map((card) => (
    //   <GameCard card={card} key={card.id}/>
    // ));
    // let cardsAdm = this.props.player.admZone.map((card, k) => (
    //    <GameCard card={card} key={card.id} onClickDiscardCard={()=>{this.discardCardHandler(k)}} onClickPlayCard={()=>{this.playCardHandler(k)}}/>
    // ));

    let cardsDiscard = this.props.player.discardZone.map((card, k) => (
      <GameCard card={card} key={card.id} />
    ))

    return (
      <div className="player-board">

        <h1>{this.props.player.name} </h1>
        <h1>Money: {this.props.player.money} Strength: {this.props.player.strength} Points: {this.props.player.points}</h1>
        <div className="passButton" onClick={this.clickPassPhase.bind(this)}>Pass</div>

        <div className="player-hand">
          <h1>In play</h1>
          <div>{cardsInPlay}</div>
        </div>
        <div className="player-hand">
          <h1>Hand</h1>
          <div>{cardsHand}</div>
        </div>
        {/* <div className="player-deck">
          <h1>Deck:</h1>
          <div>{cardsDeck}</div>
        </div> */}
        <details className="player-discard">
          <summary>
            Discard
          </summary>
          <div>{cardsDiscard}</div>
        </details>
      </div>
    );
  }
}
