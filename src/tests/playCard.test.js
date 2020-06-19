import commonFoward from "../components/Cards/commonFoward";
import { playCard } from "../Game";
import manager2 from "../components/Cards/manager2"

it("When i play a card, i receive the money indicated, i draw the cards indicated and it goes to the playzone", () => {
    const f = new commonFoward();
    const m = new manager2();
    const G = {
        players: [
            {
                name: "Player A",
                hand: [],
                deck: [f],
                admZone: [m],
                playZone: [],
                money: 1,
                score: 0,
                points: 0
            }
        ]
    };
    playCard(G, { currentPlayer: "0" }, 0);
    expect(G.players[0].admZone.length).toEqual(1);
    expect(G.players[0].admZone[0]).toBe(f);
    expect(G.players[0].playZone.length).toEqual(1);
    expect(G.players[0].playZone[0]).toBe(m);
    expect(G.players[0].money).toEqual(2); 
});