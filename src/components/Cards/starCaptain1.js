import basicCard from "./basicCard";

export default class commonCaptain extends basicCard {
    constructor() {
        super({
            name: "starCaptain1",
            cost: 7,
            chuteira: 7,
            position: "DF",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonCaptain());
        }
        return cards;
    }
}