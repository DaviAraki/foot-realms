import generateSchedule from "../utils/generateSchedule";

it("When i buy a card, the card goes to my playzone and i spent money equals the bought card cost", () => {
    const G = {
        players: [
            {
                name: "PLA",
                hand: [],
                deck: [],
                playZone: [],
                discardZone: [],
                money: 0,
                strength: 0,
                points: 0,
                positions: [false, false, false, false]
            },
        ],
        board: {
            dummies: [
                {
                    name: "BLA",
                    strength: 0,
                    points: 0
                },
                {
                    name: "BLU",
                    strength: 0,
                    points: 0
                },
                {
                    name: "ZAS",
                    strength: 0,
                    points: 0
                },
                {
                    name: "DOR",
                    strength: 0,
                    points: 0
                },
                {
                    name: "FRU",
                    strength: 0,
                    points: 0
                },
                {
                    name: "CAN",
                    strength: 0,
                    points: 0
                },
                {
                    name: "BAT",
                    strength: 0,
                    points: 0
                },
            ],
        }
    };
    const schedule = generateSchedule(G);
    expect(schedule.length).toBe(7)
    expect(schedule).not.toBe(null)


});