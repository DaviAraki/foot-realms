import commonCaptain0 from "../components/Cards/commonCaptain0";
import { setDesafio } from "../actions/gameActions";
import superStar from "../components/Cards/superStar";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost", () => {
    const G = {
        offer: {
            offerZone: [new commonCaptain0(), new superStar()],
            turn: 1,
            desafio: 0
        }
    };
    setDesafio(G, { currentPlayer: "0" });
    expect(G.offer.desafio).toEqual(2);

});