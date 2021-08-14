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
        <div className="player-status">
          <h1>Player: {this.props.player.name} </h1>
          <h1>Money: {this.props.player.money} </h1>
          <h1>Strength: {this.props.player.strength} </h1>
          <h1>Points: {this.props.player.points}</h1>
        </div>
        
          
        
  

        <div className="player-hand">
          <h1>Cards in Play</h1>
          <div style={{minHeight: 260}}>{cardsInPlay}</div>
        </div>
        <div className="player-hand">
          <h1>Cards in Hand</h1>
          <div>{cardsHand}
          {(!this.props.ctx.gameover)?(<div className="passButton game-card position0" onClick={this.clickPassPhase.bind(this)}>End your Turn</div>):''}
          </div>
        </div>
        {/* <div className="player-deck">
          <h1>Deck:</h1>
          <div>{cardsDeck}</div>
        </div> */}
        <details className="player-discard">
          <summary>Cards on Discard</summary>
          <div>{cardsDiscard}</div>
        </details>
      </div>
    );
  }
}
