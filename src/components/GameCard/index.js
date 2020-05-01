import React from "react";
import "./styles.css";

export default class GameCard extends React.Component {
  clickCardHandler() {
    if (this.props.onClickBuyCard) {
      this.props.onClickBuyCard();
    }
  }
  render() {
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
      </div>
    );
  }
}
