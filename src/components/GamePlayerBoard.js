import React from "react";
import GameCard from "./GameCard";

const styleplayerBoard = {
    backgroundColor: "lightblue",
    border: "1px solid black",

}
const styleOffer = {
    backgroundColor: "blue",
    border: "1px solid black",
    color: "white",
}
const styleOfferCards = {
    backgroundColor: "darkblue",
    border: "1px solid black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "row",
}

export default class GameBoard extends React.Component {

    render() {
        let cardsHand = this.props.player.hand.map(card => 
            <GameCard card={card} />
        );
        let cardsDeck = this.props.player.deck.map(card => 
            <GameCard card={card} />
        );

        return (
            <div className="game-player-board" style={styleplayerBoard}>
                <div className="game-player-hand" style={styleOffer}>
                    <div>Hand:</div>
                    <div className="game-player-cards" style={styleOfferCards}>
                        {cardsHand}
                    </div>
                </div>
                <div className="game-player-deck" style={styleOffer}>
                    <div>Deck:</div>
                    <div className="game-player-cards" style={styleOfferCards}>
                        {cardsDeck}
                    </div>
                </div>
            </div>)
    }
}