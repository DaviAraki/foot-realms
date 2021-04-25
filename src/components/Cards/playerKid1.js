import basicCard from "./basicCard";

export default class playerKid1 extends basicCard {
    constructor() {
        super({
            name: "playerKid1",
            cost: 0,
            chuteira: 1,
            position: "1",
            role:"Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new playerKid1());
        }
        return cards;
    }
}