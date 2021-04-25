import basicCard from "./basicCard";

export default class playerKid extends basicCard {
    constructor() {
        super({
            name: "starCaptain0",
            cost: 7,
            chuteira: 7,
            position: "0",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new playerKid());
        }
        return cards;
    }
}