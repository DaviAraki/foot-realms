import playerKid0 from "../components/Cards/playerKid0";
import buyCard from "../moves/buyCard";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost", () => {
  const mockId = "abcdef";
  const f1 = new playerKid0();
  f1.id = mockId;
  const f2 = new playerKid0();
  f2.id = mockId;
  const G = {
    players: [
      {
        name: "Player A",
        hand: [],
        deck: [],
        admZone: [],
        playZone: [],
        discardZone: [],
        money: 3,
        score: 0,
        points: 0,
      },
    ],
    board: {
      offerZone: [f1],
    },
  };
  expect(G.board.offerZone[0].cost).toEqual(0);
  buyCard(G, { currentPlayer: "0" }, 0);
  expect(G).toEqual({
    players: [
      {
        name: "Player A",
        hand: [],
        deck: [],
        admZone: [],
        playZone: [],
        discardZone: [f2],
        money: 3,
        score: 0,
        points: 0,
      },
    ],
    board: {
      offerZone: [],
    },
  });
});
