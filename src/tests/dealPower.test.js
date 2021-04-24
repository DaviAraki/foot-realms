import { dealPowerToDummies } from "../actions/gameActions"

it("In the beggining of a turn the dummies get stronger", () => {
    const G = {
        board: {
            dummies: [
                {
                    name: "Bot A",
                    strength: 0
                },
            ],
        }
    };
    dealPowerToDummies(G);
    console.log(G.board.dummies[0].strength)
    expect(G.board.dummies[0].strength).not.toEqual(0);
    expect(G.board.dummies[0].strength).not.toEqual(4)
});