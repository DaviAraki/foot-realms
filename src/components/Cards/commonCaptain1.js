import basicCard from "./basicCard";

export default class commonCaptain1 extends basicCard {
    constructor() {
        super({
            name: "commonCaptain1",
            cost: 3,
            chuteira: 3,
            position: "DF",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonCaptain1());
        }
        return cards;
    }
}