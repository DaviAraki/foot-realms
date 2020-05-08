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
  playCardHandler(k){
    console.log(`playCardHandler`, k)
    this.props.moves.playCard(k);
  }
  discardCardHandler(k){
    console.log(`discardCardHandler`, k);
    this.props.moves.discardCard(k);
  }
  clickPassPhase(){
    console.log(`passPhase`);
    this.props.moves.pass();
  }


  
  render() {
    let cards = this.props.G.offer.offerZone.map((card, k) => (
      <GameCard card={card} key={card.id} onClickBuyCard={()=>{this.buyCardHandler(k)}} />
    ));
    let players = this.props.G.players.map((player, k) => (
      <GamePlayerBoard player={player} key={`player${k}`}
        clickPassPhase={this.clickPassPhase.bind(this)}
        selectCardHandler={this.selectCardHandler.bind(this)} 
        discardCardHandler={this.discardCardHandler.bind(this)}
        playCardHandler={this.playCardHandler.bind(this)}
       />
    ));
    // let playersAdm = this.props.G.players.map((player,k) =>(
    //   <GamePlayerBoard player={player} key={`player${k}`} />
    // ));
    return (
      <div className="game-board">
        <div className="card-offer">
        <h1>Phase:{this.props.ctx.phase} Turn:{this.props.G.offer.turn + 1}</h1>
          <h1>Offer:</h1>
          <h1>Challenge: {this.props.G.offer.desafio}</h1>
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
