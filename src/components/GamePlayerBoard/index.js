import React from "react";
import GameCard from "../GameCard";
import "./styles.css";

export default class GameBoard extends React.Component {
  selectCardHandler(k){
    this.props.selectCardHandler(k);
  }
  discardCardHandler(k){
    this.props.discardCardHandler(k);
  }
  playCardHandler(k){
    this.props.playCardHandler(k);
  }
  clickPassPhase () {
    console.log('Pass');
    this.props.clickPassPhase();
  }

  setChallenge(){

  }
  render() {
    let cardsInPlay = this.props.player.playZone.map((card) => (
        <GameCard card={card} key={card.id}/>
      ));  
    let cardsHand = this.props.player.hand.map((card, k) => (
       <GameCard card={card} key={card.id} onClickSelectCard={()=>{this.selectCardHandler(k)}}  />
    ));
    // let cardsDeck = this.props.player.deck.map((card) => (
    //   <GameCard card={card} key={card.id}/>
    // ));
    let cardsAdm = this.props.player.admZone.map((card, k) => (
       <GameCard card={card} key={card.id} onClickDiscardCard={()=>{this.discardCardHandler(k)}} onClickPlayCard={()=>{this.playCardHandler(k)}}/>
    ));
    
    let cardsDiscard = this.props.player.discardZone.map((card, k)=>(
       <GameCard card={card} key={card.id}/>
    ))

    return (
      <div className="player-board">
        
        <h1>{this.props.player.name} </h1>
    <h1>Money: {this.props.player.money} Score: {this.props.player.score} Points: {this.props.player.points}</h1>
        <div className="passButton" onClick={this.clickPassPhase.bind(this)}>Pass</div>
        
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
