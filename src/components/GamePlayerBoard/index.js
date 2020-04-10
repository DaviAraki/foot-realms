import React from "react";
import GameCard from "../GameCard";
import './styles.css';


export default class GameBoard extends React.Component {

    render() {
        let cardsHand = this.props.player.hand.map(card => 
            <GameCard card={card} />
        );
        let cardsDeck = this.props.player.deck.map(card => 
            <GameCard card={card} />
        );

        return (
            <div className="player-board">
                <h1>{this.props.player.name}</h1>
                <div>
                    <h1>Hand</h1>
                    <div className="player-hand">
                        {cardsHand}
                    </div>
                </div>
                <div>
                    <h1>Deck:</h1>
                    <div className="player-deck">
                        {cardsDeck}
                    </div>
                </div>
                <div>
                    <h1>Discard:</h1>
                    <div className="player-discard">
                        {cardsDeck}
                    </div>
                </div>
            </div>)
    }
}