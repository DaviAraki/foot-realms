import React from "react";

const styleCard ={
    backgroundColor: "lightyellow",
    border: "1px solid black",

}

export default class GameCard extends React.Component {

    render() {
        return (
            <div className="game-card">
                <div className="game-card-name">{this.props.card.name}</div>
                <div className="game-card-coin">{this.props.card.coin}</div>
                <div className="game-card-cost">{this.props.card.cost}</div>
                <div className="game-card-boots">{this.props.card.chuteira}</div>
            </div>
            )
    }
}