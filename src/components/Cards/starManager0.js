import basicCard from "./basicCard";

export default class starManager0 extends basicCard {
    constructor() {
        super({
            name: "starManager0",
            cards: 2,
            coin: 5,
            cost: 7,
            position: "FW",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new starManager0());
        }
        return cards;
    }
}