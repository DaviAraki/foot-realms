import React from "react";
import GameCard from "./GameCard";
import GamePlayerBoard from "./GamePlayerBoard";

const styleBoard = {
    backgroundColor: "lightgreen",
    border: "1px solid black",

}
const styleOffer = {
    backgroundColor: "green",
    border: "1px solid black",
    color: "white",
}
const stylePlayers = {
    backgroundColor: "blue",
    border: "1px solid black",
    color: "white",
}
const styleOfferCards = {
    backgroundColor: "green",
    border: "1px solid black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "row",
}

export default class GameBoard extends React.Component {

    render() {
        let cards = this.props.G.offer.offerZone.map(card => 
            <GameCard card={card} />
        );
        let players = this.props.G.players.map(player => 
            <GamePlayerBoard player={player} />
        );
        return (
            <div className="game-board" style={styleBoard}>
                <div className="card-offer" style={styleOffer}>
                    <div>Offer:</div>
                    <div className="card-offer-cards" style={styleOfferCards}>
                        {cards}
                    </div>
                </div>
                <div className="card-players" style={styleOffer}>
                    <div>Players:</div>
                    <div className="card-offer-players" style={stylePlayers}>
                        {players}
                    </div>
                </div>
            
            </div>
            
            )
    }
}