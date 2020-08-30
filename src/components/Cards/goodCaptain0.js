import basicCard from "./basicCard";

export default class goodCaptain0 extends basicCard {
    constructor() {
        super({
            name: "goodCaptain0",
            cost: 5,
            chuteira: 5,
            position: "0",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodCaptain0());
        }
        return cards;
    }
}