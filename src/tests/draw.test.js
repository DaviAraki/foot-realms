import commonFoward from "../components/Cards/commonFoward";
import { draw } from "../App";
import FootRealms from "../FootRealms";


it("When i draw, the top card of my deck goes to my hand", () => {
  const f = new commonFoward();
  const G = {
    players: [
      {
        name: "Player A",
        hand: [],
        deck: [f],
        admZone: [],
        playZone: [],
        money: 1,
        score: 0,
        points: 0,
      },
    ],
  };
  draw(G, { currentPlayer: "0" }, FootRealms.TO_HAND);
  expect(G.players[0].deck.length).toEqual(0);
  expect(G.players[0].hand.length).toEqual(1);
  expect(G.players[0].hand[0]).toBe(f);
});
it("When i draw, if my deck is empty, the discardZone is shuffled into the deck", () => {
  const f = new commonFoward();
  const G = {
    players: [
      {
        name: "Player A",
        hand: [],
        deck: [],
        admZone: [],
        playZone: [],
        discardZone:[f],
        money: 1,
        score: 0,
        points: 0,
      },
    ],
  };
  draw(G, { currentPlayer: "0"}, FootRealms.TO_HAND);
  expect(G.players[0].deck.length).toEqual(0);
  expect(G.players[0].hand.length).toEqual(1);
  expect(G.players[0].hand[0]).toBe(f);
});

