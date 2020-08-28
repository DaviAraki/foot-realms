import basicCard from "./basicCard";

export default class commonCaptain extends basicCard {
    constructor() {
        super({
            name: "starCaptain3",
            cost: 7,
            chuteira: 7,
            position: "FW",
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