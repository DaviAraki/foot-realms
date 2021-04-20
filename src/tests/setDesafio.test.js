import commonCaptain0 from "../components/Cards/commonCaptain0";
import { setDesafio } from "../actions/gameActions";
import superStar from "../components/Cards/superStar";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost", () => {
    const G = {
        offer: {
            turn: 0,
            desafio: 0,
            dummies: [
                {
                    name: "Bot 1",
                    strength: 3
                }
            ]
        }
    };
    setDesafio(G);
    expect(G.offer.desafio).toEqual(3);

});