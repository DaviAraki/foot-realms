import basicCard from "./basicCard";

export default class goodCaptain3 extends basicCard {
    constructor() {
        super({
            name: "goodCaptain3",
            cost: 5,
            chuteira: 5,
            position: "3",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodCaptain3());
        }
        return cards;
    }
}