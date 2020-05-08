import React from "react";
import "./styles.css";

export default class GameCard extends React.Component {
  clickCardHandler() {
    if (this.props.onClickBuyCard) {
      this.props.onClickBuyCard();
    }
    if (this.props.onClickSelectCard) {
      this.props.onClickSelectCard();
    }
    if(this.props.onClickPlayCard){
      this.props.onClickPlayCard()
    }
  }
  clickDiscardCard () {
    console.log('DISCARD');
    
    if(this.props.onClickDiscardCard){
      this.props.onClickDiscardCard();
    }
  }
  render() {
    const discardAction = this.props.onClickDiscardCard?(<div className="discard" onClick={this.clickDiscardCard.bind(this)}>discard</div>):'';
    return (
      <div className="game-card" onClick={this.clickCardHandler.bind(this)}>
        <div className="name">{this.props.card.name}</div>
        <div className="coin">
          <span role="img" aria-label="Money">
            💰
          </span>
          <div>{this.props.card.coin}</div>
        </div>
        <div className="boots">
          <span role="img" aria-label="Skill">
            ⚽
          </span>
          <div>{this.props.card.chuteira}</div>
        </div>
        <div className="cost">
          <span role="img" aria-label="Money">
            💰
          </span>
          <div>{this.props.card.cost}</div>
        </div>
        <div className="power">
          <label>Power:</label>
          {this.props.card.power}
        </div>
        {discardAction}
      </div>
    );
  }
}
