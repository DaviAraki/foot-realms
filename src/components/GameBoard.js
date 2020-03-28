import React from "react";
import GameCard from "./GameCard";

const styleBoard = {
    backgroundColor: "lightgreen",
    border: "1px solid black",

}
const styleOffer = {
    backgroundColor: "green",
    border: "1px solid black",
    height: "65mm",
    color: "white",
}
export default class GameBoard extends React.Component {

    render() {
        let cards = this.props.G.offer.offerZone.map(card => 
            <GameCard card={card} />
        );

        return (
            <div className="game-board" style={styleBoard}>
                <div className="card-offer" style={styleOffer}>
                    <div>Offer:</div>
                    <div className="card-offer-cards">
                        {cards}
                    </div>
                </div>
            </div>)
    }
}