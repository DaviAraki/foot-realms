import { setMatchWinners } from '../actions/gameActions'

it("In the end of a round the teams play each other and in they score acording to the result", () => {
    const G = {
        schedule: {
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
    setMatchWinners(G);
    expect(G.offer.desafio).toEqual(3);

});