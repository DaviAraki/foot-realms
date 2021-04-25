import dealPowerToDummies  from "../actions/dealPowerToDummies"

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
    dealPowerToDummies(G,{turn: 2});
    console.log(G.board.dummies[0].strength)
    expect(G.board.dummies[0].strength).not.toEqual(0);
    expect(G.board.dummies[0].strength).not.toEqual(4)
});