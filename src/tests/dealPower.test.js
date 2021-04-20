import { dealPower } from "../actions/gameActions"

it("In the beggining of a turn the dummies get stronger", () => {
    const G = {
        offer: {
            dummies: [
                {
                    name: "Bot A",
                    strength: 0
                },
            ],
        }
    };
    dealPower(G);
    console.log(G.offer.dummies[0].strength)
    expect(G.offer.dummies[0].strength).not.toEqual(0);
    expect(G.offer.dummies[0].strength).not.toEqual(4)
});