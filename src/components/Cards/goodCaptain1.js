import basicCard from "./basicCard";

export default class goodCaptain1 extends basicCard {
    constructor() {
        super({
            name: "goodCaptain1",
            cost: 5,
            chuteira: 5,
            position: "DF",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodCaptain1());
        }
        return cards;
    }
}