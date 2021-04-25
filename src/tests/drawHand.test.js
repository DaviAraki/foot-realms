import playerKid0 from "../components/Cards/playerKid0";
import  draw  from "../actions/draw";
import drawHand from '../actions/drawHand'

it("When the turn begins i draw until i have 5 cards", () => {
    const G = {
        players: [
            {
                name: "Player A",
                hand: [],
                deck: [new playerKid0(), new playerKid0(), new playerKid0(), new playerKid0(), new playerKid0()],
                admZone: [],
                playZone: [],
                discardZone: [],
                money: 1,
                score: 0,
                points: 0
            }
        ]
    };
    drawHand(G, { currentPlayer: "0" }, 1);
    expect(G.players[0].hand.length).toEqual(5);
    expect(G.players[0].deck.length).toEqual(0);
});
it("When the turn begins i draw until i have 5 cards, if my deck run out of cards the discardZone shall be shuffled", () => {
    const G = {
        players: [
            {
                name: "Player A",
                hand: [],
                deck: [new playerKid0(), new playerKid0(), new playerKid0()],
                admZone: [],
                discardZone: [new playerKid0(), new playerKid0()],
                playZone: [],
                money: 1,
                score: 0,
                points: 0
            }
        ]
    };
    drawHand(G, { currentPlayer: "0" }, 1);
    expect(G.players[0].hand.length).toEqual(5);
    expect(G.players[0].deck.length).toEqual(0);
});

it("When the turn begins i draw until i have 5 cards, if my deck run out of cards the discardZone shall be shuffled, if together they have less than 5 cards i take just the ones left", () => {
    const G = {
        players: [
            {
                name: "Player A",
                hand: [],
                deck: [new playerKid0()],
                admZone: [],
                discardZone: [new playerKid0(), new playerKid0()],
                playZone: [],
                money: 1,
                score: 0,
                points: 0
            }
        ]
    };
    drawHand(G, { currentPlayer: "0" }, 1);
    expect(G.players[0].hand.length).toEqual(3);
    expect(G.players[0].deck.length).toEqual(0);
});