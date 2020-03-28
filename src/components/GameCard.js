import React from "react";

const styleCard ={
    backgroundColor: "brown",
    border: "1px solid black",
    width: "40mm",
    height: "25mm"
}

export default class GameCard extends React.Component {

    render() {
        return (
            <div className="game-card" style={styleCard}>
                <div className="game-card-name">{this.props.card.name}</div>
                <div className="game-card-coin">Money: ${this.props.card.coin}</div>
                <div className="game-card-boots">Skill: {this.props.card.chuteira}</div>
                <div className="game-card-cost">Cost: ${this.props.card.cost}</div>
                <div className="game-card-cost">Power:{this.props.card.power}</div>
            </div>
            )
    }
}