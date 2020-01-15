import commonFoward from "../components/Cards/commonFoward";
import { playCard } from "../App";
import manager2 from "../components/Cards/manager2"

it("When i play a card, i receive the money indicated, i draw the cards indicated and it goes to the playzone", () => {
    const G = {
        players: [
            {
                name: "Player A",
                hand: [],
                deck: [new commonFoward()],
                admZone: [new manager2()],
                playZone: [],
                money: 1,
                score: 0,
                points: 0
            }
        ]
    };
    playCard(G, { currentPlayer: "0" }, 0);
    expect(G).toEqual({
        players: [
            {
                name: "Player A",
                hand: [],
                deck: [],
                admZone: [new commonFoward()],
                playZone: [new manager2()],
                money: 2,
                score: 0,
                points: 0
            }
        ]
    }
    )
})